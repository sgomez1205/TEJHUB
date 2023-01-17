import React from 'react';
import '../estilocuadro.css'
import Footer from './Footer'
import './Sobre_nosotros.css'
  
const Sobre_nosotros =() => {
  return (
    <div className="child-page-listing">

    <h2 className="Back" align="center">Sobre Nosotros - Team </h2>
  
    <div className="grid-container">
  
      <article id="3685" className="location-listing">
  
        <a className="location-title" href="https://www.instagram.com/sebastian.gomez31/" align="center">Sebastián Gómez Valencia <br></br><br></br> Team Leader and Front-End Developer</a>
  
        <div className="location-image1">
          <a href="https://www.instagram.com/sebastian.gomez31/">
              <img className="Gal" width="300" height="100" src="https://i.ibb.co/Ws7x3k4/GOMEZ-SEBASTIAN.jpg" alt="san francisco"></img>       </a>
        </div>
        
  
      </article>
  
      <article id="3688" className="location-listing">
  
        <a className="location-title" href="https://www.instagram.com/willian_ch1/" align="center">
        Willian  Chapid <br></br><br></br> Member, Backend Developer and<br></br> Quality Testing</a>
  
        <div className="location-image">
          <a href="https://www.instagram.com/willian_ch1/" >
              <img className="Gal" width="300" height="100" src="https://i.ibb.co/dbN1xC3/Image1.jpg" alt="london"></img>     </a>
  
        </div>
  
      </article>
  
      <article id="3691" className="location-listing">
  
        <a className="location-title" href="https://www.instagram.com/miguel.a.nivia/" align="center">
        Miguel Angel Nivia <br></br><br></br> Member and Organization Leader <br></br>Backend Developer             </a>
  
        <div className="location-image">
          <a href="https://www.instagram.com/miguel.a.nivia/">
              <img className="Gal" width="300" height="100" src="https://i.ibb.co/y07Dt1M/Image2.jpg" alt="new york"></img>     </a>
  
        </div>
  
      </article>
  
      
    </div>
    <Footer/>
    
  </div>
    
    
  );
  
};
  
export default Sobre_nosotros;