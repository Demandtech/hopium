import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './swapheader.css'
import Exchange from '../exchange/Exchange'
import Liquidity from '../liquidity/Liquidity'

function SwapHeader() {
  const [exchange, setExchange] = useState(true)
  return (
    <>
      <header className='swap-header'>
        <div className='header-wrapper'>
          <div className='exchange'>
            <button
              onClick={() => setExchange(true)}
              className={exchange ? `active-btn` : 'exchange-btn'}
            >
              Exchange
            </button>
          </div>
          <div className='liquidity'>
            <button
              onClick={() => setExchange(false)}
              className={!exchange ? `active-btn` : 'exchange-btn'}
            >
              Liquidity
            </button>
          </div>
        </div>
      </header>
      <section className='swap-section'>
        {exchange ? <Exchange/> : <Liquidity />}
      </section>
    </>
  )
}

export default SwapHeader
