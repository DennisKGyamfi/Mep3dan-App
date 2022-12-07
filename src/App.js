 import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.css';
 import './App.css';
import { Route, Routes } from "react-router-dom";
import NavBar from './components/Header/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Listing from './Pages/Listing';
import Footer from './components/footer/Footer';


function App() {
  return (
     <div className='App'>
      <NavBar />
      <div className='routeContainer'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
       </div>
  );
}

export default App;
