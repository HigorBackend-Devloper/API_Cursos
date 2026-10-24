import mongoose from "mongoose";
import Curso from "../models/Curso.js";

// POST /cursos
export async function criarCurso(req, res) {
   try {
     // TODO: verificar se o instrutor informado em req.body existe antes de criar
     const novoCurso = await Curso.create(req.body)
     res.status(201).json({ mensagem: "Curso criado com sucesso", curso: novoCurso })
   } catch (error) {
     res
        .status(400)
        .json({ mensagem: "Erro ao cadastrar curso.", erro: error.message });
   }
}

// GET /cursos
export async function listarCursos(req, res) {
   try {
    // TODO: usar .populate('instrutor') para trazer os dados do instrutor
    const cursos = await Curso.find({})
    res.status(200).json({ cursos })
   } catch (error) {
    res
        .status(500)
        .json({ mensagem: "Erro ao buscar cursos.", erro: error.message });
   }
}

// GET /cursos/:id
export async function buscarCursoPorId(req, res) {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    const curso = await Curso.findById(id)

    if (!curso) {
      return res.status(404).json({ mensagem: "Curso não encontrado" })
    }

    res.status(200).json(curso)
  } catch (error) {
    res.status(500).json({
        mensagem: "Erro ao buscar curso por id.",
        erro: error.message,
      });
  }
}

// PUT /cursos/:id
export async function atualizarCurso(req, res) {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    // new: retorna o documento já atualizado | runValidators: aplica as regras do schema
    const curso = await Curso.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!curso) {
      return res.status(404).json({ mensagem: "Curso não encontrado" })
    }

    res.status(200).json(curso)
  } catch (error) {
    res
        .status(400)
        .json({ mensagem: "Erro ao atualizar curso.", erro: error.message });
  }
}

// DELETE /cursos/:id
export async function removerCurso(req, res) {
  try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    const curso = await Curso.findByIdAndDelete(id)

    if (!curso) {
      return res.status(404).json({ mensagem: "Curso não encontrado" })
    }

    res.status(204).send()
  } catch (error) {
    res
        .status(500)
        .json({ mensagem: "Erro ao deletar curso.", erro: error.message });
  }
}
