import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Routes/Home';
import DentistDetail from './Routes/DentistDetail';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { GlobalContext } from './Components/utils/GlobalContext';

function App() {
  return (
      <div className="App">
      <Router>
          <Navbar/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dentist/:id" element={<DentistDetail />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer/>
      </Router>
      </div>
  );
}

export default App;
