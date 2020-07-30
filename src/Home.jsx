import React from 'react'
import web from "../src/images/a1.jpg"
import Common from './Common';

const Home = () => {
  return (
    <>
      <Common name='Grow Your bussiness with' imgsrc={web} visit='/service' btname="Get Started"/>
    </>
  )
}

export default Home;