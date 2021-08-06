const Sequelize = require('sequelize')

const instancia = new Sequelize(
    'loja_do_vovo' , 
    'root' ,
    'netola' ,
    {
        host : 'host.docker.internal' ,
        dialect : 'mysql'
    }
)

module.exports = instancia