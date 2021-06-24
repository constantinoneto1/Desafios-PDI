const app = require('express').Router()
const produtos = require('../controllers/produtos')

app.get('/produtos' , (req , res) => {
    produtos.buscaProdutos(res)
})

module.exports = app