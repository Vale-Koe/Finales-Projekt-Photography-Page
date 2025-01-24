import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../css/Navigation.css";
import { useState } from 'react';

function Navigation({ setIsMenuOpen }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsMenuOpen(!isOpen);

    }
    // hamburger Menu verschwindet wenn about/contact geklickt wird
    const closeMenu = () => {
        setIsOpen(false);
        setIsMenuOpen(false);
    }

    return (
        <div className='navigation'>
            <div className='logoContainer'>
                <div className='logo'>
                    <Link className='toHome' to='/'><img className='logo' src="./Logo.png" alt="Logo Image" /></Link>
                </div>
            </div>
            <div className='heroText'>
                <h1>Valentina Koehler</h1>
                <h2>Photography</h2>
            </div>

            {location.pathname === '/' && (
                <div className='mobileTablet'>
                    <div className='hamburgerMenu' onClick={toggleMenu}>
                        <img src="/Hamburger.svg" alt="Hamburger Menu" />
                    </div>

                    {isOpen && (
                        <div className='hamburgerMobile'>
                            <Link className='link' to='/about' onClick={closeMenu}>About</Link>
                            <Link className='link' to='/contact' onClick={closeMenu}>Contact</Link>
                        </div>
                    )}
                </div>
            )}

            <div className='hamburgerDesktop'>
                <Link className='link' to='/about'>About</Link>
                <Link className='link' to='/contact'>Contact</Link>
            </div>
        </div>
    )
}

export default Navigation