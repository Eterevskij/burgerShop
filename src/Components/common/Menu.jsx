import React from 'react';

import cartLogo from '../../header/shopping-bag1.png';



let Menu = () => {
return(

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

)
}

export default Menu;