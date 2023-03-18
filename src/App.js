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
		<Route exact path='/' Component={Home}/>
    <Route path='/index' Component={Home} />
    <Route path='/video' Component={Video} />
    <Route path='/quiz' Component={Quiz} />
	</Routes>
	</Router>
        

);
    

}

export default App;


