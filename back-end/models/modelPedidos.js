const connection = require('./connection/connection');

const buscaPedidos = async () => {
   try {
      const QUERY = `SELECT * FROM DB_PO.pedidos`;
      const [ resultado ] = await connection.execute(QUERY)
       
      if (!resultado) {
        throw new Error('não foi possível encontrar os pedidos');
      }

      return resultado
   } catch (error) {
     return error.message
   }
}

const buscaPedidosPorNomeCliente = async (busca) => {
    try {
        const QUERY = `SELECT * FROM DB_PO.pedidos WHERE nomeCliente = ? `;
        const [ resultado ] = await connection.execute(QUERY, [busca.trim()])

        if (!resultado) {
          throw new Error('não foi possível encontrar o pedido');
        }
  
        return resultado
     } catch (error) {
       return error.message
     }
}

const buscaPedidosPorFlag = async (flagPedido, busca) => {
  try {
     
      if (flagPedido == 'cpf') {
        const QUERY = `SELECT * FROM DB_PO.clientes c 
        JOIN DB_PO.pedidos p ON c.nome = p.nomeCliente
        WHERE c.${flagPedido} = ?;`;
        

        const [ resultado ] = await connection.execute(QUERY, [busca]);


        if (!resultado) {
          throw new Error('não foi possível encontrar o pedido');
        }
  
        return resultado
      }

      const QUERY = `SELECT * FROM DB_PO.pedidos WHERE ${flagPedido} = ? `; 

      const [ resultado ] = await connection.execute(QUERY, [busca])
      console.log(QUERY)

      if (!resultado) {
        throw new Error('não foi possível encontrar o pedido');
      }

      return resultado
   
    } catch (error) {
     return error.message
   }
}

module.exports = {
    buscaPedidos,
    buscaPedidosPorNomeCliente,
    buscaPedidosPorFlag
}