const Sequelize = require('sequelize')

const instancia = new Sequelize(
    'loja_do_vovo' , 
    'root' ,
    'netola' ,
    {
        host : '127.0.0.1',
        dialect : 'mysql'
    }
)

module.exports = instancia