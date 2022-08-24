
function Cart(props){
    function remove(e){
        props.removeProduct(e.target.getAttribute('data-id'));
    }
    
    return(
        <div>
            <div className='cart-icon'>
                <span className="material-symbols-outlined" onClick={props.switchCart}>close</span>
            </div>
            {props.list.map(product =>
                <div key = {product.item.id} className='cart-product'>
                    <img className='cart-image' src={product.item.image} alt='product' />
                    <div className='data'>
                        <p>Product: {product.item.name}</p>
                        <p>Price: ${product.item.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total Amount: ${product.item.price * product.quantity}</p>
                    </div>
                    <div className='btns'>
                        <button onClick={remove} data-id={product.item.id}>Proceed to pay</button>
                        <button onClick={remove} data-id={product.item.id}>Remove from cart</button>
                    </div>
                </div> )}
        </div>
    );

}
export default Cart;
