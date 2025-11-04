// create a instance of prisma client for connection to db and prisma orm operations/instance

// / Declare a global variable for PrismaClient to prevent multiple instances in development

// This helps with hot-reloading in frameworks like Next.js 

// create a prisma instance and cache in development
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;