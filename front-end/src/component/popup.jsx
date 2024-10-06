import React from 'react';
import Popup from 'reactjs-popup';
import '../style/style.css';
import enviaNumPed from '../utils';
import { actionCleanState } from '../redux/actions';

export default (props) => (
  <Popup
    trigger={<button className="button-popup"> Imprimir </button>}
    modal
    nested
  >
    {close  => (
      <div className="modal">
        <button className="button-close" onClick={close} >
          &times;
        </button>
        <div className="content">
          {' '}
           Deseja Imprimir este pedido ?
          <br />
          
        </div>
        <div className="actions">
          <button 
            onClick={ () => { 
              enviaNumPed(props.numped), 
              close()
              return props.disp(actionCleanState()) // recebe  o dispatch via props e envia a action para limpar estado
            } } 
            className="button-print"
            > 
            
            Imprimir 

          </button>
          <button
            className="button-cancelar"
            onClick={() => {
              close(); // fecha a tela de popup
            }}
          >
            Cancelar
          </button>
        </div>{
      }
      </div>
    )}
  </Popup>
);