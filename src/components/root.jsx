import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

 export default function Root(){
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (id) => setCart([...cart, ...cart.filter(product => product.item.id !== id)])

  return(
    <>
      <Navbar/>
      <Outlet />
      <Footer />
    </>
  )
 }