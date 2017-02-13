import React from 'react';
import Slider from 'react-slick'

const CarouselItem = ({ carouselItem }) => {
  const { imgURL, title, date, description } = carouselItem
  const styles = {
    backgroundImage: `url(${imgURL})`,
    color: 'white',
  }
  return (
    <div style={styles} className='carousel-item'>
      <div className='carousel-item-content'>
        <h2>{title}</h2>
        <div>{date}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

const Carousel = ({ carouselItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      {carouselItems.map((item, id) => <div key={id}><CarouselItem carouselItem={item} /></div>)}
    </Slider>
  );
};

export default Carousel;