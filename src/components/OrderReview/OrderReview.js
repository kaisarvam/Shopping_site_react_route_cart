import React from 'react';
import useCart from '../../Hooks/useCart/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDb} from '../../utilities/fakedb'

const OrderReview = () => {
    const [products,setProducts] = useProducts();
    const [cart,setCart] = useCart(products);
    const handleRemove = key=>{
        const newCart = cart.filter(product=>product.key !== key);
        console.log(newCart);
        setCart(newCart);
        removeFromDb(key);

    }
    return (
      
            <div className="shop-container">
                <div className="product-container">
        {
           
           cart.map(product=>{
               console.log("product key is ",product.key)
           return (<ReviewItem product={product}  key={product.key} handleRemove={handleRemove} ></ReviewItem>)
        })
        }
                </div>
                <div className="cart-container">
                <Cart cart={cart}></Cart>
                </div>
            </div>
        
    );
};

export default OrderReview;