const Produto = require('../models/Produto')

module.exports = {

    buscaProdutos(res){
        
        const resultado = Produto.buscaProdutos() 
        res.status(200).send(resultado)
    }

}