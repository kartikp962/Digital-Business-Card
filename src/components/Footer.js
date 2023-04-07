import React from 'react'
import '../css/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='footer'>
        <FontAwesomeIcon icon={faTwitter} className='footer-icons'/>
        <FontAwesomeIcon icon={faFacebook} className='footer-icons'/>
        <FontAwesomeIcon icon={faInstagram} className='footer-icons'/>
        <FontAwesomeIcon icon={faGithub} className='footer-icons'/>
    </div>
  )
}

export default Footer