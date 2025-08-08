import React from 'react'
import HoroSection from '../components/HoroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Team from '../components/Team'

const Home = () => {
  return (
    <>
      <HoroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <WhoAreWe/>
      <Team/>
    </>
  )
}

export default Home