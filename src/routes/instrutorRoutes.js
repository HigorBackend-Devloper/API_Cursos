import { Router } from 'express';
 import {
  criarInstrutor,
   listarInstrutores,
  buscarInstrutorPorId,
  atualizarInstrutor,
   removerInstrutor,
 } from '../controllers/instrutorController.js';

const router = Router();

router.post('/instrutor', criarInstrutor);
router.get('/instrutores', listarInstrutores);
router.get('/instrutores/:id', buscarInstrutorPorId);
router.put('/instrutores/:id', atualizarInstrutor);
router.delete('/instrutores/:id', removerInstrutor);

export default router;
