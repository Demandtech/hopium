import React from 'react'
import { Link } from 'react-router-dom'
import swapImg from '../../images/swap-img.png'
import './swap.css'

function Swap() {
  return (
    <section className='swap'>
      <div className='swap-wrapper'>
        <div className='left-swap'>
          <h2>
            <span>Swap</span> anything. No registration, no hassle.
          </h2>
          <p>
            Swap any token on Binance Smart Chain in seconds, just by connecting
            your wallet.
          </p>
          <div className='swap-btns'>
            <Link className='swap-btn' to={'/swap'}>
              Swap Now
            </Link>
            <Link className='learn-btn' href='/swap'>
              Learn
            </Link>
          </div>
        </div>
        <div className='right-swap'>
          <div className='right-swap-wrapper'>
            <img src={swapImg} alt=' not found' height='100%' width='100%' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Swap