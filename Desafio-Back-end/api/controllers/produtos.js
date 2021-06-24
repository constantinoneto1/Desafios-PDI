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
            
            res.status(201).send(resultado)
        } catch(erro){
            res.status(400).json(erro.message)
        }
    },

    async buscaPorId(res , id_produto){
        try{
            const usuarioUnico = await produtoDao.pegaPorId(id_produto)

            res.status(200).send(usuarioUnico)

        } catch(erro){
            res.status(404).json(erro.message)
        }
    }
}