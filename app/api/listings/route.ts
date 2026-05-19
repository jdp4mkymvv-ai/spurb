import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const listingPayloadSchema = z.object({
  assetId: z.string().min(1),
  platform: z.string().min(2),
  externalId: z.string().optional(),
  url: z.string().url().optional(),
  active: z.boolean().optional()
});

export async function GET() {
  try {
    const listings = await prisma.listing.findMany({
      include: {
        asset: {
          include: {
            owner: true
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
      externalId: payload.externalId,
      url: payload.url,
      active: payload.active ?? true
    },
    include: {
      asset: true
    }
  });

  return NextResponse.json({ listing }, { status: 201 });
}
