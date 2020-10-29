import React from 'react';

import BurgerCardContainer from './BurgerCardContainer';
import BurgerSliderContainer from './BurgerSliderContainer';


let MainScreen = (props) => {  

let json = [
{name : {name: "Chicago", color: "#C9F910"}, ingredients : [ ["булка, котлета (кур.)"], [`сыр "Чеддер"`], ["лист салата"],  [`соус "красный"`], [`соус "белый"`], ["лук реп. , помидор"], ["огурец"] ], price: 125, photo:"https://i.ibb.co/h9JPGdT/1.png"},
{name : {name: "Blueberry", color: "#5796ff"}, ingredients : [ ["булка, котлета (кур.)"], [`сыр "Чеддер" x2`], ['салат "Coleslaw"'],  [`соус "Blueberry" (джем)`] ], price: 190, photo:"https://i.ibb.co/84ywx1D/nh9-Qffg-CZuo-removebg-preview.png"},
{name : {name: "Rostovskiy", color: "#f41d1d"}, ingredients : [ ["булка, котлета (кур.) x2"], [`сыр "Чеддер" x2`], [`соус "красный" x2`], [`соус "белый"`], ['помидор x2, огурец x2'],['лук репчатый 2'],  [`бекон x2`] ], price: 190, photo:"https://i.ibb.co/pKRp0yB/OABR1-Jty-VBI-removebg-preview.png"},
]

    return(
      <div className="mainScreen">
      <div className="container">
      <BurgerCardContainer burgers={json}/>

        <div className="sliderWrapper">
        <BurgerSliderContainer burgers={json}/>
        </div>

      </div>
    </div>
    )
}

export default MainScreen;