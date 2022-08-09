import React from 'react';
import logo from './images/logo.svg'
const Navbar = () => {
    return(
        <nav className='nav'>
            <div className='nav-header'>
                <img src={logo} alt='logo' className='nav-logo'/>
                <button className='btn toggle-btn'>Sign in</button>
            </div>
            <ul className='nav-links'>
                <li>
                    <button className='link-btn'>Products</button>
                </li>
                <li>
                    <button className='link-btn'>Developers</button>
                </li>
                <li>
                    <button className='link-btn'>Company</button>
                </li>
            </ul>

        </nav>
    )

}

export default Navbar;