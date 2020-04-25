const express = require("express")
const app = express()
const handlebars = require("express-handlebars")

// Config
// Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}))
app.set("view engine", "handlebars")

// Rotas

// por enquanto a rota principal será o tabuleiro com a simulação do jogo da velha
app.get("/", function(req, res){
    res.render("tabuleiro")
})

app.get("/cad", function(req, res){
    res.render("cadastro")
})

app.get("/tab", function(req, res){
    res.render("tabuleiro")
})

app.get("/log", function(req, res){
    res.render("login")
})

// Server
app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})