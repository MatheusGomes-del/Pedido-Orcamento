const express = require('express');
const body = require('body-parser');
const cors = require('cors')
const app = express();
const serviceClientes = require('../../service/serviceClientes')
const servicePedidos = require('../../service/servicePedidos');
const verificaFlagPedido = require('../../middlewares/verificaFlagBusca')

app.use(body.json());
app.use(express.json());
app.use(express.static('public'));
app.use(cors())

app.get('/', (_req, res) => res.send('pegou'))
app.get('/clientes', serviceClientes.buscaClientes);

app.post('/pedidos', servicePedidos.buscaPedidosPorFlag);
app.get('/pedidos', servicePedidos.buscaPedidos);
app.post('/pedidos', verificaFlagPedido.verificaFlagPedido);

module.exports = app;