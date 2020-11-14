import React from 'react';
import { useState, useEffect, useRef } from 'react';


import cartLogo from '../../header/shopping-bag1.png';
import menuLogo from '.././../icons/menu.png';
import { NavLink } from 'react-router-dom';



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




let Menu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const { width } = useWindowDimensions();
  const sortRef = React.useRef();

  const hideMenu = function () {
    setMenuVisible(false)
  };

  const handleOutsildClick = (e) => {
    debugger;
    if(!(e.path.includes(sortRef.current))){
       setMenuVisible(false)
        };
       
  }

  React.useEffect(() => {
    document.addEventListener('click', handleOutsildClick)
  },[])

  return (

    <span className="header__menu" ref={sortRef}>

      { (width > 700 || isMenuVisible) && <ul className="header__menu__list">


        {width < 700 ? (<li>
          <NavLink to="/cart" onClick={hideMenu}>
            Корзина
          </NavLink>
        </li>) : ""
        }

        <li>
          <NavLink to="/menu" onClick={hideMenu}>Меню</NavLink>
        </li>


        <li>
          <NavLink to="/inDev" onClick={hideMenu}>Ресторан</NavLink>
        </li>

        <li>
          <NavLink to="/inDev" onClick={hideMenu}>Доставка</NavLink>
        </li>

        <li>
          <NavLink to="/inDev" onClick={hideMenu}>О нас</NavLink>
        </li>


      </ul>}

      {(width > 700) ? 
      <span className="cart">
        <NavLink to="/cart">
          <img className="cart_img" src={cartLogo} alt="" />
        </NavLink>
      </span>
       : <span className="menuLogo" onClick={() => setMenuVisible(!isMenuVisible)}><img src={menuLogo} alt=""/></span>}

    </span>

  )
}

export default Menu;