import express from 'express';
import cursoRoutes from './cursoRoutes.js';
import instrutorRoutes from './instrutorRoutes.js';

const routes = (app) => {
  // Rota inicial para verificar se a API está no ar
  app.get('/', (req, res) => {
    res.status(200).json({ mensagem: 'API de cursos funcionando!' });
  });

  // Permite ler JSON no corpo das requisições (req.body)
  app.use(express.json());

  app.use(cursoRoutes);
  app.use(instrutorRoutes);
};

export default routes;
