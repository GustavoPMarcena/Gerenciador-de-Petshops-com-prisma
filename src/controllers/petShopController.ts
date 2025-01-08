import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as criarID } from 'uuid';

const prisma = new PrismaClient();

export const cadastrarPetshop = async (req: Request, res: Response) => {
    try {
        if(req.body.name && req.body.cnpj) {
            const petshop = await prisma.petshop.create({
                data: {
                    id: criarID(),
                    name: req.body.name,
                    cnpj: req.body.cnpj,
                },
            });

            res.status(201).json({ "message": "Petshop criado com sucesso!" });
        } else {
            res.status(400).json({ "message": "Campos incorretos" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}