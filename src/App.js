import './App.css';
import React from "react";
import Navbar from "./navbar";
import Card from './card';

function App() {



  return (
    <div>
      <Navbar />
      {/* make changes after sometime make participant details visible here.*/}
      <h1>Image here</h1> 
      <p>Name of student</p>
      <div className="maze">
        <Card />
      </div>
    </div>
    
    
  );
}

export default App;

