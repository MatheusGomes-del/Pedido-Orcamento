const connection = require('./connection/connection');

const buscaClientes = async () => {
    try {
        const QUERY = ` SELECT * FROM DB_PO.clientes ` 
        const [ resultado ] = await connection.execute(QUERY);

        if (!resultado) {
            throw new Error('algo deu errado');
        }

        return resultado

    } catch(error) {
       return error.message;
    }
}

module.exports = {
    buscaClientes
}