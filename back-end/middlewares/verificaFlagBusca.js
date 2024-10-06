const servicePedidos = require('../service/servicePedidos');

const verificaFlagPedido = (req, res, next) => {
    const { flagPedido } = req.body;
    
    if (flagPedido == 'nomeCliente') {
        return servicePedidos.buscaPedidosPorNomeCliente(req, res)
    }

    if (flagPedido == 'selecione') {
        return servicePedidos.buscaPedidos(req, res)
    }

    next();
}

module.exports = {
    verificaFlagPedido
}

