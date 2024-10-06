import '../style/style.css';
import Popup from './popup';
import Table from 'react-bootstrap/Table';
import { useDispatch } from "react-redux";


function Card(props) {
    const dispatch = useDispatch();

    return (
        <>
          <div className='cardsPedidos'>
          <Table responsive="sm">
            { props.tipo == 'P' ? 
            
            <thead>
                <tr>
                    <th className='th-pedido'>Cliente</th>
                    <th className='th-pedido'>Data</th>
                    <th className='th-pedido'>NumPed</th>
                    <th className='th-pedido'>Pos</th>
                    <th className='th-pedido'>vlTotal</th>
                    <th className='th-pedido'>Opção</th>
                </tr>
            </thead>

            : 
             
            <thead>
                    <tr>
                        <th className='th-orcamento'>Cliente</th>
                        <th className='th-orcamento'>Data</th>
                        <th className='th-orcamento'>NumPed</th>
                        <th className='th-orcamento'>Pos</th>
                        <th className='th-orcamento'>vlTotal</th>
                        <th className='th-orcamento'>Opção</th>
                    </tr>
            </thead>
            }

            <tbody>
                <tr>
                        <td className='td-pedido'> { props.cliente } </td>
                        <td className='td-pedido'> { props.data } </td>
                        <td className='td-pedido'> { props.numPed } </td>
                        <td className='td-pedido'>{ props.pos }</td>
                        <td className='td-pedido'>{ props.vlTotal }</td>
                        <td className='td-pedido'> <Popup numped={ props.numPed } disp={ dispatch  }></Popup></td>			
                </tr> 
            </tbody>
          </Table> 
          </div>
        </>
    )
}


export default Card