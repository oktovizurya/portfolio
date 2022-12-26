import React from 'react'
import './footer.css'
import { FiTwitter } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'


function Footer() {
    return (
        <footer>
            <a href="#" className='footer__logo'>Oktovizurya Kurnia</a>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer__socials">
                <a href="https://twitter.com/OktovizuryaK"><FiTwitter /> </a>
                <a href="https://www.instagram.com/oktovizurya_/"> <AiOutlineInstagram /></a>
                <a href="https://www.linkedin.com/in/oktovizurya-kurnia-57baa81aa/"><AiOutlineLinkedin /> </a>
            </div>
            <div className="footer__copyright">
                <small>&copy; Oktovizurya Kurnia. All right reserved.</small>
            </div>
        </footer>
    )
}

export default Footer