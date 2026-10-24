import mongoose from 'mongoose';

const cursoSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
      trim: true,
    },
    descricao: {
      type: String,
      trim: true,
    },
    cargaHoraria: {
      type: Number,
      required: true,
      min: 1,
    },
    // Referência ao instrutor: guarda o _id e permite usar .populate('instrutor')
    instrutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instrutor',
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Curso', cursoSchema);
