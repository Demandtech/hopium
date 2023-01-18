import React from 'react'
import { ReactComponent as WorldIcon } from '../../images/worldwide-icon.svg'
import './footer.css'
import {FaTwitter, FaTelegram, FaGithub} from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'

function Footer() {
  return (
    <footer>
      <div className='footer-wrapper'>
        <div className='left-footer'>
          <WorldIcon className='world-icon' />
          <p>EN</p>
          <div className='social'>
            <FaTwitter className='icon' />
            <FaTelegram className='icon' />
            <FaGithub className='icon' />
          </div>
        </div>
        <div className='center-footer'></div>
        <div className='right-footer'>
          <span>$0.000</span>
          <a href='/' className='footer-btn'>
            Buy Hopium
            <CgArrowLongRight className='arrow' />
          </a>
        </div>
      </div>
      <p className='copyright'>Copyright 2023 © All rights reserved to Hopium and SURVIVE LLC</p>
    </footer>
  )
}

export default Footer