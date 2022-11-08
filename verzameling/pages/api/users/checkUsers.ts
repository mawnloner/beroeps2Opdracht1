import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, gebruikers } from "@prisma/client";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if ('POST' != req.method) {
        return res.json({message: 'Method not allowed'})
    }
    const data = JSON.parse(req.body);
    const prisma = new PrismaClient();

    const user = await prisma.gebruikers.findFirst({
        where: {
            AND: [
                { naam: data.naam },
                { password: data.password }
            ]
        },
        select: {
            id: true,
            naam: true,
            role: true
        }
    });

    prisma.$disconnect()
    if (null != user) {
        document.cookie = `userID=${user.id}; userName=${user.naam}; userRole=${user.role}; SameSite=none; Secure`;
        res.json(user);
    }

}