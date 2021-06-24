const app = require('express').Router()
const produtosControlador = require('../controllers/produtos')

app.get('/produtos/' , (req , res) => {
    produtosControlador.buscaProdutos(res)
})

app.post('/produtos/' , (req , res) => {
    const conteudo = req.body
    produtosControlador.criaProdutos(res , conteudo)
})

module.exports = app