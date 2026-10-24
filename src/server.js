import 'dotenv/config';
import app from './app.js';
import { connectDatabase } from './config/database.js';

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Só começa a aceitar requisições depois que o banco conectar
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error.message);
    process.exit(1);
  }
}

startServer();
