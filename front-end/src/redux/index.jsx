import { createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import apiReducer from './reducers/apiReducer';

const store = createStore(apiReducer, composeWithDevTools()); // store que fornece o estado global e guarda as informações

export default store;