async function enviaNumPed(numped) {
    try {
        const settings = { // envia o número do pedido escolhido para impressão para ser buscado pelo banco de dados e realizar a impressão
            method: 'POST',
            body: JSON.stringify(numped),
            headers: {
                "Content-Type": 'application/json'
            },
        };

        const fetchResponse = await fetch('https://f44f-187-72-160-65.ngrok-free.app/impressao', settings); // api
        const data = await fetchResponse.json();

    } catch (error) {
        return error; // retorna uma mensagem de erro se a requisição post der errado
    }    
}

export function ordenaPedidos(dispatch, api, action) { // função filtra pedidos e orcamentos e ordena após o click do botão do qual se quer ordenare
    let newPedidos = []
    let pedidos = api.filter((elements) => elements.tipoPed == 'P') 
    let orcamentos = api.filter((elements) => elements.tipoPed == 'O' )

    newPedidos = [...pedidos, ...orcamentos]
    dispatch(action(newPedidos)) // envia a action recebida por parâmentro e envia para o estado global
}

export function ordenaOrcamentos(dispatch, api, action) {  // função filtra pedidos e orcamentos e ordena após o click do botão do qual se quer ordenar
    let newOrcamentos = []
    let orcamentos = api.filter((elements) => elements.tipoPed == 'O' )
    let pedidos = api.filter((elements) => elements.tipoPed == 'P')

    newOrcamentos = [...orcamentos, ...pedidos] // usa spread para colocar na ordem desejada e desestruturar o filtro da variavel pedidos e orcamentos
    dispatch(action(newOrcamentos)) // envia a action recebida por parâmentro e envia para o estado global
}

export function formataData(paramData) {
   const dataOriginal = paramData

   const data = new Date(dataOriginal);

   const dia = String(data.getDate()).padStart(2, '0'); // Adiciona zero à esquerda se necessário
   const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
   const ano = data.getFullYear();

   const dataFormatada = `${dia}/${mes}/${ano}`
   
   return dataFormatada
}

export default enviaNumPed

