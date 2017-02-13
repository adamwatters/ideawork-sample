import React from 'react'
import Nav from './Nav';
import Carousel from './Carousel';
import carouselItems from './carouselItems';
import Grid from './Grid';
import articles from './articles';

const breakPoints = [0, 700];

const App = () => {
  return (
    <span>
      <Nav />
      <Carousel carouselItems={carouselItems}/>
      <Grid articles={articles} breakPoints={breakPoints} />
    </span>
  )
}

export default App;