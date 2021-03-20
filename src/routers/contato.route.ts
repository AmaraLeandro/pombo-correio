import{ Router } from 'express' //importação

const contatoRouter = Router() //lógica

const contato = [] //array

contatoRouter.post('/contato', (req, res) => {
   const {id, nome, telefone, endereco,numeroendereco,bairro,cidade,estado,datadenascimento } = req.body

   contato.push({
    id,
    nome,
    telefone,
    endereco,
    numeroendereco,
    bairro,
    cidade,
    estado,
    datadenascimento
   })
   res.status
})



export { contatoRouter }  //expotação

