import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient, test } from '@prisma/client'
const prisma = new PrismaClient()

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if ('POST' !== req.method) {
        return res.status(405).json({message: "Method not allowed."})
    }

    const data = JSON.parse(req.body)
    const savedData = await prisma.test.create({
        data: data
    })

    res.json(savedData)
}