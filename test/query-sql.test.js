import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

describe("Prisma Client", () => {
  it("should be able to query sql", async () => {
    const id = "1";

    const samples =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id};`;

    for (const sample of samples) {
      console.info(`Result sample id: ${sample.id} and name ${sample.name}`);
    }
  });
});
