import React from 'react'
import { ReactComponent as PlusIcon } from '../../images/plus.svg'

import { HeaderSwap } from '../exchange/Exchange'
import './liquidity.css'

function Liquidity() {
  return (
    <section className='liquidity'>
      <div className='liquidity-wrapper'>
        <HeaderSwap
          content={{
            title: 'Your Liquidity',
            subtitle: 'Remove liquidity to receive tokens back',
            class: 'liquidity-header',
          }}
        />
        <div className='liquidity-content'>
          <p>Connect to a wallet to view your liquidity.</p>
        </div>
        <div className='liquidity-btn'>
          <button>
            <PlusIcon className='plus-icon' />
            Add Liquidity
          </button>
        </div>
      </div>
    </section>
  )
}

export default Liquidity
