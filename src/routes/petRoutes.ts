import { Router } from 'express';
import { checarContaExistente } from '../middlewares/checarContaExistente';
import { cadastrarPet, consultarPets, atualizarPet, vacinarPet, deletarPet } from '../controllers/petController';

const router = Router();

router.post('/', checarContaExistente, cadastrarPet);
router.get('/', checarContaExistente, consultarPets);
router.put('/:id', checarContaExistente, atualizarPet);
router.patch('/:id/vaccinated', checarContaExistente, vacinarPet );
router.delete('/:id', checarContaExistente, deletarPet);


export default router;
