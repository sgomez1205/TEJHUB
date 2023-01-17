import React from 'react';
import '../estilocuadro.css'
import './Galeria.css'
import Footer from './Footer'
  
const Galeria =() => {
  return (
    
    <div className="child-page-listing">

    <h2 className="Back" align="center">Galería de Fotos</h2>
  
    <div className="grid-container">
  
      <article id="3685" className="location-listing">
        <a className="location-title" href="#">Foto #1</a>
        <div className="location-image">
          <a href="#">
              <img className="Gal" width="300" height="120" src="https://th.bing.com/th/id/R.1b3c8f57cbd8bff4ae030d81f99208ff?rik=ujTIjB94IPw7kA&riu=http%3a%2f%2fimg.over-blog-kiwi.com%2f0%2f69%2f44%2f15%2f201308%2fob_01b70d5a5df7b33515d0da86f92bc7c0_3am10.jpg&ehk=cYnFP2uWDw3YdOehblVkr1vvO7NgBiHvkzBhD85Db%2bs%3d&risl=&pid=ImgRaw&r=0" alt="san francisco"></img>       </a>
  
        </div>
  
      </article>
  
      <article id="3688" className="location-listing">
  
        <a className="location-title" href="#">
        Foto #2           </a>
  
        <div className="location-image">
          <a href="#">
              <img className="Gal" width="300" height="120" src="https://rtvc-assets-radionacional-v2.s3.amazonaws.com/s3fs-public/senalradio/articulo-noticia/galeriaimagen/colp_004910.jpg" alt="london"></img>     </a>
  
        </div>
  
      </article>
  
      <article id="3691" className="location-listing">
  
        <a className="location-title" href="#">
        Foto #3             </a>
  
        <div className="location-image">
          <a href="#">
              <img className="Gal" width="300" height="169" src="https://másqver.com/wp-content/uploads/2017/09/deporte-tejo-horiz.jpg" alt="new york"></img>     </a>
  
        </div>
  
      </article>
  
      <article id="3694" className="location-listing">
  
        <a className="location-title" href="#">
        Foto #4          </a>
  
        <div className="location-image">
          <a href="#">
              <img className="Gal" width="300" height="169" src="https://s3.amazonaws.com/rtvc-assets-senalcolombia.gov.co/s3fs-public/field/image/tejo(1).jpeg" alt="cape town"></img>     </a>
  
        </div>
  
      </article>
  
      <article id="3697" className="location-listing">
  
        <a className="location-title" href="#">
        Foto #5          </a>
  
        <div className="location-image">
          <a href="#">
              <img className="Gal" width="300" height="169" src="https://contenidos.civico.com/wp-content/uploads/2016/04/tejo-contenido.jpg" alt="beijing"></img>       </a>
  
        </div>
  
      </article>
  
      <article id="3700" className="location-listing">
  
        <a className="location-title" href="#">
        Foto #6           </a>
  
        <div className="location-image">
          <a href="#"><img className="Gal" width="300" height="169" src="https://th.bing.com/th/id/OIP.eE9YPHgFA5nXo_atqWpoKAHaE8?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="paris"></img>        
            </a>
        </div>
  
      </article>
  
    </div>
    <Footer/>
    
  </div>
  
    
		
    
  );
  
};
  
export default Galeria;