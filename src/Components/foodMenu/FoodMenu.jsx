import React from 'react';

import sortIcon from '../../icons/sort.png';
import plusIcon from '../../icons/add.png';
import minusIcon from '../../icons/minus.png';



let FoodMenu = (props) => {
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

                    <div className="FoodMenu__itemCard">
                        <div className="FoodMenu__itemCard__Photo"><img src="https://i.ibb.co/h9JPGdT/1.png" alt="" /></div>
                        <h3 className="FoodMenu__itemCard__Title">Chicago</h3>
                        <ul className="FoodMenu__itemCard__Ingredients">
                            <li>булка, котлета (кур.)</li>
                            <li>сыр “Чеддер”</li>
                            <li>лист салата</li>
                        </ul>
                        <span className="FoodMenu__itemCard__Order">
                            <p className="FoodMenu__itemCard__Order__price">125 p</p>

                            <span className="FoodMenu__itemCard__Order__ChangeCount">
                                <button className="FoodMenu__itemCard__Order__Plus"><img src={minusIcon} alt="minus" /></button>
                                <p className="FoodMenu__itemCard__Order__Count">0</p>
                                <button className="FoodMenu__itemCard__Order__Minus"><img src={plusIcon} alt="plus" /></button>
                            </span>
                        </span>
                    </div>

                    <div className="FoodMenu__itemCard">
                        <div className="FoodMenu__itemCard__Photo"><img src="https://i.ibb.co/h9JPGdT/1.png" alt="" /></div>
                        <h3 className="FoodMenu__itemCard__Title">Chicago</h3>
                        <ul className="FoodMenu__itemCard__Ingredients">
                            <li>булка, котлета (кур.)</li>
                            <li>сыр “Чеддер”</li>
                            <li>лист салата</li>
                        </ul>
                        <span className="FoodMenu__itemCard__Order">
                            <p className="FoodMenu__itemCard__Order__price">125 p</p>

                            <span className="FoodMenu__itemCard__Order__ChangeCount">
                                <button className="FoodMenu__itemCard__Order__Plus"><img src={minusIcon} alt="minus" /></button>
                                <p className="FoodMenu__itemCard__Order__Count">0</p>
                                <button className="FoodMenu__itemCard__Order__Minus"><img src={plusIcon} alt="plus" /></button>
                            </span>
                        </span>
                    </div>

                    <div className="FoodMenu__itemCard">
                        <div className="FoodMenu__itemCard__Photo"><img src="https://i.ibb.co/h9JPGdT/1.png" alt="" /></div>
                        <h3 className="FoodMenu__itemCard__Title">Chicago</h3>
                        <ul className="FoodMenu__itemCard__Ingredients">
                            <li>булка, котлета (кур.)</li>
                            <li>сыр “Чеддер”</li>
                            <li>лист салата</li>
                        </ul>
                        <span className="FoodMenu__itemCard__Order">
                            <p className="FoodMenu__itemCard__Order__price">125 p</p>

                            <span className="FoodMenu__itemCard__Order__ChangeCount">
                                <button className="FoodMenu__itemCard__Order__Plus"><img src={minusIcon} alt="minus" /></button>
                                <p className="FoodMenu__itemCard__Order__Count">1</p>
                                <button className="FoodMenu__itemCard__Order__Minus"><img src={plusIcon} alt="plus" /></button>
                            </span>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FoodMenu;