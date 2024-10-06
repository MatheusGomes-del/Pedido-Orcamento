const modelClientes = require('../models/modelClientes');


const buscaClientes = async (req, res) => {
  const clientes = await modelClientes.buscaClientes();

  if (clientes === undefined) { 
    return res.status(404).json('cliente não encontrado');
  }

  return res.status(200).json(clientes);
}

module.exports = {
    buscaClientes
}