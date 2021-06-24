const ModeloTabela = require('./tabela-produtos')

ModeloTabela
    .sync()
    .then(console.log('Tabela criada com sucesso'))
    .catch(console.log)