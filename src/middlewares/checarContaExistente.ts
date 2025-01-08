import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checarContaExistente = async (req: Request, res: Response, next: NextFunction) =>  {
    const cnpj = req.headers.cnpj as string;
    const petshop = await prisma.petshop.findUnique({
        where: {
            cnpj: String(cnpj)
        }
    })

    if (petshop == null) {
        res.status(400).json({ error: "Usuário inexistente" });
        return;
    }

    req.petshop = petshop;
    next();
}
