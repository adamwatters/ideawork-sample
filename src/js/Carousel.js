import React from 'react';
import Slider from 'react-slick'

const CarouselItem = ({ carouselItem }) => {
  const { imgURL, title, date, description } = carouselItem
  const styles = {
    backgroundImage: `url(${imgURL})`,
  }
  return (
    <div style={styles} className='carousel-item'>
      <div className='carousel-content-container'>
        <article className='carousel-content'>
          <h1 className='carousel-title'>{title.slice(0,10)}<br/>{title.slice(11)}</h1>
          <div className='carousel-date'>{date}</div>
          <div className='carousel-description'>{description}</div>
        </article>
      </div>
    </div>
  );
}

const Carousel = ({ carouselItems }) => {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    // autoplaySpeed: 5000,
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