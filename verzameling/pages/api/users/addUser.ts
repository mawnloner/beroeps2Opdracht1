import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, gebruikers } from "@prisma/client";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if ('POST' !== req.method) {
        return res.json({message: 'Method not allowed'})
    }
    const prisma = new PrismaClient()
    const userData = JSON.parse(req.body)
    const newGebruiker: gebruikers = await prisma.gebruikers.create({
            data: {
                naam: userData.naam,
                password: userData.password,
            }
        }
    )
    prisma.$disconnect()
    res.json(newGebruiker);
}