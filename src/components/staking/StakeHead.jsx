import React from 'react'
import { ReactComponent as GridView } from '../../images/grid-view.svg'
import { ReactComponent as ListView } from '../../images/list-view.svg'
import './stakehead.css'

function StakeHead() {
  return (
    <div className='stake-head'>
      <div className='head-wrapper'>
        <div className='right-head'>
          <div className='views-btn'>
            <GridView className='grid' />
            <ListView className='list' />
          </div>
          <div className='staked-only'>
            <p>Staked only</p>
          </div>
          <div className='head-tab'>
            <button>Live</button>
            <button>Finished</button>
          </div>
        </div>
        <div className='left-head'>
          <div>
            <label htmlFor='stake'>SORT BY</label>
            <select name='stake' id='stake'>
              <option value=''>Popular</option>
              <option value=''>APR</option>
              <option value=''>Earned</option>
              <option value=''>Total staked</option>
            </select>
          </div>
          <div>
            <label htmlFor='search'>SEARCH</label>
            <input type='text' placeholder='Search Pools' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakeHead