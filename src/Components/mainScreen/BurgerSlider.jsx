import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from "react-slick";
import ArrowPrev from '../../icons/arrowPrev.png';
import ArrowNext from '../../icons/arrowNext.png';




let ArrowBTNContainer = (props) => {
debugger;
  return(
 <ArrowBTN {...props}/>
  )
}

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

  render() {
  debugger;

    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <ArrowBTNContainer />,
      nextArrow: <ArrowBTNContainer />,
      beforeChange: (current, next) => {this.props.changeCurrentItem(next); console.log(next)} ,

    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.burgers.map(item=>{
            debugger;
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