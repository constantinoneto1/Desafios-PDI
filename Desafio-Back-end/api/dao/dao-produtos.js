const TabelaProdutos = require('../database/tabela-produtos')
const UsuarioInexistente = require('../errors/UsuarioInexistente')

module.exports = {
    buscaProdutos(){
        return TabelaProdutos.findAll( { raw : true} )
    },

    criaProduto(produtos){
        return TabelaProdutos.create(produtos)
    },

    async pegaPorId(id){
        
        const encontrado = await TabelaProdutos.findOne({
            where : {
                id : id
            }
        })

        if(!encontrado){
            throw new UsuarioInexistente('Produto')
        }

        return encontrado
    },

    deletaProtudo(id){
        return TabelaProdutos.destroy({
            where:{ id : id}
        })
    }
}