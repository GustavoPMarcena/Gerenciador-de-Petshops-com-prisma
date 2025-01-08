import { Router } from 'express';
import { verificarFormatoCNPJ } from '../middlewares/verificarFormatoCNPJ';
import { verificarPetShopPorCNPJ } from '../middlewares/verificarPetShopPorCNPJ';
import { cadastrarPetshop } from '../controllers/petShopController';

const router = Router();

router.post('/', verificarFormatoCNPJ, verificarPetShopPorCNPJ, cadastrarPetshop);

export default router;