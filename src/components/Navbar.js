import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='navbar'>
            <h2 className='nav-logo'>Tiara</h2>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to ='shopping'>Shopping</Link>
                <Link to ='/'>Contact</Link>
                <Link to = 'shopping'><span className="material-symbols-outlined">shopping_cart</span></Link>
            </div>
        </nav>
    )
}

export default Navbar;
