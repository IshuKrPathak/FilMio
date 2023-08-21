import React from 'react'
import "./Home.scss"
import HeroBanner from './heroBanner/HeroBanner'
import Trending from './trending/Trending.jsx'
 

const Home = () => {
  return (
    <div className='homepage'>
        <HeroBanner/>
        <Trending/>
        <div style={{height:1000}}>

        </div>
    </div>
  )
}

export default Home