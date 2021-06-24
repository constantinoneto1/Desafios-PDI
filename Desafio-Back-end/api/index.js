const express = require('express')
const app = express()

const port = 3000

const roteador = require('./routes')
roteador(app)

app.listen(port , () => { console.log(`A API está rodando na porta ${port}`)})