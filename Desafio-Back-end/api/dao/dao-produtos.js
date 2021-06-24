const TabelaProdutos = require('../database/tabela-produtos')

module.exports = {
    buscaProdutos(){
        return TabelaProdutos.findAll( { raw : true} )
    },

    criaProduto(produtos){
        return TabelaProdutos.create(produtos)
    }
}