import './App.css';
import React from "react";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Video from './pages/video';
import Quiz from './pages/quiz';
import Footer from './components/footer';
import Navbar from './components/navbar';
function App() {



  return (
    <BrowserRouter>
    <Navbar/>

	 <Routes>
	 	<Route exact path='/' Component={Home}/>
     <Route path='/index' Component={Home} />
     <Route path='/video' Component={Video} />
     <Route path='/quiz' Component={Quiz} />
	 </Routes>
  <Footer>
   </Footer>
 
	 </BrowserRouter>
        

);
    

}

export default App;


