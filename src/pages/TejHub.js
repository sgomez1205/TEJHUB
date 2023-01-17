
import React from 'react';
import "../estilocuadro.css"
import "../App.css"
import Footer from './Footer'



function PEPE (){
  return (
	
	<>	
	
		<h1 className="Back" align="center">TejHub - Initial Page</h1>
		<div className="Contenedor1">
					<center>
						<iframe width="560" height="315" src="https://www.youtube.com/embed/PJcuV748Mao" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
					</center>
    		</div>
		
		
	<h2 className="Back" align="center">Ultimas Noticias</h2>
	<div className="a">
			
				<div className="contenedor-cards">            
		    		<div className="contenedor-card-item">
		      			<div className="contenedor-card-item-wrapper">
							<a href="https://www.elheraldo.co/barranquilla/atlantico-tiene-mas-de-400-espacios-publicos-para-la-practica-de-deportes-773625">
		        			<img src="https://www.elheraldo.co/sites/default/files/styles/width_1180/public/articulo/2020/11/15/7a-escenarios_deportivos.jpeg?itok=i3ZC-6px" alt=""/>
							</a>
		        				<div className="contenedor-info">
		          					<div className="info">
		            					<p className="titulo">Atlántico tiene más de 400 espacios públicos para la práctica de deportes</p>
		            					<span className="categoria">Deporte</span>
		          					</div>
		          						<div className="fondo"></div>
		        				</div>
		      				</div>
		    			</div>
		    		<div className="contenedor-card-item">
		      			<div className="contenedor-card-item-wrapper">
						  <a href="https://www.elheraldo.co/deportes/el-tejo-quiere-jugarsela-de-local-en-barranquilla-568080">
		        			<img src="https://elpilon.com.co/wp-content/uploads/2021/11/Tejo-Cesar-_opt.jpg" alt=""/>
							</a>
		        				<div className="contenedor-info">
		          					<div className="info">
										<p className="titulo">Liga de Tejo de Santander, Ganadores del Interamericano</p>
										<span className="categoria">Deporte</span>
		          					</div>
		          						<div className="fondo"></div>
		        				</div>
		      			</div>
		    		</div>

		    		
				</div>
		</div>
		


	<Footer>
	</Footer>
	


</>




	

  );
  
};

export default PEPE;