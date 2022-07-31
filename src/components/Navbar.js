import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className='navbar'>
            <h2 className='nav-logo'>Tiara</h2>
            <div className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to ='shopping'>Shopping</Link>
            </div>
        </nav>
    )
}

export default Navbar;
