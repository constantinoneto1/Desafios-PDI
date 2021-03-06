const app = require('express').Router()
const produtosControlador = require('../controllers/produtos')
const cors = require('cors');

app.use(cors())

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

app.delete('/produtos/:id' , (req , res) => {
    const id = req.params.id
    console.log('AAAAAAA')
    produtosControlador.deletaProduto(res , id)
})

app.put('/produtos/:id' , (req , res) => {
    console.log('AAAAAAAA')
    const id = req.params.id
    const corpoAtualizar = req.body
    produtosControlador.atualizaProduto(res , id , corpoAtualizar)
})

module.exports = app