const produtos = require('./produtos')
const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())

    app.use(produtos)
}