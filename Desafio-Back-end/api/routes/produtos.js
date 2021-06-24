const app = require('express').Router()
const produtosControlador = require('../controllers/produtos')

app.get('/produtos/' , (req , res) => {
    produtosControlador.buscaProdutos(res)
})

app.post('/produtos/' , (req , res) => {
    const conteudo = req.body
    produtosControlador.criaProdutos(res , conteudo)
})

app.get('/produtos/:id' , (req , res) => {
    const id_produto = req.params.id
    produtosControlador.buscaPorId(res , id_produto)
})

module.exports = app