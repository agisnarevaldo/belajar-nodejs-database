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
})