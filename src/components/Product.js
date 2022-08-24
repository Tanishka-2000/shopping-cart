import {useState} from 'react';

function Product(props){
    const [value, setValue] = useState(1);
    const add = () => props.addToCart({item: props.info, quantity: value});
    const updateValue = (e) => {
        let num = e.target.value;
        if(isNaN(num)) return;
        setValue(num);
    }
    const increment = () => setValue(value => value + 1);
    const decrement = () => {
        if(value === 1) return;
        setValue(value => value - 1);
    }

    return(
        <div key={props.info.id} className="product">

            <div className='image'>
                <img src={props.info.image} alt="product" />
            </div>

            <p className='product-name'>{props.info.name}</p>
            <p>Price: ${props.info.price}</p>
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
