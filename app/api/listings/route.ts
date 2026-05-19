import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrismaClient } from "@/lib/prisma";

const listingPayloadSchema = z.object({
  assetId: z.string().min(1),
  platform: z.string().min(2),
  url: z.string().url().optional(),
  active: z.boolean().optional(),
  priceMonth: z.number().nonnegative().optional(),
  status: z.string().min(1).optional()
});

export async function GET() {
  const prisma = getPrismaClient();

  if (!prisma) {
    return NextResponse.json(
      {
        listings: [],
        error: "Database features are not available yet.",
        detail: "Landing-only mode is active."
      },
      { status: 503 }
    );
  }

  try {
    const listings = await prisma.listing.findMany({
      include: {
        asset: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json({ listings });
  } catch (error) {
    return NextResponse.json(
      {
        listings: [],
        error: "Unable to load listings from the database yet.",
        detail: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const prisma = getPrismaClient();

  if (!prisma) {
    return NextResponse.json(
      {
        error: "Listing creation is not available yet.",
        detail: "Landing-only mode is active."
      },
      { status: 503 }
    );
  }

  const json = await request.json();
  const payload = listingPayloadSchema.parse(json);

  const listing = await prisma.listing.create({
    data: {
      assetId: payload.assetId,
      platform: payload.platform,
      url: payload.url,
      priceMonth: payload.priceMonth ?? 0,
      status: payload.status ?? (payload.active === false ? "inactive" : "active")
    },
    include: {
      asset: true
    }
  });

  return NextResponse.json({ listing }, { status: 201 });
}
