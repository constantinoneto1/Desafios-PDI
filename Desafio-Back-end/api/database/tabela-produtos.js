const Sequelize = require('sequelize')
const instancia = require('./index')

const colunas = {
    nome : {
        type : Sequelize.STRING ,
        allowNull : false
    },

    preco : {
        type : Sequelize.FLOAT ,
        allowNull : false
    },

    validade : {
        type : Sequelize.DATEONLY ,
        allowNull : false
    }
}

const opcoes = {
    freezeTableName : true ,
    tableName : 'produtos',
    timestamps : true ,
    createdAt : 'dataCriacao',
    updatedAt : 'dataAtualizacao'
}

module.exports = instancia.define('produtos' , colunas , opcoes)