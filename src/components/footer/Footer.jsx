
import React from 'react'
import { RiYoutubeFill } from 'react-icons/ri'
import { FiInstagram } from 'react-icons/fi'
import { AiFillTwitterCircle} from 'react-icons/ai'
import './footer.css'


const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Oneanonly
      </a>
      <ul className='permalinks'>
         <li><a href='#'>Home</a></li>
         <li><a href='#about'>About</a></li>
         <li><a href='#experience'>Experience</a></li>
         <li><a href='#service'>Services</a></li>
         <li><a href='#portfolio'>PortFolio</a></li>
         <li><a href='#testimonials'>Testimonials</a></li>
         <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className='footer__social'>
        <a href='https://instagram.com'><FiInstagram/></a>
        <a href='https://twitter.com'><AiFillTwitterCircle/></a>
        <a href='https://www.youtube.com'><RiYoutubeFill/></a>
      </div>

      <div className='footer__copyright'>
         <small>&copy; Oneanonly_2022 All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer