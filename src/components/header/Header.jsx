import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import ME from '../../assets/okto.png'


function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>
                    Hello I'm
                </h5>
                <h1>
                    Oktovizurya Kurnia
                </h1>
                <h5 className="text-light">
                    Backend Developer
                </h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className='scroll__down'> Scroll Down</a>
            </div>
        </header>
    )
}

export default Header