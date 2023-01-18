import React from 'react'
import './start.css'

function Start() {
  return (
    <section className='start'>
      <div className='start-wrapper'>
        <h2>Start in seconds.</h2>
        <p>
          Connect your crypto wallet to start using the app in seconds.
          <span> No registration needed.</span>
        </p>
        <div className='more-btn'>
          <a href='/'>more infos</a>
        </div>
        <div className='wallet-btn'>
          <a href=''>Connect Wallet</a>
        </div>
      </div>
    </section>
  )
}

export default Start
