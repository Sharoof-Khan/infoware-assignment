import { combineReducers } from 'redux';
import cartReducer from './cart/reducers'

const rootreducer = combineReducers({dominoProduct: cartReducer });


export default rootreducer;