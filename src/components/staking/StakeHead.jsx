import React, { useEffect, useState } from 'react'
import { ReactComponent as GridView } from '../../images/grid-view.svg'
import { ReactComponent as ListView } from '../../images/list-view.svg'
import { ReactComponent as SelectIcon } from '../../images/selector.svg'
import './stakehead.css'
import Live from '../live/Live'
import Finished from '../finished/Finished'

function StakeHead() {
  const [options, setOptions] = useState([
    'Popular',
    'Earned',
    'Total Staked',
    'APR',
  ])
  const [select, setSelect] = useState(options[0])
  const [isOptionOpen, setisOptionOpen] = useState(false)
  const [live, setLive] = useState(true)

  useEffect(() => {
    setOptions((prev) =>
      prev.filter((item) => {
        return item !== select
      })
    )
  }, [select])

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
            <button
              className={`${live ? 'active-head-tab' : undefined}`}
              onClick={() => setLive(true)}
            >
              Live
            </button>
            <button
              className={`${!live ? 'active-head-tab' : undefined}`}
              onClick={() => setLive(false)}
            >
              Finished
            </button>
          </div>
        </div>
        <div className='left-head'>
          <div className='select-wrapper'>
            <label htmlFor='selector'>SORT BY</label>
            <div className='select-control'>
              <div
                className={`${
                  isOptionOpen ? 'selector selector-option-open' : 'selector'
                }`}
                onClick={() => {
                  setisOptionOpen(!isOptionOpen)
                }}
              >
                <span>{select}</span>
                <SelectIcon className='select-icon' />
              </div>
              <div
                className={`${
                  isOptionOpen ? 'option-wrapper open-option' : 'option-wrapper'
                }`}
              >
                <ul className='options'>
                  {options.map((item, index) => {
                    return (
                      <li
                        onClick={() => {
                          setSelect(item)
                          setOptions([...options, select])
                          setisOptionOpen(false)
                        }}
                        key={index}
                      >
                        {item}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className='sear-wrapper'>
            <label htmlFor='search'>SEARCH</label>
            <div className='search-input'>
              <input type='text' placeholder='Search Pools' />
            </div>
          </div>
        </div>
      </div>
      <div className='content'>{live ? <Live /> : <Finished />}</div>
    </div>
  )
}

export default StakeHead
