import React from "react";
import plusIcon from '../../icons/add.png';
import minusIcon from '../../icons/minus.png';

let FoodMenuItemCard = (props) => {
    debugger;
    return(
        <div className="FoodMenu__itemCard">
            <div className="FoodMenu__itemCard__Photo"><img src={props.burger.photo} alt="" /></div>
            <h3 className="FoodMenu__itemCard__Title">{props.burger.name.name}</h3>
            <ul className="FoodMenu__itemCard__Ingredients">
                <li>булка, котлета (кур.)</li>
                <li>сыр “Чеддер”</li>
                <li>лист салата</li>
            </ul>
            <span className="FoodMenu__itemCard__Order">
                <p className="FoodMenu__itemCard__Order__price">{props.burger.price} р</p>

                <span className="FoodMenu__itemCard__Order__ChangeCount">
                    <span onClick={() => props.removeItem(props.id)} className="FoodMenu__itemCard__Order__Minus"><img src={minusIcon} alt="minus" /></span>
                    {props.findItemInCart(props.cart, props.id) !== -1 ? <p>{props.cart[props.findItemInCart(props.cart, props.id)].count}</p> : <p>0</p>} 
                    <span onClick={() => props.addItem(props.id)} className="FoodMenu__itemCard__Order__Plus"><img src={plusIcon} alt="plus" /></span>
                </span>
            </span>
</div>
    )
}


export default FoodMenuItemCard;
