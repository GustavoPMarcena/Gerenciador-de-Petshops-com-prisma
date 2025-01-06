import { Request, Response, NextFunction } from 'express';
import { petshops } from '../utils/data';

export function checarContaExistente(req: Request, res: Response, next: NextFunction) {
    const cnpj = req.headers.cnpj as string;
    const loja = petshops.find(petshop => petshop.cnpj === cnpj);

    if (!loja) {
        res.status(400).json({ error: "Usuário inexistente" });
        return;
    }

    req.petshop = loja;
    next();
}
