import { PrismaClient } from "@prisma/client";

export default async function handler (req,res) {
    const prisma = new PrismaClient();
    const result = await prisma.categoria.findMany({
        include:{
            producto:true,
        },
    })
    res.status(200).json (result)
}