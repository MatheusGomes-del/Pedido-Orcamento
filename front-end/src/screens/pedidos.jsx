import '../style/style.css';
//import { useEffect, useState  } from 'react';
import Card from '../component/cardPedidos'
import { useSelector } from 'react-redux';
import Legenda from '../component/legenda';
import { formataData } from '../utils';


function Pedidos() {
    const respApi = useSelector((state) => state); // pega o valor do estado global

    const array = [
        {
        cliente: ' MATHEUS SANTOS GOMES ',
        data: ' 18/02/2040 ',
        numped: ' 3043454 ',
        pos: 'B',
        vlTotal: '300.45',
        tipoPed: 'P'
    },
     
    {
        cliente: 'CECILIA ELOÁ FELIX',
        data: ' 20/07/2021 ',
        numped: '212345',
        pos: 'B',
        vlTotal: '25.45',
        tipoPed: 'O'
    }
    
    ]

    return (
        <div className="boxPedidos">
            { respApi <= [] ? null: [<Legenda/>,  respApi.map((item, index) => // lógica para que apenas apareca as tabelas o estado global estiver com alguma informação
                <Card                                                          // - do contrário, não mostrará nada na tela
                   cliente={ item.nomeCliente  }
                   data={ formataData(item.data_pedido) }
                   numPed={ item.numped }
                   pos={ item.pos }
                   vlTotal= { item.vlTotal }
                   tipo={ item.tipoPed } // enviado tipo para separar por cor
                   key={ index } 
                />
            )]}
        </div>
    )
}

export default Pedidos