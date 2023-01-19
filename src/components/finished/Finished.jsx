import React from 'react'
import './finished.css'
import { ReactComponent as AccordUp } from '../../images/accor-up.svg'

function Finished() {
  return (
    <div className='finished'>
      <div className='finished-wrapper'>
        <p>
          These pools are no longer distributing rewards. Please unstake your
          tokens
        </p>
        <ToTopButton />
      </div>
    </div>
  )
}

export const ToTopButton = () => {
  return (
    <div className='to-top'>
        <button>To Top <AccordUp className='accordup'/></button>
    </div>
  ) 
}

export default Finished
