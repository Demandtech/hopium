import React from 'react'
import Hero from '../components/hero/Hero'
import Swap from '../components/swap/Swap'
import Stake from '../components/stake/Stake'
import Hopium from '../components/hopium/Hopium'
import Start from '../components/start/Start'


function home() {
  document.title = 'Home || Hopium'
  return (
    <>
      <Hero />
      <Swap />
      <Stake />
      <Hopium />
      <Start />
    </>
  )
}

export default home