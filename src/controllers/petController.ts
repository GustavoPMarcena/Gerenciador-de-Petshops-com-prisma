import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { v4 as criarID } from 'uuid';

const prisma = new PrismaClient();

export const cadastrarPet = async (req: Request, res: Response) => {
    try {
        if (req.body.name && req.body.type && req.body.description && req.body.deadline_vaccination) {
            await prisma.pet.create({
                data: {
                    id: criarID(),
                    name: req.body.name,
                    type: req.body.type,
                    description: req.body.description,
                    vaccinated: false,
                    deadline_vaccination: new Date(req.body.deadline_vaccination),
                    petshopId: req.petshop.id
                },
            });
            res.status(201).json({ "message": "Pet cadastrado com sucesso!" });
        } else {
            res.status(400).json({ "message": "Campos incorretos" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const consultarPets = async (req: Request, res: Response) => {
    try {
        const pets = await prisma.pet.findMany({
            where: {
                petshopId: String(req.petshop.id)
            }
        });
        if (pets != null && pets.length > 0) {
            res.status(200).json(pets);
        } else {
            res.status(404).json({ "message": "Pets não encontrados" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const atualizarPet = async (req: Request, res: Response) => {
    try {
        if (req.body.name && req.body.type && req.body.description && req.body.deadline_vaccination) {
            await prisma.pet.update({
                where: {
                    id: String(req.params.id),
                    petshopId: String(req.petshop.id)
                },
                data: {
                    name: req.body.name,
                    type: req.body.type,
                    description: req.body.description,
                    deadline_vaccination: new Date(req.body.deadline_vaccination),
                },
            });
            res.status(201).json({ "message": "Pet atualizado" });
        } else {
            res.status(400).json({ "message": "Campos incorretos" });
        }
    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const vacinarPet = async (req: Request, res: Response) => {
    try {

        await prisma.pet.update({
            where: {
                id: String(req.params.id),
                petshopId: String(req.petshop.id)
            },
            data: {
                vaccinated: true
            },
        });
        res.status(201).json({ "message": "Pet atualizado" });

    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}

export const deletarPet = async (req: Request, res: Response) => {
    try {
        const pet = await prisma.pet.findUnique({
            where: {
                id: String(req.params.id),
                petshopId: String(req.petshop.id)
            }
        });

        if (pet != null) {
            await prisma.pet.delete({
                where: {
                    id: String(req.params.id),
                    petshopId: String(req.petshop.id)
                }
            });
            res.status(200).json({ "message": "Pet excluido" });
        } else {
            res.status(404).json({ "message": "Pet nao encontrado" });
        }

    } catch (error) {
        res.status(500).json({ error: "Erro do servidor" });
    }
}