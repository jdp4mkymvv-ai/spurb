type PrismaMethod = (...args: any[]) => Promise<any>;

type PrismaModel = {
  findMany: PrismaMethod;
  create: PrismaMethod;
};

export type PrismaClientLike = {
  asset: PrismaModel;
  listing: PrismaModel;
};

const globalForPrisma = globalThis as typeof globalThis & {
  prisma?: PrismaClientLike | null;
  prismaAvailabilityLogged?: boolean;
};

function logPrismaUnavailable(reason: string) {
  if (globalForPrisma.prismaAvailabilityLogged) {
    return;
  }

  console.warn(`Prisma unavailable; running in landing-only mode. ${reason}`);
  globalForPrisma.prismaAvailabilityLogged = true;
}

export function getPrismaClient(): PrismaClientLike | null {
  if (!process.env.DATABASE_URL) {
    logPrismaUnavailable("DATABASE_URL is not set.");
    return null;
  }

  if (globalForPrisma.prisma !== undefined) {
    return globalForPrisma.prisma;
  }

  try {
    const { PrismaClient } = require("@prisma/client") as {
      PrismaClient: new (options: { log: string[] }) => PrismaClientLike;
    };

    const prisma = new PrismaClient({
      log:
        process.env.NODE_ENV === "development"
          ? ["query", "warn", "error"]
          : ["error"]
    });

    globalForPrisma.prisma = prisma;
    return prisma;
  } catch (error) {
    logPrismaUnavailable(
      error instanceof Error ? error.message : "The generated Prisma client could not be loaded."
    );
    globalForPrisma.prisma = null;
    return null;
  }
}
