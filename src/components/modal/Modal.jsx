import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { ReactComponent as Tooltip } from '../../images/tooltip.svg'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './modal.css'
import { useGlobalContext } from '../../context'

function Modal() {
  const { closeModal, isModalOpen } = useGlobalContext()
  const [flipToggle, setFlipToggle] = useState(false)
  
  return (
    isModalOpen && <div className='modal'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <h6>Settings</h6>
          <FaTimes  onClick={closeModal} className='close-btn'/>
        </div>
        <div className='global sect'>
          <h5>GLOBAL</h5>
          <p>
            Default Transaction Speed (GWEI)
            <Tooltip id='tooltip' className='tooltip' />
          </p>
          <ReactTooltip
            anchorId='tooltip'
            place='top'
            content='Adjusts the gas price (transaction fee) for your transaction. Higher
            GWEI = higher speed = higher fees'
          />

          <div className='global-btns'>
            <button>Standard (5)</button>
            <button>Fast (6)</button>
            <button>Instant (7)</button>
          </div>
        </div>
        <div className='swaps sect'>
          <h5>SWAPS & LIQUIDITY</h5>
          <p>
            Slippage Tolerance (GWEI)
            <Tooltip id='tooltip1' className='tooltip' />
          </p>
          <ReactTooltip
            anchorId='tooltip1'
            place='top'
            content='Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.'
          />

          <div className='swaps-btns'>
            <div className='submit-btn'>
              <input type='submit' value='0.10' />
            </div>
            <div className='submit-btn'>
              <input type='submit' value='0.5%' />
            </div>
            <div className='submit-btn'>
              <input type='submit' value='1.0%' />
            </div>
            <div className='random'>
              <input className='button' placeholder='1.0' type='text' />
              <span className='percentage'> %</span>
            </div>
          </div>
        </div>
        <div className='deadline sect modal-row'>
          <span>
            Tx deadline (mins) <Tooltip id='tooltip2' className='tooltip' />
          </span>
          <span>20</span>
          <ReactTooltip
            anchorId='tooltip2'
            place='top'
            content='Your transaction will revert if it is left confirming for longer than this time.'
          />
        </div>
        <div className='expert modal-row'>
          <span>
            Expert Mode <Tooltip id='tooltip3' className='tooltip' />
          </span>
          <ReactTooltip
            anchorId='tooltip3'
            place='top'
            content='Restricts swaps to direct pairs only.'
          />
        </div>
        <div className='disable modal-row'>
          <span>
            Disable Multihops <Tooltip id='tooltip4' className='tooltip' />
          </span>
          <ReactTooltip
            anchorId='tooltip4'
            place='top'
            content='Fun sounds to make a truly immersive pancake-flipping trading experience'
          />
        </div>
        <div className='flippy-wrapper'>
          <div className='flippy modal-row'>
            <span>
              Flippy sounds <Tooltip id='tooltip4' className='tooltip' />
            </span>
            <ReactTooltip
              anchorId='tooltip4'
              place='top'
              content='Fun sounds to make a truly immersive pancake-flipping trading experience'
            />
          </div>
          <div className='' onClick={() => setFlipToggle(!flipToggle)}>
            <div
              className={`${
                flipToggle ? 'flippy-toggle toggle-flip' : 'flippy-toggle'
              }`}
            >
              <button
                onClick={() => setFlipToggle(!flipToggle)}
                className='flippy-toggle-btn'
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
