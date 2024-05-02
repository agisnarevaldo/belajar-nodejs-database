import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

describe("Prisma Client", () => {
  it("should be able to execute sql", async () => {
    const id = "1";
    const name = "Agisna Revaldo";

    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id, name) VALUES (${id}, ${name});`;
    expect(impacted).toBe(1);
  });
});

describe("Delete", () => {
  it("should be able to delete", async () => {
    const id = "1";

    const impacted =
      await prismaClient.$executeRaw`DELETE FROM sample WHERE id = ${id};`;
    expect(impacted).toBe(1);
  });
});
