import {useState} from 'react';
import Cart from './Cart';
import products from './productsData';
import Product from './Product';
import '../shopping.css';

function Shopping(){
    // const [cart, setCart] = useState([]);
    // const [showCart, setShowCart] = useState(false);
    // const addToCart = (item) => {
    //     setCart(cart => [...cart, item]);
    //     console.log(cart);
    // };
    // const switchCart = () => setShowCart(showCart => !showCart);
    // const removeProduct = (id) => {
    //     let newCart = cart.filter(product => product.item.id !== id);
    //     setCart(newCart);
    // }

    // if(showCart) return <Cart list={cart} switchCart={switchCart} removeProduct={removeProduct}/>
    // else {
        return(
            <div className='shopping'>
                <h1>Choose your Style</h1>
                <div className='products-list'>
                {products.map(product => <Product  key={product.id} info={product} addToCart={null} />)}
                </div>
            </div>
        );
    // }
}
export default Shopping;
