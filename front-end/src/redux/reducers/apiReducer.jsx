//p.numped, p."DATA", p.CODCLI, P2.CLIENTE, p.CONDVENDA, p.CODFILIAL, p.VLTOTAL, p.CODUSUR

const DATA = []

function apiReducer(state = DATA, action) {
    switch (action.type) {
        case 'api':
            return action.payload
        case 'teste':
            return action.payload
        case 'clear':
            return action.payload
        case 'pedido':
            return action.payload
        case 'ordemOrcamentos':
            return action.payload
        case 'ordemPedidos':
            return action.payload
          
    }

    return DATA
}

export default apiReducer; 