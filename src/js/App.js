import React from 'react'
import Nav from './Nav';
import Carousel from './Carousel';
import carouselItems from './carouselItems';
import Grid from './Grid';
import articles from './articles';
import Footer from './Footer';

const breakPoints = [0, 700];

const App = () => {
  return (
    <span>
      <Nav />
      <Carousel carouselItems={carouselItems}/>
      <Grid articles={articles} breakPoints={breakPoints} />
      <Footer />
    </span>
  )
}

export default App;