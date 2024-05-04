import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient;
import { v4 as uuidv4 } from "uuid";

describe("Prisma Client", () => {
    it("should can execute sequential transaction", async () => {
        const [agisna, revaldo] = await prismaClient.$transaction([
            prismaClient.customer.create({
                data: {
                    id: uuidv4(),
                    email: `agis-${uuidv4()}@mail.com`,
                    name: "agisna",
                    phone: `08${uuidv4()}`
                }
            }),
            prismaClient.customer.create({
                data: {
                    id: uuidv4(),
                    email: `reval-${uuidv4()}@mail.com`,
                    name: "revaldo",
                    phone: `08${uuidv4()}`
                }
            })
        ])
        expect(agisna.name).toBe("agisna");
        expect(revaldo.name).toBe("revaldo");
    })

    it("should can execute sequential transaction", async () => {
        const [agisna, revaldo] = await prismaClient.$transaction(async (prisma) => {
            const agisna = await prisma.customer.create({
                data: {
                    id: uuidv4(),
                    email: `agis-${uuidv4()}@mail.com`,
                    name: "agisna1",
                    phone: `08${uuidv4()}`
                }
            });
            const revaldo = await prisma.customer.create({
                data: {
                    id: uuidv4(),
                    email: `reval-${uuidv4()}@mail.com`,
                    name: "revaldo1",
                    phone: `08${uuidv4()}`
                }
            });
            return [agisna, revaldo];
        }, {
            timeout: 5
        });
    })
})
