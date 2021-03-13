

import express from 'express' // importa framework express

const app = express() // intancia do express
const port = 30002 // porta de acessp

app.get('/', (req, res) => {
  res.send('Hello World!')// retorno da rota GET
})

app.listen(port, () => {
  console.log(`servidor roando em: http://localhost:${port}`)// retorna do status do servidor
})

