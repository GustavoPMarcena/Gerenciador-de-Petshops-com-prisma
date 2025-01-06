import { Router } from 'express';
import { checarContaExistente } from '../middlewares/checarContaExistente';
import { listarPets, cadastrarPet } from '../controllers/petController';

const router = Router();

router.get('/', checarContaExistente, listarPets);
router.post('/', checarContaExistente, cadastrarPet);

export default router;
