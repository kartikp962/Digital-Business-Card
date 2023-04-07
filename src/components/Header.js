import React from 'react'
import programmerAvatar from '../img/programmer-avatar.jpg'
import '../css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <div>
        <img src={programmerAvatar} width='400px' className='header-img' />
        <div className='header-info'>
            <h3>Kartik Pal</h3>
            <p>Frontend Developer</p>
            <p>kartikpal.website</p>
        </div>
        <div className='header-buttons'>
            <button className='email-btn'><FontAwesomeIcon icon={faEnvelope} />Email</button>
            <button className='linkedin-btn'><FontAwesomeIcon icon={faLinkedin} />Linkedin</button>
        </div>
    </div>
  )
}

export default Header