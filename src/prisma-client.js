import { PrismaClient } from "../generated/prisma/client";

export const prismaClient = new PrismaClient({
  errorFormat: "pretty",
  log: ["info", "warn", "error", "query"],
});
