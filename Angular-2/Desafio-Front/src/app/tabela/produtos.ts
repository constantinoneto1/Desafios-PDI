export interface Produto{
    nome : 
        {type :string ,
        allowNull : true},
    preco : {
        type : number ,
        allowNull : true } ,
    validade : {
        type : Date ,
        allowNull : true}
}