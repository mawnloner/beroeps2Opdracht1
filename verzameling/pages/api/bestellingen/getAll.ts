import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    const data = await prisma.bestelling.findMany({
        include: {
            gebruikers: true,
            products: {
                include: {
                    kristal: true
                }
            }
        }
    })
    prisma.$disconnect()
    res.json(data)
}
