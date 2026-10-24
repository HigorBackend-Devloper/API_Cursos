import mongoose from 'mongoose';

const instrutorSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    especialidade: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true } // cria createdAt e updatedAt automaticamente
);

export default mongoose.model('Instrutor', instrutorSchema);
