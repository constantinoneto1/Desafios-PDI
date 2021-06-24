const ModeloTabela = require('./tables/tabela-produtos')

ModeloTabela
    .sync()
    .then(console.log('Tabela criada com sucesso'))
    .catch(console.log)