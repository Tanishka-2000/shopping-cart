import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Product({info, addToCart}){
    const [value, setValue] = useState(1);

    const navigate = useNavigate();
    // add product to cart
    const add = () => {
        addToCart({item: info, quantity: value});
        navigate('/cart')
    }

    // setting quantity of product directly
    const updateValue = (e) => setValue(e.target.value);

    // increment or decrement handler
    const increment = () => setValue(value => value + 1);
    const decrement = () => {
        if(value === 1) return;
        setValue(value => value - 1);
    }

    return(
        <div key={info.id} className="product">

            <div className='image'>
                <img src={info.image} alt="product" />
            </div>

            <p className='product-name'>{info.name}</p>
            <p>Price: ${info.price}</p>
            <label htmlFor='quantity'>Quantity: </label>
            <input id='quantity' type='number' value={value} onChange={updateValue}/>

            <div className='btn-group'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            
            <button type="button" onClick={add}>Add to cart</button>
        </div>
    );
}
export default Product;
