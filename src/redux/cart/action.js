import * as actionTypes from './actionTypes';

const fetchAllProductsRequest = (payload) => { 
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS_REQUEST,
        payload
    }
}

export const fetchAllProductsSuccess = (products) => {
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS_SUCCESS,
        payload: {
            products: products,

        }
    }
}


const fetchAllProductsFailure = (err) => { 
    return {
        type: actionTypes.FETCH_ALL_PRODUCTS_FAILURE,
        payload: {
            error: err,

        }
    }
}

export const fetchData = (payload) => (dispatch) => {

    dispatch(fetchAllProductsRequest());
    fetch('https://infoware-assignment.herokuapp.com/products')
        .then(response => response.json())
        .then(data => {
            dispatch(fetchAllProductsSuccess(data));
        }
        )
        .catch(err => {
            dispatch(fetchAllProductsFailure(err));
        })
    
}

    
export const addTocart = (product) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            
            product: product
        }
    }
}
export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload:{
        
            id: itemId
    }
    }
}

export const changeQuantity = (itemId, value) => {
    return {
        type: actionTypes.CHANGE_QUANTITY,
        payload: {
            id: itemId,
            quantity: value
        }
    }
}


export const checkoutRequest = () => { 
    return {
        type: actionTypes.CHECKOUT_REQUEST,
        
    }
}