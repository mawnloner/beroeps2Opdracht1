import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient()
    const data = await prisma.kristallen.findMany({
        include: {
            zodiac: true
        }
    })
    prisma.$disconnect()
    res.json(data)
}