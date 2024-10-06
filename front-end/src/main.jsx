import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PesquisaPedido from './screens/pesquisaPedido.jsx';
import Pedidos from './screens/pedidos.jsx';
import { Provider } from 'react-redux';
import store from './redux/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <RouterProvider router={ router }>
          <App/>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
