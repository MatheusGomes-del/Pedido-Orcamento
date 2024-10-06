import { useSelector } from 'react-redux';
import '../style/style.css';
import { actionOrdemOrcamentos, actionOrdemPedidos } from '../redux/actions';
import { useDispatch } from 'react-redux';
import { ordenaOrcamentos, ordenaPedidos } from '../utils';

function Legenda() {
    const dispatch = useDispatch();
    const api = useSelector((state) => state) // pega resultado da pesquisa da api
   
    function clickPedido() {
        ordenaPedidos(dispatch, api, actionOrdemOrcamentos) // assa a função dispatch, request da api, e a action para re-ordenar por pedidos
    }

    function clickOrcamento() {
        ordenaOrcamentos(dispatch, api, actionOrdemPedidos) // passa a função dispatch, request da api, e a action para re-ordenar por orcamentos
    }

    return (
        <div className='card-legenda'>
               <div className='ball-pedido' onClick={ clickPedido }></div>
               <h5> Pedido </h5>
               <div className='ball-orcamento' onClick={ clickOrcamento }></div>
               <h5> Orçamento </h5>
        </div>
    )
}

export default Legenda;