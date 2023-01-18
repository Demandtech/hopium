import React from 'react'
import './hero.css'
import logo from '../../images/hero-img.png'

function Hero() {
  return (
    <section className='hero'>
      <div className='hero-wrapper'>
        <div className='left'>
          <h1>Maximize your profits with HOPIUM.</h1>
          <p>
            Swap and Stake on the simplest and most innovative platform in the
            crypto space.
          </p>
          <div className="btns">
             <a className='hero-connect' href="/">Connect Wallet</a>
             <a className='hero-trade' href="/">Trade Now</a>
          </div>
        </div>
        <div className="right">
            <div className="right-wrapper">
               <img src={logo} alt="" width={'100%'}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero