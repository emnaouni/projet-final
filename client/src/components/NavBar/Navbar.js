import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,Nav}from "react-bootstrap";
import logo from '../../images/logoSant.png'
import './navBar.css'
import {Link} from "react-router-dom"


const Nabar = () => { 
  
   return (
     <Navbar className="primary" variant="dark">
       <Link to={'/Login/medecin'}> Vous êtes un medecin?  </Link> 
     <Navbar.Brand href="#home"><Link to={'/'}> <img src={logo} alt="logo"/> </Link> </Navbar.Brand>
     <Nav.Link href="#home"><Link to={'/Login/patient'}> Mon compte </Link> </Nav.Link> 
   
      </Navbar>
    

     
    );
}

export default Nabar;

