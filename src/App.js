import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Video from './pages/video';
import Quiz from './pages/quiz';
import Footer from './components/footer';

function App() {



  return (
    <Router>
  <div>
    {/* make changes after sometime make participant details visible here.*/}
    <h1>Image here</h1> 
      <p>Name of student</p>
  </div>
  <Footer />

	<Routes>
		<Route exact path='/' element={<Home />} />
    <Route path='/index' element={<Home/>} />
    <Route path='/video' element={<Video/>} />
    <Route path='/quiz' element={<Quiz/>} />
	</Routes>
	</Router>
        

);
    

}

export default App;


