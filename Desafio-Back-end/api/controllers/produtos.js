const produtoDao = require('../dao/dao-produtos')
const Produto = require('../models/Produto')

module.exports = {

    async buscaProdutos(res){
        try{
                       
            const resultado = await produtoDao.buscaProdutos()
            res.status(200).send(resultado)
        } catch(erro){
            res.status(400)
            console.log('erro')
        }
    },

    async criaProdutos(res , conteudo){
        try{
            const produtoModelo = new Produto(conteudo)
            const resultado = await produtoModelo.criarProduto()
            
            res.status(200).send(resultado)
        } catch(erro){
            res.status(404)
        }
    }
}