import React from 'react';

import store from '../../redux/redux-store';
import add from '../../icons/add.png';
import remove from '../../icons/minus.png';

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


    <div className={`burgerCard__add ${(props.findItemInCart(props.cart, props.currentItem)!==-1) ? "active" : ""}`}>
      <span className="burgerCard__add__minus" onClick={() => props.removeBurger(props.currentItem)}><img src={remove} alt=""/></span> 
      
     <span className="burgerCard__add__counter">{props.findItemInCart(props.cart, props.currentItem) !== -1 ? <p>{props.cart[props.findItemInCart(props.cart, props.currentItem)].count}</p> : <p>1</p>}</span>

      <span className="burgerCard__add__plus" onClick={() => props.addBurger(props.currentItem)}><img src={add} alt=""/></span>
      </div>
    </div>

    )

}


export default (BurgerCard);