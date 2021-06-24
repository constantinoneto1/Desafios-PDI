const produtosDao = require('../dao/dao-produtos')
const CampoInvalido = require('../errors/CampoInvalido')

class Produto {
    
    constructor({nome , preco , validade}){
        this.nome = nome
        this.preco = preco
        this.validade = validade
    }
    
    async criarProduto(){
        this.validaProduto()
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

    validaProduto(){

        const nome = this.nome
        if(typeof nome !== 'string' || nome.length === 0){
            throw new CampoInvalido(nome)
        }

        const preco = this.preco
        if(preco.length === 0 ){
            throw new CampoInvalido(preco)
        }
    }

}

module.exports = Produto