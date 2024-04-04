const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Estoy en home');
});

app.get('/detalle-producto', function (req, res) {
    res.send('Estoy en detalle-producto');
});

app.get('/inicio-sesion', function (req, res) {
    res.send('Estoy en inicio-sesion');
});

app.get('/registrarme', function (req, res) {
    res.send('Estoy en registrarme');
});

app.get('/carrito', function (req, res) {
    res.send('carrito');
});

app.listen(3000, function () {
    console.log('conectado en el puerto 3000');
});