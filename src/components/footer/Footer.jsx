import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Khaziq</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testemonial">Testemonial</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com/mkhaziqf" target="_blank">
          <FaFacebookF />
        </a>
        <a href="http://instagram.com/m.khaziq" target="_blank">
          <FiInstagram />
        </a>
        <a href="http://twitter.com/" target="_blank">
          <FiTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; KHAZIQ Creation. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer