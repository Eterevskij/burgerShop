import React, { useEffect } from 'react';
import './App.css';

import Header from './Components/common/Header';
import MainScreen from './Components/mainScreen/MainScreen';
import { Route } from 'react-router-dom';
import FoodMenu from './Components/foodMenu/FoodMenuContainer';
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
      {/* <Route path='/menu' component={Cart}/>  */}


    </div>
  );
}

export default App;
