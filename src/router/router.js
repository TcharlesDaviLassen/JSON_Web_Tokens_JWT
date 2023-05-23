require("dotenv").config();
const http = require('http');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express();

router.get('/', (req, res, next) => {
    res.json({ message: "Tudo ok por aqui!" });
});

router.get('/api', (req, res, next) => {
    console.log("Retornou todos clientes!");
    res.json([{ id: 1, nome: 'Jonh' }]);
});

router.post('/login', (req, res, next) => {
    console.log('dados', req.body)
    //esse teste abaixo deve ser feito no seu banco de dados
    if (req.body.user === 'jonh' && req.body.password === '123') {
        //auth ok
        const id = 1; //esse id viria do banco de dados
        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
        });
        return res.json({ auth: true, token: token });
    }

    res.status(500).json({ message: 'Login inválido!' });
})

router.post('/logout', function (req, res) {
    res.json({ auth: false, token: null });
})

module.exports = router;