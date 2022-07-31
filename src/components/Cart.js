import data from './productsData';

function Cart(props){
    return(
        <div>
            {props.list.map(product =>
                <div className='cart-product'>
                    <img src='' alt='' />
                    <div>
                        <p>Product: {product.item.id}</p>
                        <p>Price: {product.item.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    <div>
                        <button>Order</button>
                        <button>Remove</button>
                    </div>
                </div> )}
        </div>
    );

}
export default Cart;
