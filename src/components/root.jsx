import { useState , createContext} from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const CartContext = createContext();

export default function Root(){
const [cart, setCart] = useState([]);

const addToCart = (item) => {
  let alreadyInCart = cart.some(product => product.item.id === item.item.id);
  
  //if same product present in cart then update its quantity 
  if(alreadyInCart){
    setCart(cart.map(product => {
      if(product.item.id === item.item.id)return {...product, quantity: item.quantity}
      else return product;
    }));
    return;
  }
  // otherwise add item to cart
  setCart([...cart, item]);
}

const removeFromCart = (id) => setCart(cart.filter(product => product.item.id !== Number(id)))

return(
  <>
    <Navbar cartLength={cart.length}/>
    <CartContext.Provider value={{cart,  addToCart, removeFromCart}}>
      <Outlet/>
    </CartContext.Provider>
    <Footer />
  </>
)
}