import React from 'react';

import logo from '../../header/logo.png';
import Menu from './Menu';



let Header = () => {
    return(
        <header className="header">
        <div className="container">

          <a className="header__logo" href="#"><img src={logo} alt="No" /></a>
          <span>
              
            <Menu />
            
          </span>

        </div>
      </header>
    )
}

export default Header;