import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();

describe("Prisma Client", () => {
    it("should be able to create customer", async () => {
        const customer = await prismaClient.customer.create({
            data: {
                id: "002",
                email: "bug@mai.com",
                name: "bug",
                phone: "8U9",
            },
        });
    });

    it("should be able to update customer", async () => {
        const customer = await prismaClient.customer.update({
            data: {
                name: "Muhamad Agisna Revaldo"
            },
            where: {
                id: "001"
            }
        });

        expect(customer.name).toBe("Muhamad Agisna Revaldo");
    });

    it("should be able to read customer", async () => {
        const customer = await prismaClient.customer.findUnique({
            where: {
                id: "001"
            }
        });

        expect(customer.name).toBe("Muhamad Agisna Revaldo");
    });

    it("should be able to delete customer", async () => {
        const customer = await prismaClient.customer.delete({
            where: {
                id: "002"
            }
        });
        expect(customer.id).toBe("002");
    });

});
