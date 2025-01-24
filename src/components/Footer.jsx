import React from 'react';
import { Link } from 'react-router-dom';
import "../css/Footer.css";

function Footer({isMenuOpen}) {
    return (

        !isMenuOpen && <div className='footer'>
            <div className='copyright'>
                <p>© 2025 Valentina Koehler</p>
            </div>
            <div className='socialmediaIcons'>
                <ul>
                <a href="https://www.instagram.com/byvalentinakoehler?igsh=Z3kycTA1ZTFwdXBj&utm_source=qr" target="_blank" rel="noopener noreferrer"><li><img src='/Instagram.svg' alt='Instagram Icon' /></li></a>
                <a href="https://www.facebook.com/valentina.koehler.8/" target="_blank" rel="noopener noreferrer"><li><img src='/Facebook.svg' alt='Facebook Icon' /></li></a>
                <a href="https://api.whatsapp.com/send?phone=4917664923801&text=Hallo%20ich%20habe%20eine%20Frage!" target="_blank" rel="noopener noreferrer"><li><img src='/Whatsapp.svg' alt='WhatsApp Icon '/></li></a>
                </ul>
            </div>
        </div>
    )
}

export default Footer