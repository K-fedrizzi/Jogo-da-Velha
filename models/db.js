/* Trabalhando com o Sequelize o mysql
const sequelize = require("sequelize")

//conexao com o banco de dados 
const conexaoBd = new sequelize("velha", "root", "123456",{
    host: "localhost",
    dialect: "mysql"
}) 

conexaoBd.authenticate().then( function(){
    console.log("Conectado com suscesso")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

// exportando os modulos
module.exports = {
    sequelize: sequelize,
    conexaoBd: conexaoBd
}*/

// trabalhando com o mongodb
const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/velha",{
    useMongoClient: true
}).then(()=>{
    console.log("MongoDB conectado")
}).catch((err)=>{
    console.log("Houve um erro ao se conectar o banco de dados" + err)
})

module.exports = {mongoose: mongoose}