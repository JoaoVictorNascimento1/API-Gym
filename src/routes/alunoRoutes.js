import {Router} from 'express'

const alunosRouter = Router();
let alunos = [
    {id:1,
    nome:'aluno1',
    dataDeNascimento:'25/01/2025',
    email:'aluno1@gmail.com',
    telefone:'(84)90000-0000',
    login:'abc',
    senha:'123',
    objetivo:'emagrecer',
    limitacoes:'joelho direito',
}
];
let proximoId = 2;

alunosRouter.get('/',(req,res)=>{
    res.status(200).json(alunos)
});
export {alunosRouter};