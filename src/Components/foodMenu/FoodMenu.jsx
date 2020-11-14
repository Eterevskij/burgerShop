import React from 'react';


import sortIconAsc from '../../icons/sortAsc.png';
import sortIconDesc from '../../icons/sortDesc.png';
import FoodMenuItemCard from './FoodMenuItemCard';
import { useState, useEffect } from 'react';
import MobileCategorySlider from './MobileCategorySlider';



    let categories = [
        {name: "Все", type: "all"},
        {name: "Мясные", type: "meaty"},
        {name: "Постные", type: "meatless"},
        {name: "Вегетарианские", type: "vegetarian"},
        
    ]






  

let FoodMenu = (props) => {


    function getWindowDimensions() {
        const { innerWidth: width } = window;
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

      const { innerWidth: width } = window;


    return (


        <div className="FoodMenu">
            <div className="container">
                <h2 class="FoodMenu__BurgersTitle">Бургеры</h2>
            </div>
            <div className="FoodMenu__Modify">
                <div className="FoodMenu__Modify__line" />
                <div className="container">

                    <span className="FoodMenu__Modify__Category">

                    { 
                        (categories.map((item) => {
                            return(
                                <button className={`FoodMenu__Modify__Category__item ${item.type === props.currentCategory ? "active" : ""}`} onClick={() => {props.setFilterByCategory(item.type)}}>{item.name}</button>
                            )
                        }))

                       
                    }
                        

                    </span>

                   {(width > 700) &&
                    <span class="FoodMenu__Modify__Sort">
                        <span onClick={() => props.invertSortDirection() }><img class="FoodMenu__Modify__Sort__Icon" src={props.isDesc ? sortIconDesc : sortIconAsc} alt="Sort" /></span>
                        <p class="FoodMenu__Modify__Sort__Text">По цене</p>
                    </span>
                    }

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