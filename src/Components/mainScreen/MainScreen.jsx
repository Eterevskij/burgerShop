import React from 'react';
import { useState, useEffect } from 'react';

import BurgerCardContainer from './BurgerCardContainer';
import BurgerSliderContainer from './BurgerSliderContainer';
import BurgerMobileSliderContainer from './BurgerMobileSliderContainer';





function getWindowDimensions() {
  const { innerWidth: width} = window;
  return {
    width
  };
}

 function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}






let MainScreen = (props) => {

  const { width } = useWindowDimensions();

  
  if( width > 700){

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

    }else {

      return(
        <div className="mainScreen">
        <div className="container">
          
          <BurgerMobileSliderContainer />

        </div>
      </div>
      )

    }
} 


export default MainScreen;


