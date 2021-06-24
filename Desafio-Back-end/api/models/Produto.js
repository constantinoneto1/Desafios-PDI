const prodDao = require('../dao/produtos')

class Produto {
    buscaProdutos(){
        return prodDao.buscaProdutos()
    }
}

module.exports = new Produto