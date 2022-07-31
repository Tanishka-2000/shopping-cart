import {useState} from 'react';
import products from './productsData';
import Product from './Product';
import Cart from './Cart';
import '../shopping.css';

function Shopping(){

    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    const addToCart = (item) => {
        setCart(cart => [...cart, item]);
        console.log(cart);
    };

    if(showCart) return <Cart list={cart}/>
    else{
        return(
            <div className='products-list'>
            {products.map(product => <Product  key={product.id} info={product} addToCart={addToCart} />)}
            </div>
        );
    }

}
export default Shopping;
