import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const verificarPetShopPorCNPJ = async (req: Request, res: Response, next: NextFunction) => {
    const cnpj = req.body.cnpj;
    const petshop = await prisma.petshop.findUnique({
        where: {
            cnpj: String(cnpj)
        }
    })

    if (petshop != null) {
        res.status(400).json({ error: "PetShop já cadastrado." });
        return;
    }
    
    next();
}