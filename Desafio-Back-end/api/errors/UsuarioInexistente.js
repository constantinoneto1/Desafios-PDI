class UsuarioInexistente extends Error{
    constructor(nome){
        const mensagem = `${nome} inexistente`
        super(mensagem)
        this.name = 'UsuarioInexistente'
    }
}

module.exports = UsuarioInexistente