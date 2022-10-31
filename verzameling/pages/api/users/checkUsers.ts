import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, gebruikers } from "@prisma/client";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
    if ('POST' == req.method) {
        return res.json({message: 'Method not allowed'})
    }
    const prisma = new PrismaClient()
    const data = JSON.parse(req.body)

    // BEGIN LOGIN CHECK
    // GET GIVEN USERNAME AND PASSWORD FROM JSON
    var givenUser = data.name;
    var givenPass = data.password;

    // FIND THE ID WHERE USERNAME IS GIVENUSER
    const getUser = await prisma.gebruikers.findFirst({
        where: {naam: givenUser},
        select: {id: true}
    });

    // FIND THE ID WHERE PASSWORD IS GIVENPASS
    const getPass = await prisma.gebruikers.findFirst({
        where: {password: givenPass},
        select: {id: true}
    });

    // IF GETUSER ID IS THE SAME AS GETPASS ALLOW LOGIN
    // ELSE DISPLAY ERROR
    if (getUser == getPass) {
        console.log("login werkt");
    }

    prisma.$disconnect()
}