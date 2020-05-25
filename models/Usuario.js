/* Schema do SQL
const db = require("./db")

const Usuario = db.conexaoBd.define('usuarios', {
    nome: {
        type: db.sequelize.STRING
    },

    dataNasc: {
        type: db.sequelize.DATE
    },

    email: {
        type: db.sequelize.TEXT
    },

    senha: {
        type: db.sequelize.TEXT
    },

    pontuacao: {
        type: db.sequelize.DOUBLE
    }
})

// Usuario.sync({force: true}) 

// Exportando o módulo para ser acessado através de outros arquivos
module.exports = Usuario
*/

// Schema mongoose

const db = require("./db")
const { mongoose } = require("./db")
const UsuariosSchema = db.mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

    dataNasc: {
        type: Date,
        require: true
    },

    email: {
        type: String,
        require: true
    },

    senha: {
        type: String,
        require: true
    },

    pontuacao: {
        type: Number,
        require: true
    }
})

// Salvando os dados na collections usuários
mongoose.model('usuarios', UsuariosSchema)