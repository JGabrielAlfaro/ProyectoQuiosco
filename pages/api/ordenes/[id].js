import { PrismaClient } from "@prisma/client"

export default async function handler (req,res){

    const prisma = new PrismaClient();

    if (req.method === 'POST'){
        // console.log(req.query.id) //recuperamos el id que queremos actualizar.
        const {id} = req.query
        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: {
                estado: true
            }
        })
        res.status(200).json(ordenActualizada)
    }
}