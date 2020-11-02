import React from 'react';

import logo from '../../header/logo.png';
import Menu from './Menu';
import {NavLink} from 'react-router-dom';


let Header = () => {
    return(
        <header className="header">
        <div className="container">

  <NavLink to="/" className="header__logo"><img src={logo} alt="No" /></NavLink>
          <span>
              
            <Menu />
            
          </span>

        </div>
      </header>
    )
}

export default Header;