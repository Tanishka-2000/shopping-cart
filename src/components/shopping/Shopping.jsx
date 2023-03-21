import { useContext } from 'react';
import products from '../productsData';
import Product from '../Product';
import { CartContext } from '../root';
import './shopping.css';

function Shopping(){
    const {addToCart} = useContext(CartContext);

    return(
        <div className='shopping'>
            <h1>Choose your Style</h1>
            <div className='products-list'>
            {products.map(product => <Product  key={product.id} info={product} addToCart={addToCart} />)}
            </div>
        </div>
    );
}
export default Shopping;
