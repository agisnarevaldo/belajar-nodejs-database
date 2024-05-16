import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

describe("Prisma Client", () => {
    it('should can do paging', async () => {
        const page1 = await prismaClient.costumer.findMany({
            skip: 0,
            take: 1
        });
        expect(page1.length).toBe(1);

        const page2 = await prismaClient.costumer.findMany({
            skip: 1,
            take: 1
        });
        expect(page2.length).toBe(1);

        const page3 = await prismaClient.costumer.findMany({
            skip: 2,
            take: 1
        });
        expect(page3.length).toBe(1);
    })
})