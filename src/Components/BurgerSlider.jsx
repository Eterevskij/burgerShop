import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import ArrowPrev from '../icons/arrowPrev.png';
import ArrowNext from '../icons/arrowNext.png';


let ArrowBTN = (props) => {
  const { className, style, onClick } = props;
debugger;
  return(
    <div
      className={className}
      style={{ ...style, display: "block",  background:`url(${className.includes("slick-prev") ? ArrowPrev : ArrowNext}) no-repeat` }}
      onClick={onClick}
    />
  )
}

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
    updateCount: 0
  };


  render() {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowBTN />,
      nextArrow: <ArrowBTN />
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://i.ibb.co/h9JPGdT/1.png" alt=""/>
          </div>
          <div>
            2
          </div>
          <div>
            3
          </div>
          <div>
            4
          </div>
        </Slider>
      </div>
    );

  }
}