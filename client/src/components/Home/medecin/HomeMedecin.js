import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabar from "../../NavBar/Navbar"
import MedecinService from './MedecinService'
import '../home.css'
import PatientRdv from './PatientRdv';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"


export class HomeMedecin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CIN: ""
        }
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
       
            // if(this.state.Nom !== "" && this.state.AdresseCabinet !=="" && this.state.Specialite !== ""){
            //     this.props.history.push(`/search/${this.state.Nom}/${this.state.AdresseCabinet}/${this.state.Specialite}`)
            
    }
    render() {
        return (
          
     <div> 
     <Nabar />


         <div className="HeaderDotor"><div className="IntoDoctor">
            <h1 className="BesoinIntroDoctor">Consultez le dossier medical de votre patient</h1>
            <div className="dossierMedicalPatient"> <input className="Cinpatient" type='text' placeholder="Entrez le CIN du patient" name="CIN"onChange={this.handleChange}/> 
            <Link  to={`/dossiermedical/${this.state.CIN}`}>
            <Button variant="secondary" id="btnmedecin">continuer</Button></Link>
            </div>
        </div>
        <div className="intoGeneralDoctor"></div></div>
        {/* <MedecinService/>
  <PatientRdv/> */}
  <section className="ListeRdv">
      
  </section>
    </div>
        );
    }
}

export default HomeMedecin;
