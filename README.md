# API_Cursos

API REST para cadastro de **cursos** e **instrutores**, feita com Node.js, Express e MongoDB (Mongoose).

## Tecnologias

- [Node.js](https://nodejs.org/) (ES Modules)
- [Express 5](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- [dotenv](https://github.com/motdotla/dotenv)

## Estrutura do projeto

```
src/
├── config/
│   └── database.js          # Conexão com o MongoDB
├── controllers/
│   ├── cursoController.js
│   └── instrutorController.js
├── models/
│   ├── Curso.js
│   └── Instrutor.js
├── routes/
│   ├── index.js             # Registra todas as rotas no app
│   ├── cursoRoutes.js
│   └── instrutorRoutes.js
├── app.js                   # Configuração do Express
└── server.js                # Conecta ao banco e sobe o servidor
```

## Como rodar

### Pré-requisitos

- Node.js 18.11 ou superior
- Um MongoDB local ou um cluster no [MongoDB Atlas](https://www.mongodb.com/atlas)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/HigorBackend-Devloper/API_Cursos.git
cd API_Cursos

# 2. Instale as dependências
npm install

# 3. Crie o arquivo .env a partir do exemplo
cp .env.example .env
```

Edite o `.env` com os seus dados:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/api-cursos
```

```bash
# 4. Inicie o servidor
npm run dev   # modo desenvolvimento (reinicia ao salvar)
npm start     # modo normal
```

A API ficará disponível em `http://localhost:3000`.

## Modelos

### Instrutor

| Campo           | Tipo   | Obrigatório | Observação          |
|-----------------|--------|-------------|---------------------|
| `nome`          | String | Sim         |                     |
| `email`         | String | Sim         | Único, minúsculo    |
| `especialidade` | String | Sim         |                     |

### Curso

| Campo          | Tipo     | Obrigatório | Observação                    |
|----------------|----------|-------------|-------------------------------|
| `titulo`       | String   | Sim         |                               |
| `descricao`    | String   | Não         |                               |
| `cargaHoraria` | Number   | Sim         | Mínimo 1                      |
| `instrutor`    | ObjectId | Sim         | `_id` de um instrutor         |

Os dois modelos têm `createdAt` e `updatedAt` gerados automaticamente.

## Endpoints

### Geral

| Método | Rota | Descrição                        |
|--------|------|----------------------------------|
| GET    | `/`  | Verifica se a API está no ar     |

### Instrutores

| Método | Rota                | Descrição                    |
|--------|---------------------|------------------------------|
| POST   | `/instrutor`        | Cadastra um instrutor        |
| GET    | `/instrutores`      | Lista todos os instrutores   |
| GET    | `/instrutores/:id`  | Busca um instrutor pelo id   |
| PUT    | `/instrutores/:id`  | Atualiza um instrutor        |
| DELETE | `/instrutores/:id`  | Remove um instrutor          |

### Cursos

| Método | Rota           | Descrição                |
|--------|----------------|--------------------------|
| POST   | `/curso`       | Cadastra um curso        |
| GET    | `/cursos`      | Lista todos os cursos    |
| GET    | `/cursos/:id`  | Busca um curso pelo id   |
| PUT    | `/cursos/:id`  | Atualiza um curso        |
| DELETE | `/cursos/:id`  | Remove um curso          |

### Respostas comuns

| Status | Quando acontece                                  |
|--------|--------------------------------------------------|
| 200    | Consulta ou atualização feita com sucesso        |
| 201    | Registro criado                                  |
| 204    | Registro removido (sem corpo na resposta)        |
| 400    | Dados inválidos, campo obrigatório faltando ou id em formato inválido |
| 404    | Registro não encontrado                          |
| 500    | Erro interno no servidor                         |

## Exemplos

### Criar um instrutor

```bash
curl -X POST http://localhost:3000/instrutor \
  -H "Content-Type: application/json" \
  -d '{"nome": "Ana Souza", "email": "ana@email.com", "especialidade": "Node.js"}'
```

### Criar um curso

Use o `_id` do instrutor retornado no passo anterior:

```bash
curl -X POST http://localhost:3000/curso \
  -H "Content-Type: application/json" \
  -d '{"titulo": "Node.js Básico", "descricao": "Introdução ao Node.js", "cargaHoraria": 20, "instrutor": "<ID_DO_INSTRUTOR>"}'
```

### Atualizar um curso

```bash
curl -X PUT http://localhost:3000/cursos/<ID_DO_CURSO> \
  -H "Content-Type: application/json" \
  -d '{"cargaHoraria": 40}'
```

## Próximos passos

- [ ] Verificar se o instrutor existe antes de cadastrar um curso
- [ ] Usar `.populate('instrutor')` para trazer os dados do instrutor junto com o curso
