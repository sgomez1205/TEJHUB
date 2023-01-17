
import './login.css'
import React from "react";


function Login(){
  return(<div className='Login'>

    
    
    <form align='center' >
    <h2 className='H2'>Suscribete</h2>
      <label>
        <i className="fa-solid fa-user"></i>
        <input placeholder="Ingrese su nombre"type="text" id="Nombre" required></input>
      </label>

      <label>
        <i className="fa-solid fa-user"></i>
        <input placeholder="Ingrese su apellido"type="text" id="Apellido" required></input>
      </label>

      <label>
        <i className="fa-solid fa-envelope"></i>
        <input placeholder="Correo electronico "type="text" id="Correo" required></input>
      </label>
      
      <label>
        <i className="fa-solid fa-phone"></i>
        <input placeholder="Número de Celular" type="tel" id="Celular" required></input>
      </label>
      
      
      <button id="button">Suscribete</button>
    </form>
  </div>
  
  )
  
}

export default Login