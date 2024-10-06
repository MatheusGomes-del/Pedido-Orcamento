const modelPedidos = require('../models/modelPedidos');

const buscaPedidos = async (req, res) => {
     
    const pedidos = await modelPedidos.buscaPedidos();

    if(!pedidos) {
        return res.status(404).json('não encontrou nenhum pedido')
    }

    return res.status(200).json(pedidos)
}

const buscaPedidosPorNomeCliente = async (req, res) => {
    const { busca } = req.body;
    const pedido = await modelPedidos.buscaPedidosPorNomeCliente(busca);

    if(!pedido) {
        return res.status(404).json('não encontrou nenhum pedido')
    }

    return res.status(200).json(pedido)
}

const buscaPedidosPorFlag = async (req, res) => {
    const { flagPedido, busca } = req.body;
    const pedido = await modelPedidos.buscaPedidosPorFlag(flagPedido, busca);

    if (!pedido || pedido.length == 0) {
        return res.status(404).json('não encontrou nenhum pedido')
    }

    return res.status(200).json(pedido)
}

module.exports = {
    buscaPedidos,
    buscaPedidosPorNomeCliente,
    buscaPedidosPorFlag
}