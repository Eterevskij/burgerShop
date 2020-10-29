import React from 'react';
import './App.css';

import Header from './Components/common/Header';
import MainScreen from './Components/mainScreen/MainScreen';


function App(props) {
  return (
    <div className="App">

      <Header />

      <MainScreen store={props.store}/>

    </div>
  );
}

export default App;
