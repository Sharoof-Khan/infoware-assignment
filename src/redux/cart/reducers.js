import * as actionTypes from './actionTypes';
 
const INITIAL_STATE = {
    cartItems: [],
    products: [],
    total: 0,
    error: "",
    loading: false,
}


const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {


        case actionTypes.FETCH_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case actionTypes.FETCH_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload.products,
                loading: false,
            }
        case actionTypes.FETCH_ALL_PRODUCTS_FAILURE:
            return {
                ...state,
                error: action.payload.error,
                loading: false,
            }
        
        // case actionTypes.FETCH_ALL_PRODUCTS:
        //     return {
        //         ...state,
        //         products: action.payload.products
        //     }
        case actionTypes.ADD_TO_CART:
            // const newCartItem = action.payload.product;
            const item = state.products.find(prod => prod.id === action.payload.product.id);
            const inCart = state.cartItems.find(item =>
                item.id === action.payload.product.id ? true : false
            );
            return {
                ...state,
                // cartItems: [...state.cartItems, { ...item, quantity: 1 }],
                // total: state.total + item.price 
                cartItems:inCart ? state.cartItems.map(item => item.id === action.payload.product.id ?{...item, quantity: item.quantity + 1} : item) : [...state.cartItems, { ...item, quantity: 1 }],


            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id) 
            }
        case actionTypes.CHANGE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? { ...item, quantity: +action.payload.quantity } : item)
            }

            // return state
        
        case actionTypes.CHECKOUT_REQUEST:
            return {
                ...state,
                cartItems: [],

            }
        
            
    
        default:
            return state;
    }
    
}



export default cartReducer;