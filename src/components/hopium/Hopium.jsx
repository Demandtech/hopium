import React from 'react'
import { Link } from 'react-router-dom'
import hopiumImg from '../../images/hopium-img.png'
import './hopium.css'
import Market from './Market'

function Hopium() {
  return (
    <section className='hopium'>
      <div className='hopium-wrapper'>
        <div className='left-swap'>
          <h2>
            <span> Hopium</span> is different.
          </h2>
          <p>
            This token will revolutionize the entire NFT space and will be
            primarily used in the NFT Global Universe. Swap, Stake or Farm them
            now.
          </p>
          <div className='swap-btns'>
            <Link className='swap-btn' to={'/stake'}>
              Buy HOPIUM
            </Link>
            <Link className='learn-btn' href='/stake'>
              Learn
            </Link>
          </div>
        </div>
        <div className='right-swap'>
          <div className='right-swap-wrapper'>
            <img src={hopiumImg} alt=' not found' height='100%' width='100%' />
          </div>
        </div>
      </div>
      <Market />
    </section>
  )
}

export default Hopium
