import React, { useEffect } from 'react'
import MenuCart from './MenuCart'
// import './products.css'
import Style from './products.module.css'
import { useSelector,useDispatch } from 'react-redux'
import { fetchData } from '../redux/cart/action'


const Products = () => {


    const dispatch = useDispatch()
    const products = useSelector(state => state.dominoProduct.products)
    // console.log('products:', products)
    const loading = useSelector(state => state.dominoProduct.loading)
    

    useEffect(() => {
        if (products.length === 0) { 

            dispatch(fetchData())
        }
    }, [dispatch, products?.length])

   

    if (loading) {
        return <center><h1>Loading....</h1> </center>
    }
        
        return (
            <div className={Style.container}>
   
                {products && products.map(item => {
                    return <MenuCart
                        item={item}
                        key={item.id}
                        id={item.id}
                        pic={item.image}
                        price={item.price}
                        title={item.title}
                        description={item.description}
                        size={item.size}
                        crust={item.crust}
                        category={item.categories}
                        // addToCart = {handleAddToCart}
                    />
            
                })}

          
            </div>
        )
    
}

export default Products