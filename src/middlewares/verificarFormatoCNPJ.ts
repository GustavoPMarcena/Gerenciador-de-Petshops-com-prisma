import { Request, Response, NextFunction } from 'express';

export function verificarFormatoCNPJ(req: Request, res: Response, next: NextFunction) {
    const formatoCNPJ = /^\d{2}\.\d{3}\.\d{3}\/0001-\d{2}$/;
    const info = req.body.cnpj;

    if (!formatoCNPJ.test(info)) {
        res.status(400).json({ error: "CNPJ no formato incorreto" });
        return;
    }

    next();
}