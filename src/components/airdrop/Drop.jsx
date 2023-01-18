import React from 'react'
import './airdrop.css'

function Airdrop() {
  return (
    <section className='airdrop'>
      <div className='drop-wrapper'>
        <div className='top'>
          <h5>1'000'000+ USD $SURV AIRDROP (3/3)</h5>
          <p>
            The airdrop is only available for pre-sale investors. Send your
            $SURV tokens and get instantly 1.2x $SURV back.
          </p>
        </div>

        <div className='center'>
          <h4>Airdrop Ended</h4>
          <div className='counter-wrapper'>
            <div className='days counter'>
              <span>-</span>
              <p>Days</p>
            </div>
            <div className='Hours counter'>
              <span>-</span>
              <p>Hours</p>
            </div>
            <div className='mins counter'>
              <span>-</span>
              <p>Mins</p>
            </div>
            <div className='secs counter'>
              <span>-</span>
              <p>Secs</p>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <div className='total'>
            <span>Total Amount</span>
            <p>12,794,818,241.91 SURV</p>
          </div>
          <div className='receive'>
            <span>Your Recieve</span>
            <p>0 SURV</p>
          </div>
          <div className='whitelisted'>
            <span>Whitelisted</span>
            <p>No</p>
          </div>
        </div>
        <form className='form'>
          <label htmlFor='val'>Please Input</label>
          <div className='form-control'>
            <div className='inputel'>
              <input type='text' placeholder='0.0' />
            </div>
            <div className='button'>
              <button>Hopium</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Airdrop
