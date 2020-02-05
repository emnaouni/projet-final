import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,Nav}from "react-bootstrap";
import logo from '../../images/logoSant.png'
import './navBar.css'

const Nabar = () => { 
  
   return (
     <Navbar className="primary" variant="dark">
      <Nav.Link href="#home">Vous etes un medecin?</Nav.Link>
     <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
     <Nav.Link href="#home">Mon compte</Nav.Link> 
   
      </Navbar>
    

     
    );
}

export default Nabar;

