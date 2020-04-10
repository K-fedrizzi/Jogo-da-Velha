const express = require('express');
const server = express();

const path = require('path');
const rota = express.Router();

rota.get('/', (requisicao, resposta) => {
    resposta.sendFile(path.join(__dirname + '/public/index.html'));
});

server.use(rota);

const porta = process.env.port || 8080
server.listen(porta);

console.log(`Servidor rodando na url http:localhost:${porta}`)