import React from 'react';
import './App.css';
import logo from './header/logo.png';
import cartLogo from './header/shopping-bag1.png';
import add from './icons/add.png';
import BurgerSlider from './Components/BurgerSlider';

function App() {
  return (
    <div className="App">

      <header className="header">
        <div className="container">

          <a className="header__logo" href="#"><img src={logo} alt="No" /></a>
          <span>

            <span className="header__menu">

              <ul className="header__menu__list">


                <li>
                  <a href="#">Меню</a>
                </li>


                <li>
                  <a href="#">Ресторан</a>
                </li>

                <li>
                  <a href="#">Доставка</a>
                </li>

                <li>
                  <a href="#">О нас</a>
                </li>

              </ul>

              <span className="cart">
                <img className="cart_img" src={cartLogo} alt="" />
              </span>

            </span>




          </span>

        </div>
      </header>

      <div className="mainScreen">
        <div className="container">

          <div className="burgerCard">
            <p className="burgerCard__title">Chicago</p>

               <ul className="composition__list">
                 <li>булка, котлета (кур.)</li>
                 <li>сыр "Чеддер"</li>
                 <li>лист салата</li>
                 <li>соус "красный"</li>
                 <li>соус "белый"</li>
                 <li>лук реп. , помидор</li>
                 <li>огурец</li>
               </ul>

               <p className="burgerCard__price">125 р.</p>

                <a className="burgerCard__add" href="#"><img src={add} alt=""/></a>

          </div>

<div className="sliderWrapper">
        <BurgerSlider />
        </div>

        </div>
      </div>
		

    </div>
  );
}

export default App;
