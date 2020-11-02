import React from 'react';
import './App.css';

import Header from './Components/common/Header';
import MainScreen from './Components/mainScreen/MainScreen';
import { Route } from 'react-router-dom';
import FoodMenu from './Components/foodMenu/FoodMenu';


function App(props) {
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
