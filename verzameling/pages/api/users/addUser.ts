import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, gebruikers } from "@prisma/client";
import { join } from "path";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if ('POST' !== req.method) {
        return res.json({message: 'Method not allowed'})
    }
    const prisma = new PrismaClient()
    const userData = JSON.parse(req.body)
    const newUser = prisma.gebruikers.create({
        data: {
            naam: userData.naam,
            password: userData.password
        }
    })
    res.json(newUser);
}