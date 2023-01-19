import React from 'react'
import './live.css'
import { ToTopButton } from '../finished/Finished'
import smallLogo from '../../images/logo-small.png'
import { ReactComponent as AccordDown } from '../../images/accor-down.svg'
import { ReactComponent as AccordUp } from '../../images/accor-up.svg'
import { ReactComponent as LinkIcon } from '../../images/link-icon.svg'
import { ReactComponent as Tooltip } from '../../images/tooltip.svg'
import { ReactComponent as ManualIcon } from '../../images/manual-icon.svg'

function Live() {
  return (
    <div className='live'>
      <div className='live-wrapper'>
        <div className='live-left-header'>
          <div className='live-left'>
            <div className='live-logo'>
              <img src={smallLogo} alt='' width={'40px'} />
            </div>
            <div>
              <p>Manual NFTG</p>
              <span>Earn NFTG stake NFGTG</span>
            </div>
          </div>
          <div className='live-center'>
            <div className='nft-earned'>
              <span>NFTG Earned</span>
              <strong>0.0</strong>
              <span>0 USD</span>
            </div>
            <div className='destop-total-staked'>
              <span>Total staked</span>
              <p>52,666,340 NFTG</p>
            </div>
          </div>
          <div className='live-right'>
            <span>APR</span>
            <p>6.93%</p>
          </div>
          <div className='end-in'>
            <span>End In</span>
            <p>-</p>
          </div>
          <div className='detail-btn'>
            <button>
              <span>Detail</span>
              <AccordDown className='acc-down' />
            </button>
          </div>
        </div>
        <div className='inner-content'>
          <div className='inner-content-wrapper'>
            <div className='inner-left inne-card'>
              <div>
                <a href=''>
                  <span>View Project Site</span>
                  <LinkIcon className='url-icon' />
                </a>
              </div>
              <div>
                <a href=''>
                  <span>View Contract</span>
                  <LinkIcon className='url-icon' />
                </a>
              </div>
              <div className='manual'>
                <a href=''>
                  <ManualIcon className='manual-icon' />
                  <span>Manual</span>
                </a>
                <Tooltip className='manual-tooltip' />
              </div>
              <div className='inner-total-staked'>
                <p>Total staked:</p>
                <div className='amount'>
                  <p>52,666,340 NFTG</p>
                  <Tooltip className='manual-tooltip' />
                </div>
              </div>
              <div className='inner-apr'>
                <span>APR: </span>
                <p>6.93%</p>
              </div>
              <div className='inner-nft-earned'>
                <span>NFTG Earned:</span>
                <strong>0.0</strong>
                <span>0 USD</span>
              </div>
            </div>

            <div className='inner-earned inner-card'>
              <h5>
                <span>Hopium</span> Earn
              </h5>
              <div className='collect'>
                <strong className='balance'>0</strong>
                <button disabled={true}>Collect</button>
              </div>
            </div>
            <div className='inner-talking inner-card'>
              <div className='start-talking'>
                <p>START STAKING</p>
                <a>Connect Wallet</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToTopButton />
    </div>
  )
}

export default Live
