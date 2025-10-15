import express from 'express'


//Importar ROTAS E MIDDLEWARES
import { alunosRouter } from './src/routes/alunoRoutes.js';
//adicionar

const app = express();
app.use(express.json());


//Chamar rotas e middlewares
app.use('/api/alunos',alunosRouter)

const PORTA = 3000;
app.listen(PORTA, () => {
    console.log(`Servidor rodando na porta ${PORTA}`);
});