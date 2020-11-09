import React from 'react';

import sortIcon from '../../icons/sort.png';
import FoodMenuItemCard from './FoodMenuItemCard';


let FoodMenu = (props) => {
    debugger;
    return (
        <div className="FoodMenu">
            <div className="container">
                <h2 class="FoodMenu__BurgersTitle">Бургеры</h2>
            </div>
            <div className="FoodMenu__Modify">
                <div className="FoodMenu__Modify__line" />
                <div className="container">

                    <span className="FoodMenu__Modify__Category">

                        <button className="FoodMenu__Modify__Category__item">Все</button>
                        <button className="FoodMenu__Modify__Category__item">Мясные</button>
                        <button className="FoodMenu__Modify__Category__item">Постные</button>
                        <button className="FoodMenu__Modify__Category__item">Вегетарианские</button>

                    </span>

                    <span class="FoodMenu__Modify__Sort">
                        <img class="FoodMenu__Modify__Sort__Icon" src={sortIcon} alt="Sort" />
                        <p class="FoodMenu__Modify__Sort__Text">По цене</p>
                    </span>

                </div>
                <div className="FoodMenu__Modify__line" />
            </div>
            <div className="container">
                <div className="FoodMenu__itemCards">

                {props.burgers.map((item, id) => {

                     return <FoodMenuItemCard burger={item} cart={props.cart} id={id}
                     removeItem={props.removeItem} addItem={props.addItem} findItemInCart={props.findItemInCart}/>
                })
               
                }

                </div>
            </div>
        </div>
    )
}

export default FoodMenu;