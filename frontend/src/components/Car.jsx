import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Servicecard from './Servicecard';

const Car = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green",height:'250px',width:'250px',zIndex:2 }}
            onClick={onClick}
          />
        );
      }
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red",height:'250px',width:'250px' }}
            onClick={onClick}
          />
        );
      }
  return (
    <div>
     
        <Slider {...settings}>
        <Servicecard/>
        <Servicecard/>
        <Servicecard/>
        <Servicecard/>
        <Servicecard/>
        </Slider>
    </div>
  )
}

export default Car