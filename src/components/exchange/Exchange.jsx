import React, { useState } from 'react'
import { ReactComponent as SettingIcon } from '../../images/setting-icon.svg'
import { ReactComponent as RecentIcon } from '../../images/recent-icon.svg'
import { ReactComponent as ArrowDown } from '../../images/arrowdown.svg'
import { ReactComponent as AccordDown } from '../../images/accor-down.svg'
import './exchange.css'
import { useGlobalContext } from '../../context'
import bnb from '../../images/belt.png'
import smallLogo from '../../images/logo-small.png'

function Exchange() {
  const {rotate, handleRotate } = useGlobalContext()
  return (
    <section className='exchange'>
      <div className='exchange-wrapper'>
        <HeaderSwap
          content={{ title: 'Exchange', subtitle: 'Swap BSC tokens instantly' }}
        />
        <div className={`${rotate ? 'column-reverse' : 'exchange-content'}`}>
          <div className='from'>
            <p>From</p>
            <div className='from-wrapper'>
              <div>
                <span>0.0</span>
              </div>
              <div className='select'>
                <img src={bnb} alt='' width='20px' />
                <span>BELT</span>
                <AccordDown className='accord-down' />
              </div>
            </div>
          </div>
          <div className='arrow-wrapper'>
            <ArrowDown className='arrowdown' onClick={handleRotate} />
          </div>
          <div className='to'>
            <p>To</p>
            <div className='from-wrapper'>
              <div>
                <span>0.0</span>
              </div>
              <div className='select'>
                <img src={smallLogo} alt='' width='20px' />
                <span>Hop</span>
                <AccordDown className='accord-down' />
              </div>
            </div>
          </div>
        </div>
        <div className='tolerance'>
          <h6>Slippage Tolerance</h6>
          <span>1%</span>
        </div>
        <a className='exchange-wallet-btn' href='/'>
          Connect Wallet
        </a>
      </div>
    </section>
  )
}

export const HeaderSwap = ({content}) => {
  const { openModal} = useGlobalContext()
  return (
    <>
      <div className={'exchange-header'}>
        <div className={'header-wrap'}>
          <h4>{content.title}</h4>
          <p>{content.subtitle}</p>
        </div>
        <div className='setting-wrapper'>
          <SettingIcon className='ex-setting-icon' onClick={openModal} />
          <RecentIcon className='ex-recent-icon' />
        </div>
      </div>
    </>
  )
}

export default Exchange
