import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, kristallen } from "@prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if ('POST' !== req.method) {
        return res.json({ message: 'Method not allowed' })
    }
    res.json(req.body)
    // const prisma = new PrismaClient()
    // const data = JSON.parse(req.body)
    // const kristal:kristallen = await prisma.kristallen.create({
    //     data: {
    //         naam: "",
    //         prijs: 0.00,
    //         kleur: "#rrggbb",
    //         gewicht: "",
    //         transperant: false,
    //         zodiacId: 0,
    //         herkomst: "",
    //         inhoud: 0
    //     }
    // })
    // prisma.$disconnect()
    // res.json(kristal);
}