import React from 'react';

import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
        
		      <img src="/logoTejHub.png" width='20%' alt=''></img>
	
          <NavLink to='/' activestyle="true">
            TejHub
          </NavLink>
          <NavLink to='/noticias' activestyle="true">
            Noticias
          </NavLink>
          <NavLink to='/Comunidad' activestyle="true">
            Comunidad
          </NavLink>
          <NavLink to='/Sobre_Tejo' activestyle="true">
            ¿Tejo?
          </NavLink>
          <NavLink to='/Galeria' activestyle="true">
            Galeria
          </NavLink>
          <NavLink to='/Sobre_Nosotros' activestyle="true">
            Nosotros
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Suscribete</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;