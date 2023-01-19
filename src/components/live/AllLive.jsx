import React from 'react'
import data from './liveData'
import Live from './Live'
import { ToTopButton } from '../finished/Finished'
import './live.css'

function AllLive() {
  return (
    <>
      <div className='All-live-wrapper'>
        {data.map((item) => {
          return <Live key={item.id} content={item}/>
        })}
        <ToTopButton/>
      </div>
    </>
  )
}

export default AllLive