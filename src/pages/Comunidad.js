import React from 'react';
import '../estilocuadro.css'
import Footer from './Footer'
  
const Comunidad =() => {
  return (
    
    
    <body>
      
    <div className="Contenedor1">
      <h1 className="Back" align="center">Comunidad</h1>
      
      <center>
      <a href="https://www.facebook.com/AficionadosaltejoColombiano/?ref=page_internal"><img className="qrImage" src="https://i.ibb.co/3N2ttKq/flowcode.png" width="400" height="400"  alt="flowcode" border="0"></img></a>
      
      </center>
      <center>
      <i className="fa-solid fa-arrow-up"></i>
      </center>
      <br></br>
      <div className=".col-md-5 .col-12">
      <h1 className="BajoQR" align='center'>!Escanea el QR o tocalo para unirte a la comunidad más grande de Tejo!</h1>
      </div>
    </div>
    
    <Footer/>
   
    </body>
    
    
		
    
  );
  
};
  
export default Comunidad;