const produtosDao = require('../dao/dao-produtos')

class Produto {
    
    constructor({id ,nome , preco , validade , dataCriacao , dataAtualizacao}){
        this.id = id
        this.nome = nome
        this.preco = preco
        this.validade = validade
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
    }
    
    async criarProduto(){
        const resultado = await produtosDao.criaProduto({
            nome : this.nome,
            preco : this.preco,
            validade : this.validade
        })

        this.id = resultado.id
        this.dataCriacao = resultado.dataCriacao
        this.dataAtualizacao = resultado.dataAtualizacao

        return resultado
    }
}

module.exports = Produto