import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import DentistDetail from './Components/DentistDetail';
import Contact from './Components/Contact';
import Favs from './Components/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { GlobalContext } from './Components/utils/GlobalContext';

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;
