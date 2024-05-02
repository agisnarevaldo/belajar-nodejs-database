import { PrismaClient } from "@prisma/client";

export const PrismaClient = new PrismaClient({
    errorFormat: "pretty",
    log: ["info", "warn", "error", "query"]
});