import { NextResponse } from "next/server";
import { z } from "zod";
import { getPrismaClient } from "@/lib/prisma";

const assetPayloadSchema = z.object({
  ownerEmail: z.string().email().optional(),
  ownerName: z.string().min(1).optional(),
  email: z.string().email().optional(),
  name: z.string().min(1).optional(),
  type: z.string().min(1),
  title: z.string().min(3).optional(),
  description: z.string().optional(),
  address: z.string().min(5),
  priceMonth: z.number().nonnegative().optional(),
  surface: z.number().nonnegative().optional(),
  available: z.boolean().optional(),
  status: z.string().min(1).optional()
});

export async function GET() {
  const prisma = getPrismaClient();

  if (!prisma) {
    return NextResponse.json(
      {
        assets: [],
        error: "Database features are not available yet.",
        detail: "Landing-only mode is active."
      },
      { status: 503 }
    );
  }

  try {
    const assets = await prisma.asset.findMany({
      include: {
        user: true,
        listings: true,
        leases: true,
        agentLogs: true
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
  const prisma = getPrismaClient();

  if (!prisma) {
    return NextResponse.json(
      {
        error: "Asset creation is not available yet.",
        detail: "Landing-only mode is active."
      },
      { status: 503 }
    );
  }

  const json = await request.json();
  const payload = assetPayloadSchema.parse(json);
  const email = payload.ownerEmail ?? payload.email;

  if (!email) {
    return NextResponse.json(
      { error: "ownerEmail or email is required." },
      { status: 400 }
    );
  }

  const mergedDescription = [payload.title, payload.description]
    .filter((value): value is string => Boolean(value?.trim()))
    .join(" - ");

  const asset = await prisma.asset.create({
    data: {
      user: {
        connectOrCreate: {
          where: { email },
          create: {
            email,
            name: payload.ownerName ?? payload.name
          }
        }
      },
      type: payload.type,
      description: mergedDescription || undefined,
      address: payload.address,
      surface: payload.surface,
      available: payload.available,
      status: payload.status,
      listings: payload.priceMonth
        ? {
            create: [
              {
                platform: "spurb",
                priceMonth: payload.priceMonth,
                status: "draft"
              }
            ]
          }
        : undefined
    },
    include: {
      user: true,
      listings: true
    }
  });

  return NextResponse.json({ asset }, { status: 201 });
}
