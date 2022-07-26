import { legacy_createStore,applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
// import {} from 'redux-devtools/extension'
import {composeWithDevTools} from 'redux-devtools-extension';

const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

export default store;