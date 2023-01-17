import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
  
export const Nav = styled.nav`
  background-color: #010101;
  height: 100px;
  display: flex;
 
  align:center;
  padding: 0.1rem calc((100vw - 1000px) / 2);
  z-index: 12;
  @media only screen and (min-width: 1024px) {
    .container header .header-nav-area #nav_container  {
      display:flex;
    }
  }
  /* Third Nav */
  /* justify-content: flex-start; */
`;
  
export const NavLink = styled(Link)`
  color: white;
  display: flex;
  margin-left: 0;
  text-decoration:none;
  padding-right: 20px;
  padding-left:10px;
  align-content:center;
  align-items: center;
  align-text: center;
  height: 100%;
  
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: black;
  }
  @media only screen and (min-width: 1024px) {
    .container header .header-nav-area #nav_container  {
      display:flex;
    }
  }
`;

  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 200px;
  /* Second Nav */
  /* margin-right: 22px; */
  /* Third Nav */
  /* width: 100vw;
  white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 40px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
  
export const NavBtnLink = styled(Link)`
color: white;
  display: flex;
  
  text-decoration:none;
  padding:10px;
  align-content:center;
  align-items: center;
  align-text: center;
  height: 100%;
  margin:90px;
  
  cursor: pointer;
  &:hover {
    transition: all 0.4s ease-in-out;
    background: #fff;
    color: black;
  }
`;