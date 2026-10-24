import mongoose from 'mongoose';

// Conecta ao MongoDB usando a URI definida no .env
export async function connectDatabase() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('A variável MONGODB_URI não foi definida no .env');
  }

  await mongoose.connect(uri);
  console.log('Conectado ao MongoDB');
}
