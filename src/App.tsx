import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";

import Header from './components/header';
import Body from './components/body';


function App() {
 
    return ( 
      <div className="flex  flex-col items-center justify-center  py-4 w-screen ">
      <Navbar />
      <Header />
      <Body />
    
      </div>
    );
  
}

export default App;
