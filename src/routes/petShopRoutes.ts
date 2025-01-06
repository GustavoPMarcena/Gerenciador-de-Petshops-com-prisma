import { Router } from 'express';
import { verificarFormatoCNPJ } from '../middlewares/verificarFormatoCNPJ';
import { verificarPetShopPorCNPJ } from '../middlewares/verificarPetShopPorCNPJ';
import { cadastrarPetShop } from '../controllers/petShopController';

const router = Router();

router.post('/', verificarFormatoCNPJ, verificarPetShopPorCNPJ, cadastrarPetShop);

export default router;