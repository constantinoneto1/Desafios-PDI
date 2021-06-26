const produtoDao = require('../dao/dao-produtos')
const Produto = require('../models/Produto')

module.exports = {

    async buscaProdutos(res){
        try{
                       
            const resultado = await produtoDao.buscaProdutos()
            res.status(200).send(resultado)
        } catch(erro){
            res.status(400).json(erro.message)
            
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
    },

    async deletaProduto(res , id){
        try{
            
            const produtoADeletar = new Produto({ id : id}) 
            await produtoADeletar.carregaProduto()
            
            await produtoADeletar.deletaProduto()
            res.status(204)
            res.end()
            
        } catch(erro){
            res.status(404).json(erro.message)
        }
    },

    async atualizaProduto(res , id , corpo){
        try{
            const dados = Object.assign({} , corpo , {id : id})
            const produtoAAtualizar = new Produto(dados)
            await produtoAAtualizar.validaProduto()
            await produtoDao.atualizaProduto(id , produtoAAtualizar)
            res.status(204)
            res.end()
        } catch(erro){
            res.status(404).json(erro.message)
        }
    }
}