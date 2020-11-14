import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import ArrowPrev from '../../icons/arrowPrev.png';
import ArrowNext from '../../icons/arrowNext.png';




let ArrowBTNContainer = (props) => {

  return(
 <ArrowBTN {...props}/>
  )
}

let ArrowBTN = (props) => {
  const { className, style, onClick, currentSlide, slideCount } = props;

  let isActive = !((currentSlide === 0 && className.includes("slick-prev")) || ( slideCount - 1 === currentSlide) && className.includes("slick-next") );

debugger;
  return(
    <div
      className={className}
      style={{ ...style, display: "block",  background:`url(${className.includes("slick-prev") ? ArrowPrev : ArrowNext}) no-repeat`, opacity:isActive ? 1 : 0.3 }}
      onClick={isActive ? onClick : ""}
    />
  )
}

export default class SlickGoTo extends React.Component {

  render() {
 

    const settings = {
      arrows: true,
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowBTNContainer />,
      nextArrow: <ArrowBTNContainer />,
      beforeChange: (current, next) => {this.props.changeCurrentItem(next)} ,
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.burgers.map(item=>{

            return(
              <div>
                <img src={item.photo} alt={item.name.name}/>
            </div>
            )
          })
          }

        </Slider>
      </div>
    );

  }
}