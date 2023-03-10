import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ReactComponent as SwapIcon } from '../../images/swap-icon.svg'
import { ReactComponent as AirdropIcon } from '../../images/airdrop-icon.svg'
import { ReactComponent as StakeIcon } from '../../images/stake-icon.svg'
import { ReactComponent as WorldIcon } from '../../images/worldwide-icon.svg'
import { ReactComponent as SettingIcon } from '../../images/setting-icon.svg'
import { useGlobalContext } from '../../context';

import './navbar.css'

function Navbar() {
  const {openModal} = useGlobalContext();
  return (
    <nav className='navbar'>
      <div className='nav-wrapper'>
        <Link to={'/'} className='logo'>
          <h2>Hopium</h2>
          {/* <img src='' alt='' /> */}
        </Link>
        <ul className='nav-list'>
          <NavLink className='nav-link' to={'/swap'}>
            <SwapIcon className='link-icon' />
            <span className='s'>Swap</span>
          </NavLink>
          <NavLink className='nav-link' to={'/stake'}>
            <StakeIcon className='link-icon' />
            <span>Stake</span>
          </NavLink>
          <NavLink className='nav-link' to={'/airdrop'}>
            <AirdropIcon  className='link-icon'/>
            <span>Airdrop</span>
          </NavLink>
        </ul>
        <div className='nav-right'>
          {/* <img src='' alt='' /> */}
          <span>$0.000</span>
          <WorldIcon className='word-icon' />
          <SettingIcon className='setting-icon' onClick={openModal}/>
          <a className='connect' href='/'>
            Connect Wallet
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar