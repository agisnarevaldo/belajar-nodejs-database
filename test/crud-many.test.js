import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid'; // Import fungsi uuid
const prismaClient = new PrismaClient();

describe('Prisma Client', () => {
    it('should be create many records', async () => {
        const result = await prismaClient.customer.createMany({
            data: [
                {
                    id: uuidv4(), // Gunakan uuid untuk menghasilkan ID unik
                    email: "joko@mail.com",
                    phone: "029382342",
                    name: "Joko"
                },
                {
                    id: uuidv4(), // Gunakan uuid untuk menghasilkan ID unik
                    email: "siga@mail.com",
                    phone: "0938223423342",
                    name: "Siga"
                }
            ]
        });
        expect(result.count).toBe(2); // Pastikan Anda menggunakan `result.count`
    });

    it('should can update many records', async () => {
        const result = await prismaClient.customer.updateMany({
            data: {
                email: "agisna@revaldo.com",
            },
            where: {
                name: "Muhamad Agisna Revaldo"
            }
        });

        expect(result.count).toBe(1);
    })

    it('should can delete many records', async () => {
        const result = await prismaClient.customer.deleteMany({
            where: {
                name: "agisna1"
            }
        });
        expect(result.count).toBe(3);
    })

    it('should can read many records', async () => {
        const customers = await prismaClient.customer.findMany({});
        console.info(customers);
        expect(customers.length).toBe(9);
    })
})