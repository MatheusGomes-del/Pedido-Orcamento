import { useEffect, useState } from 'react';
import '../style/style.css';
import logo from '../images/logo.png';
import Pedidos from './pedidos';
import { useDispatch } from 'react-redux';
import { actionCreator, actionPedido, actionTest } from '../redux/actions';


function PesquisaPedido() {
    const dispatch = useDispatch();
    const [ isDisable , setDisable] = useState(true)
    const [ flagPedido, setFlagPedido ] = useState('selecione');
    const [ busca, setBusca ] = useState('');
    
    function activeButton() { // função que ativa o botão de pesquisa apenas se escolher pelo que deseja pesquisar e se o input estiver com algo escrito
        if( busca.length < 0 || flagPedido == 'selecione' ) {
            setDisable(true)
        } else {
            setDisable(false)
        }
    }
    
    useEffect(() => {
       activeButton()
    }, [busca])

    async function enviaPedido(event) {
        event.preventDefault(); // função para o reload na página não ocorrer após o click do botão

        try {
            const settings = { // envia uma flag escolhida no select e a informação colocada no input para buscar no Banco de Dados
                method: 'POST',
                body: JSON.stringify({ flagPedido: flagPedido, busca: busca }),
                headers: {
                    "Content-Type": 'application/json'
                },
            };

            const fetchResponse = await fetch('http://192.168.15.8:3087/pedidos', settings);
            //setData(fetchResponse.status)  
            const data = await fetchResponse.json();
            console.log(data)
            dispatch(actionCreator(data))
            //dispatch(actionTest('teste')) // action usada apenas na versão do código usado na empresa
            setBusca('')
        } catch (error) {
            alert('Pedido / Orçamento não encontrado')
            return error; // retorna uma mensagem de erro se a requisição post der errado
        }
        
    }

    return (
         <>

        <div className='box'>
        <div className="divPedido">
            <img className="logo" src={logo} alt="" />
            <p className="label-pedido"> ORÇAMENTO / PEDIDO </p>
            <form className='formPedido' action="">
                <select 
                id="options"
                className='select-opcoes'
                onChange={ (event) => setFlagPedido(event.target.value) }
                >
                    <option value="selecione">SELECIONE</option>
                    <option value="numped">PEDIDO/ORÇAMENTO</option>   
                    <option value="cpf">CPF/CNPJ</option>
                    <option value="codCliente">CÓDIGO CLIENTE</option>
                    <option value="nomeCliente">NOME CLIENTE</option>
                </select>

                <input 
                    className="input" 
                    type="search" 
                    value={ busca } 
                    onChange={ (event) => setBusca(event.target.value) }
                    minLength={ 1 }
                    
                />
                <div>
                    <button 
                        disabled={ isDisable }
                        className='btn' 
                        type="submit"
                        onClick={ (event) => { enviaPedido(event) } }
                    >
                        Pesquisar
                
                    </button>
                </div>
                
            </form>
        </div>
        <Pedidos></Pedidos>
      </div>
    
    </>   
    )
}


export default PesquisaPedido 