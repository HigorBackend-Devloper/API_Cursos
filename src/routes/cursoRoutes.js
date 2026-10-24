import { Router } from 'express';
import {
  criarCurso,
  listarCursos,
  buscarCursoPorId,
  atualizarCurso,
  removerCurso,
} from '../controllers/cursoController.js';

const router = Router();

// O prefixo /cursos já é definido no app.js
router.post('/curso', criarCurso);
router.get('/cursos', listarCursos);
router.get('/cursos/:id', buscarCursoPorId);
router.put('/cursos/:id', atualizarCurso);
router.delete('/cursos/:id', removerCurso);

export default router;
