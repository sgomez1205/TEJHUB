import React from 'react';
import '../estilocuadro.css'
import Footer from './Footer'
  
const Sobre_tejo =() => {
  return (
    
    
    <body>
    <div className="Contenedor1">
      <h1 className="Back" align="center">TEJO?</h1>
      <p className="Texto" align="justify">Los orígenes del juego de tejo se remonta hace más de 500 años en Turmequé, Boyacá. Allí se encontraban los muiscas, 
        quienes fueron los precursores de este juego. No cualquier persona podía practicarlo, lo jugaban los caciques, 
        la “gente importante” del pueblo, la gente de alto Turmequé. De allí viene la expresión “de alto turmequé”, que muy bien la describe 
        Andrés Ospina en su Bogotálogo, como alguien o algo “de categoría prominente o clase superior”. Asimismo cuando alguien invita a una 
        partida de turmequé, 
        hace referencia a una partida de tejo; sin embargo y apelando a los 
        muchos nombres que el pueblo le ha conferido al deporte nacional, también se le llama bolo aéreo o juego explosivo. <br></br><br></br>

        El “tejo” representa tanto el nombre del juego, como el disco metálico 
        y pesado que se lanza durante el juego. Una singularidad de este objeto, es que hoy en día está hecho de acero, 
        pero cuentan que en su origen, los muiscas lo hacían de oro ya que este disco dorado y reluciente, 
        simbolizaba el sol, representaba uno de sus dioses, una figura fundamental para ellos. Asimismo, 
        hacen una veneración al sol ya que, al lanzar el tejo, este hace el mismo movimiento que el sol recorre, 
        nace en el oriente y se oculta en el occidente, es el mismo movimiento parabólico.</p>
      
        
				<iframe className="Video1" width="560" height="315"  src="https://www.youtube.com/embed/PJcuV748Mao" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
        <iframe className="Video2" width="560" height="315" src="https://www.youtube.com/embed/Lg0PgqNVqTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        
    </div>
    <Footer/>
    </body>
    
		
    
  );
  
};
  
export default Sobre_tejo;