import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from "react-bootstrap";
import logo from '../../images/logoSant.png'
import './navBar.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import {logout} from '../../actions/authActions'
class Nabar extends React.Component {
  userConnectedPatient = () => {
    return (<Navbar className="primary" variant="dark">
      <Navbar.Brand href="#home"><Link to={'/'}> <img src={logo} alt="logo" /> </Link> </Navbar.Brand>
      <Nav> Hello , {this.props.auth.user.Nom} </Nav>
      <Nav.Link href="#home" onClick={()=>this.props.logout()}> Logout </Nav.Link>
    </Navbar>)

  }
  guest = (medecin, patient) => {
    return (<Navbar className="primary" variant="dark">
      <Link to={`/Login/${medecin}`}> Vous êtes un medecin?  </Link>
      <Navbar.Brand href="#home"><Link to={'/'}> <img src={logo} alt="logo" /> </Link> </Navbar.Brand>
      <Nav.Link href="#home"><Link to={`/Login/${patient}`}> Mon compte </Link> </Nav.Link>

    </Navbar>)

  }
  userConnectedMedecin = () => {
    return (<Navbar className="primary" variant="dark">
      <Navbar.Brand href="#home"><Link to={'/'}> <img src={logo} alt="logo" /> </Link> </Navbar.Brand>
      <Nav> Hello , {this.props.auth.user.Nom} </Nav>
      <Nav.Link href="#home" onClick={()=>this.props.logout()}> Logout </Nav.Link>
    </Navbar>)

  }
  render(props) {
    const medecin = "medecin"
    const patient = "patient"
    let content;
     if (this.props.auth.user === null||this.props.auth.user.msg === "no token , access denied") {
      content = <span>{this.guest(medecin, patient)}</span>;
    }
    else if (this.props.auth.user.Role === "patient") {
      content = <span>{this.userConnectedPatient()}</span>;
    } else {
      content = <span>{this.userConnectedMedecin()}</span>;
    }
    return <div>{content}</div>;
    // return (
    //   <div>
    //     {/* {this.props.auth.user.Role ==="medecin"&&this.userConnectedMedecin()}
    //     {this.props.auth.user.Role ==="patient"&&this.userConnectedPatient()}
    //     {this.props.auth.user.Role ===null&&this.guest(medecin,patient)} */}
    //     {if (this.props.auth.user.Role){

    //     }}
    //   </div>
    // );
  }
}




const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps,{logout})(Nabar);

