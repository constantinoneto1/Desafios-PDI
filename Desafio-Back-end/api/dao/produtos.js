const Tabela = require('../database/tabela-produtos')

module.exports = {
    buscaProdutos(){
        return Tabela.findAll( { raw : true} )
    }
}