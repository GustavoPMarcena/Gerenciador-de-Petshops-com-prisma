import { Request, Response, NextFunction } from 'express';
import { petshops } from '../utils/data';

export function verificarPetShopPorCNPJ(req: Request, res: Response, next: NextFunction) {
    const cnpj = req.body.cnpj;
    const user = petshops.find(loja => loja.cnpj === cnpj);

    if (user) {
        res.status(400).json({ error: "PetShop já cadastrado." });
        return;
    }

    next();
}