import React, { Component } from 'react';
import './patientDossier.css'
import { getPatientId} from '../../actions/medicinActions'
import { connect } from "react-redux";
import { Tab, Tabs ,Button} from 'react-bootstrap'


class PatientDossier extends Component {
  componentWillMount() {
    console.log(this.props.match.params.CIN)
    this.props.getPatientId(this.props.match.params.CIN)
    // setTimeout(() => {
    //   this.props.getPatient(this.props.dossier.dossiermedical.Id_Patient)
    // }, 1000)
    // console.log(this.props.dossier.dossiermedical.Id_Patient)

  }
  
  render() {
    return (
      <section className="DossierMEdical">
        <div className="containerPatient">
        
                  <h6>Nom :{this.props.onePatient.OnePatient.Nom}</h6>
                  <h6>Prenom :{this.props.onePatient.OnePatient.Prenom}</h6>
                  <h6>Date de naissance :{this.props.onePatient.OnePatient.DateNaiss}</h6>
                  <h6>Adresse :{this.props.onePatient.OnePatient.Adress}</h6>
                  <h6>Numero Telephone :{this.props.onePatient.OnePatient.Telephone}</h6>
                  <h3>Dossier médical</h3> 
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
           
            <Tab eventKey={1} title="Médicaments" className="tab">
              <h6>Liste des medicaments</h6>
              <input type ="text" value ="" name="medicament"/>
              <Button variant="outline-primary">Ajouter</Button>{' '}
            </Tab>
            <Tab eventKey={2} title="Maladies" className="tab">
              <h6>Liste des maladies</h6>
              <input type ="text" value ="" name="maladie"/>


            </Tab>
            <Tab eventKey={3} title="Analyses" className="tab">
              <h6>Liste des Analyses</h6>
              <input type ="text" value ="" name="analyse"/>


            </Tab>
          </Tabs>
        </div>
      </section>
    );
  }
}
const MapStateToProps = state => {
  return {
    dossier: state.dossierPatient,
    onePatient: state.medecin
  };
}
export default connect(MapStateToProps, { getPatientId})(PatientDossier);
