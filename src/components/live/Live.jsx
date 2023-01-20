import React, { useState, useRef, useEffect } from 'react'
import './live.css'
import { ReactComponent as AccordDown } from '../../images/accor-down.svg'
import { ReactComponent as AccordUp } from '../../images/accor-up.svg'
import { ReactComponent as LinkIcon } from '../../images/link-icon.svg'
import { ReactComponent as Tooltip } from '../../images/tooltip.svg'
import { ReactComponent as ManualIcon } from '../../images/manual-icon.svg'
import { ReactComponent as CalculatorIcon } from '../../images/calculator.svg'
import { ReactComponent as TimerIcon } from '../../images/timer.svg'

const Live = ({content}) => {
  const [isInnerOpen, setIsInnerOpen] = useState(false)
  const innerWrapperRef = useRef(null)
  const innerContentRef = useRef(null)
  
  console.log(content.name)
  useEffect(() => {
    const wrapperHeight = innerWrapperRef.current.getBoundingClientRect().height
    if (isInnerOpen) {
      innerContentRef.current.style.height = `${wrapperHeight}px`
    } else {
      innerContentRef.current.style.height = '0px'
    }
  }, [isInnerOpen])
  return (
    <div className='live'>
      <div className='live-wrapper'>
        <div
          className='live-left-header'
          onClick={() => setIsInnerOpen(!isInnerOpen)}
        >
          <div className='live-left'>
            <div className='live-logo'>
              <img src={content.img} alt='' width={'40px'} />
            </div>
            <div>
              <p>{content.name}</p>
              <span>{content.plan}</span>
            </div>
          </div>
          <div className='live-center'>
            <div className='nft-earned'>
              <span>NFTG Earned</span>
              <strong>0.0</strong>
              <span>0 USD</span>
            </div>
            <div className='destop-total-staked'>
              <CalculatorIcon className='calc-icon' />
              <div className='calc-wrapper'>
                <span>Total staked</span>
                <p>{content.totalStaked}</p>
              </div>
            </div>
          </div>
          <div className='live-right'>
            <span>APR</span>
            <p>{content.APR}</p>
          </div>
          <div className='end-in'>
            <span>End In</span>

            {content.endsIn ? (
              <div className='timer'>
               
                <p>{content.endsIn}</p>
                <TimerIcon className='timer-icon' />
              </div>
            ) : (
              <div className='timer'>
                <p>-</p>
              </div>
            )}
          </div>
          <div className='detail-btn'>
            <button>
              <span>{isInnerOpen ? 'Hide' : 'Details'}</span>
              <div>
                {isInnerOpen ? (
                  <AccordUp className='acc-down' />
                ) : (
                  <AccordDown className='acc-down' />
                )}
              </div>
            </button>
          </div>
        </div>
        <div ref={innerContentRef} className='inner-content'>
          <div ref={innerWrapperRef} className='inner-content-wrapper'>
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
    </div>
  )
}

export default Live
