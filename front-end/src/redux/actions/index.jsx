export const actionCreator = (api) => ({ // action para colocar o resultado da api no estado global
   type: 'api',
   payload: api,
});

export const actionCleanState = () => ({ // action para limpar estado
   type: 'clear',
   payload: []
});

export const actionPedido = (pedido) => ({ // action para fornecer apenas o número do pedido que foi clicado para imprimir
   type: 'pedido',
   payload: pedido
});

export const actionOrdemPedidos = (newPedidos) => ({ // action para ordenar por pedidos
   type: 'ordemPedidos',
   payload: newPedidos
});

export const actionOrdemOrcamentos = (newOrcamentos) => ({ // action para ordenar por orcamentos
   type: 'ordemOrcamentos',
   payload: newOrcamentos
});

// MOCK ACTION PARA FINS DE TESTE

export const actionTest = () => ({
   type: 'teste',
   payload:  [{
      cliente: 'JOAO PEREIRA FERREIRA COSTA',
      data: ' 18/02/2040 ',
      numped: ' 3043454 ',
      pos: 'B',
      vlTotal: '300.45',
      tipoPed: 'P'
  },
   
  {
      cliente: 'LETICIA FARIA DE SOUZA',
      data: ' 20/07/2021 ',
      numped: '212345',
      pos: 'B',
      vlTotal: '25.45',
      tipoPed: 'O'
  },
  {
   cliente: ' CARLA MARIA ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'P'
},
{
   cliente: ' RAQUEL MATIAS FARIAS ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'O'
},
{
   cliente: ' EMILY TALARINA CARUEIRA ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'P'
},
{
   cliente: ' ROBSON LENILSON B PARTSON ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'P'
},
{
   cliente: ' ALEJANDRO DO ROCHA DO CÉU ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'P'
},
{
   cliente: ' LOVE AMOR PAIXAO LOUCURA ',
   data: ' 18/02/2040 ',
   numped: ' 3043454 ',
   pos: 'B',
   vlTotal: '300.45',
   tipoPed: 'P'
}
]
})