import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PEPE from './pages/TejHub';
import Noticias from './pages/noticias';

import Comunidad from './pages/Comunidad';
import Tejo from './pages/Sobre_Tejo';
import Galeria from './pages/Galeria';
import SobreNosotros from './pages/Sobre_nosotros'
import Login from './pages/login'
import PageNotFound from './pages/PageNotFound';

  
function App() {
  return (
    <div className="">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PEPE/>}></Route>
        <Route path="/noticias" element={<Noticias/>}></Route>
        <Route path="/Comunidad" element={<Comunidad/>}></Route>
        <Route path="/Sobre_Tejo" element={<Tejo/>}></Route>
        <Route path="/Galeria" element={<Galeria/>}></Route>
        <Route path="/Sobre_nosotros" element={<SobreNosotros/>}></Route>
        <Route path="/signin" element={<Login/>}></Route>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}
  
export default App;