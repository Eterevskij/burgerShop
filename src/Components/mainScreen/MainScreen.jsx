import React from 'react';

import BurgerCardContainer from './BurgerCardContainer';
import BurgerSliderContainer from './BurgerSliderContainer';


let MainScreen = (props) => {

  return (
    <div className="mainScreen">
      <div className="container">
        <BurgerCardContainer />

        <div className="sliderWrapper">
          <BurgerSliderContainer />
        </div>

      </div>
    </div>
  )
}


export default MainScreen;


