import React from "react"
import Slider from "react-slick"
import "./ImageAndTextSlider.css"
import ToggleText from "./ToggleText"

const ImageAndTextSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    arrows: false,
  }

  return (
    <div className='new-slider-container'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className='new-slide'>
            <div className='img-title'>
              <img src={slide.image} alt='' />
              <h3 className='title-name'>{slide.title}</h3>
            </div>
            <div className='new-slide-text'>
              <ToggleText slidesc={slide.description} />
            </div>
          </div>
        ))}
      </Slider>
      <ul className='new-slider-dots'></ul>
    </div>
  )
}

export default ImageAndTextSlider
