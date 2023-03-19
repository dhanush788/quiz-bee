import './App.css';
import React from "react";
// import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Video from './pages/video';
import Quiz from './pages/quiz';
import { HashRouter } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
function App() {



  return (
    <div>
      <HashRouter>
    <Navbar/>

  
    {/* <BrowserRouter> */}
    <Routes>
	 	<Route exact path='/' element={<Home />}/>
     <Route path='/index' element={<Home />} />
     <Route path='/quiz' element={<Quiz />} />
     <Route path='/video' element={<Video />} />
     </Routes>
     {/* </BrowserRouter> */}
	 
  <Footer />
      </HashRouter>
  </div>
        

);
    

}

export default App;


