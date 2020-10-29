import React from 'react';

import store from '../../redux/redux-store';
import add from '../../icons/add.png';

let BurgerCard = (props) => {
  debugger;


    return(
<div className="burgerCard animate__animated animate__bounce">
<p className="burgerCard__title" style={{color: props.burgers[props.currentItem].name.color }}>{props.burgers[props.currentItem].name.name}</p>

   <ul className="composition__list">
     {
          props.burgers[props.currentItem].ingredients.map( 
            ( item ) => {

                return <li>{item}</li>;
            }
          )

     }
   </ul>

   <p className="burgerCard__price">{props.burgers[props.currentItem].price} р.</p>

    <a className="burgerCard__add" href="#"><img src={add} alt=""/></a>

</div>
    )

}


export default (BurgerCard);