import { AssetType } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const assetPayloadSchema = z.object({
  ownerEmail: z.string().email(),
  ownerName: z.string().min(1).optional(),
  type: z.nativeEnum(AssetType),
  title: z.string().min(3),
  description: z.string().optional(),
  address: z.string().min(5),
  priceMonth: z.number().nonnegative().optional()
});

export async function GET() {
  try {
    const assets = await prisma.asset.findMany({
      include: {
        owner: true,
        listings: true,
        leases: true
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return NextResponse.json({ assets });
  } catch (error) {
    return NextResponse.json(
      {
        assets: [],
        error: "Unable to load assets from the database yet.",
        detail: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const json = await request.json();
  const payload = assetPayloadSchema.parse(json);

  const asset = await prisma.asset.create({
    data: {
      owner: {
        connectOrCreate: {
          where: { email: payload.ownerEmail },
          create: {
            email: payload.ownerEmail,
            name: payload.ownerName
          }
        }
      },
      type: payload.type,
      title: payload.title,
      description: payload.description,
      address: payload.address,
      priceMonth: payload.priceMonth
    },
    include: {
      owner: true
    }
  });

  return NextResponse.json({ asset }, { status: 201 });
}
