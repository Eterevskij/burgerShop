import React, { useEffect } from 'react';
import './App.css';

import Header from './Components/common/Header';
import MainScreen from './Components/mainScreen/MainScreen';
import FoodMenu from './Components/foodMenu/FoodMenuContainer';
import Cart from './Components/cart/cartContainer';
import InDev from './Components/common/InDev';

import { Route } from 'react-router-dom';
import {getBurgers} from './redux/burgers-reducer';


function App(props) {

  React.useEffect(() => {
    console.log(getBurgers());
  }, [])

  return (
    <div className="App">

      <Header />
      <Route path='/' exact  component={MainScreen}/>
      <Route path='/menu' component={FoodMenu}/>
      <Route path='/cart' component={Cart}/> 
      <Route path='/inDev' component={InDev}/> 


    </div>
  );
}

export default App;
