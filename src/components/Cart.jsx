import { useContext } from "react";
import { CartContext } from "./root";

function Cart(){
    const {cart, removeFromCart} = useContext(CartContext);
    console.log(cart);
    function remove(e){
        removeFromCart(e.target.getAttribute('data-id'));
    }
    
    return(
        <div>
            {cart.map(product =>
                <div key = {product.item.id} className='cart-product'>
                    <img className='cart-image' src={product.item.image} alt='product' />
                    <div className='data'>
                        <p>Product: {product.item.name}</p>
                        <p>Price: $ {product.item.price}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Total Amount: $ {product.item.price * product.quantity}</p>
                    </div>
                    <div className='btns'>
                        <button onClick={remove} data-id={product.item.id}>Proceed to pay</button>
                        <button onClick={remove} data-id={product.item.id}>Remove from cart</button>
                    </div>
                </div> 
            )}
            <div className='totalAmount'>Total Payble Amount : $ {totalAmount(cart)}</div>
        </div>
    );
}
export default Cart;

function totalAmount(cart){
 return cart.reduce((acc, curr) => acc + (curr.item.price * curr.quantity), 0);
}