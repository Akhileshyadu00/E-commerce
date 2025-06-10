import React from 'react'
import Carousel from '../Components/Carousel'
import Category from '../Components/Category'
import BestSellers from '../Components/BestSellers'


function Home() {
  return (
    <div>
      <Carousel />
      <Category />
      <BestSellers />
    </div>
  )
}

export default Home
