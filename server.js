const express = require("express")
const app = express()
const handlebars = require("express-handlebars")
// conf Base de dados com o body-parser
const bodyParser =  require("body-parser")
const mongoose = require("mongoose")
require("./models/Usuario")
const Usuario = mongoose.model("usuarios")
// configurando o passport
const passport = require("passport")
require("./config/auth") (passport)
// Configs

// Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}))
app.set("view engine", "handlebars")

// Body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) 

// Sessão
app.use(session({
    secret: "trabalho",
    resave: "true",
    saveUnitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
// Rotas

app.get("/", function(req, res){
    res.render("tabuleiro")
})

app.get("/cad", function(req, res){
    res.render("cadastro")
})

app.get("/tab", function(req, res){
    res.render("tabuleiro")
})

app.get("/login", function(req, res){
    res.render("login")
})

app.post("/login", (req, res, next) => {
    passport.authenticate("local",{
        successRedirect: "/",
        failureRedirect: "/usuarios/login",
        failureFlash: true
    })(req,res,next)
})

// Rota para página de cadastro ( separar )
app.post("/cadastrarUsuario", function(req, res){
    /*
    //Obtendo os dados de um formulário e salvando no modelo do sql
    Usuario.create({
        nome: req.body.nome,
        dataNasc: req.body.dataNasc,
        email: req.body.email,
        senha: req.body.password,
        pontuacao: 0.0 //inicializa a pontuacao do usuário 
    }).then(function(){
        //res.send("Usuário cadastrado com suscesso")
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro ao cadastrar o Usuário!")
    }) */
    const novoUsuario = {
        nome: req.body.nome,
        dataNasc: req.body.dataNasc,
        email: req.body.email,
        senha: req.body.password,
        pontuacao: 0.0 //inicializa a pontuacao do usuário
    }

    new Usuario(novoUsuario).save().then(()=>{
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro ao cadastrar o Usuário!")
    })
})


// Server
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})