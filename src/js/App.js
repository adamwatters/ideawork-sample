import React from 'react'
import Nav from './Nav';
import Carousel from './Carousel';
import carouselItems from './carouselItems';

const App = () => {
  return (
    <span>
      <Nav />
      <Carousel carouselItems={carouselItems}/>
    </span>
  )
}

export default App;