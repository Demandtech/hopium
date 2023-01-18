import React from 'react'
import { Link } from 'react-router-dom'
import stakeImg from '../../images/stake-img.png'
import './stake.css'

function Stake() {
  return (
    <section className='stake'>
      <div className='stake-wrapper'>
        <div className='left-swap'>
          <h2>
            <span> Earn</span> passive income with NFTG.
          </h2>
          <p>Every day NFTG stakers earn interest.</p>
          <div className='swap-btns'>
            <Link className='swap-btn' to={'/stake'}>
              Explore
            </Link>
            <Link className='learn-btn' href='/stake'>
              Learn
            </Link>
          </div>
        </div>
        <div className='right-swap'>
          <div className='right-swap-wrapper'>
            <img src={stakeImg} alt=' not found' height='100%' width='100%' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stake
