import Instrutor from "../models/Instrutor";

// POST /instrutores
export async function criarInstrutor(req, res) {try {
     // TODO: verificar se o instrutor informado em req.body existe antes de criar
     const novoInstrutor = await Curso.create(req.body)
     res.status(201).json({ mensagem: "Curso criado com sucesso", instrututor: novoInstrutor })
   } catch (error) {
     res
        .status(400)
        .json({ mensagem: "Erro ao cadastrar Instrutor.", erro: error.message });
   }
}

// GET /instrutores
export async function listarInstrutores(req, res) {try {
    // TODO: usar .populate('instrutor') para trazer os dados do instrutor
    const instrutor = await Instrutor.find({})
    res.status(200).json({ instrutor })
   } catch (error) {
    res
        .status(500)
        .json({ mensagem: "Erro ao buscar instrutor.", erro: error.message });
   }
}

// GET /instrutores/:id
export async function buscarInstrutorPorId(req, res) {
 try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    const instrutor = await Instrutor.findById(id)

    if (!instrutor) {
      return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    res.status(200).json(curso)
  } catch (error) {
    res.status(500).json({
        mensagem: "Erro ao buscar instrutor por id.",
        erro: error.message,
      });
  }
}

// PUT /instrutores/:id
export async function atualizarInstrutor(req, res) {
try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    // new: retorna o documento já atualizado | runValidators: aplica as regras do schema
    const instrutor = await Instrutor.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!instrutor) {
      return res.status(404).json({ mensagem: "Instrutor não encontrado" })
    }

    res.status(200).json(instrutor)
  } catch (error) {
    res
        .status(400)
        .json({ mensagem: "Erro ao atualizar instrutor.", erro: error.message });
  }
}

// DELETE /instrutores/:id
export async function removerInstrutor(req, res) {
try {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ mensagem: "ID invalido." });
    }

    const instrutor = await Instrutor.findByIdAndDelete(id)

    if (!instrutor) {
      return res.status(404).json({ mensagem: "Curso não encontrado" })
    }

    res.status(204).send()
  } catch (error) {
    res
        .status(500)
        .json({ mensagem: "Erro ao deletar instrutor.", erro: error.message });
  }
}


export default instrutorController