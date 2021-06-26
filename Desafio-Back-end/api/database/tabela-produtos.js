const Sequelize = require('sequelize')
const instancia = require('./index')

const colunas = {
    nome : {
        type : Sequelize.STRING ,
        allowNull : false
    },

    preco : {
        type : Sequelize.STRING ,
        allowNull : false,
        validate : {
            isNumeric : true ,
            min : 1
        }
    },

    validade : {
        type : Sequelize.STRING ,
        allowNull : false,
        validate : {
            isDate : true ,
            isAfter : "2021-06-06"
        }
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