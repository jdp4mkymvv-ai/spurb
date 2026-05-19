import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const listingPayloadSchema = z.object({
  assetId: z.string().min(1),
  platform: z.string().min(2),
  url: z.string().url().optional(),
  active: z.boolean().optional(),
  priceMonth: z.number().nonnegative().optional(),
  status: z.string().min(1).optional()
});

export async function GET() {
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
