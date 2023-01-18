import React, { useState } from 'react'
import { ReactComponent as SettingIcon } from '../../images/setting-icon.svg'
import { ReactComponent as RecentIcon } from '../../images/recent-icon.svg'
import { ReactComponent as ArrowDown } from '../../images/arrowdown.svg'
import './exchange.css'
import { useGlobalContext } from '../../context'

function Exchange() {
  const {openModal, rotate, handleRotate} = useGlobalContext()
  return (
    <section>
      <div className='exchange-wrapper'>
        <div className='exchange-header'>
          <div className='exchange-header-left'>
            <h4>Exchange</h4>
            <p>Swap BSC tokens instantly</p>
          </div>
          <div className='setting-wrapper'>
            <SettingIcon className='ex-setting-icon' onClick={openModal} />
            <RecentIcon className='ex-recent-icon' />
          </div>
        </div>
        <div className={`${rotate ? 'column-reverse' : 'exchange-content'}`}>
          <div className='from'>
            <p>From</p>
            <div className='from-wrapper'>
              <div>
                <span>0.0</span>
              </div>
              <select name='from' id=''>
                <option value=''>
                  <p>BELT</p>
                </option>
              </select>
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
              <select name='from' id=''>
                <option value=''>
                  <p>BUSD</p>
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className='tolerance'>
          <h6>Slippage Tolerance</h6>
          <span>1%</span>
        </div>
        <a className='exchange-wallet-btn' href="/">Connect Wallet</a>
      </div>
    </section>
  )
}

export default Exchange