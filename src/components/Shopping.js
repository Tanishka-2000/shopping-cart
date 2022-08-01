import {useState} from 'react';
import Cart from './Cart';
import products from './productsData';
import Product from './Product';
import '../shopping.css';

function Shopping(){
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const addToCart = (item) => {
        setCart(cart => [...cart, item]);
        console.log(cart);
    };
    const switchCart = () => setShowCart(showCart => !showCart);

    if(showCart) return <Cart list={cart} switchCart={switchCart}/>
    else {
        return(
            <div className='shopping'>

                <div className='cart-icon' onClick={switchCart}>
                    <div className='cart-number'>{cart.length}</div>
                    <span className="material-symbols-outlined">shopping_cart</span>
                </div>
                <h1> Choose your Style</h1>
                <div className='products-list'>
                {products.map(product => <Product  key={product.id} info={product} addToCart={addToCart} />)}
                </div>
            </div>
        );
    }
}
export default Shopping;
