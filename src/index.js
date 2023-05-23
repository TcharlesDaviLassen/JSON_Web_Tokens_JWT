const http = require('http');
const express = require('express');
const app = express();
const PORT = 3000;

const bodyParser = require('body-parser');
const router = require('./router/router');

app.use(bodyParser.json());

app.use(router)

const server = http.createServer(app);
server.listen(3000);
console.log("Servidor escutando na porta 3000...\n" + `http://localhost:${PORT}`)