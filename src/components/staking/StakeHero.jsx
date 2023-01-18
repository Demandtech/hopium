import React from 'react'
import { ReactComponent as Tooltip } from '../../images/tooltip.svg'
import './stakehero.css'

function Stake() {
  return (
    <section>
      <div className='stake-hero'>
        <div className='stake-hero-header'>
          <div>
            <h2>Hopium Staking</h2>
            <p>
              Stake tokens - Earn tokens. <br />
              High APR, low risk.
            </p>
          </div>
          <div className="help">
              <a href='/'>
                  Help
                 <Tooltip />
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stake