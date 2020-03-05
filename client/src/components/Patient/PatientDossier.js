import React, { Component } from 'react';
import './patientDossier.css'
import { getPatientId} from '../../actions/medicinActions'
import { connect } from "react-redux";
import { Tab, Tabs ,Button} from 'react-bootstrap'
import {getmedicaments} from '../../actions/ListMedicamentActions'
import {getmaladies} from '../../actions/ListMaladiesActions'
import {UpdatDossierMedicament} from '../../actions/dossierMAction'
import Footer from '../footer/Footer';
import Navbar from '../NavBar/Navbar'


class PatientDossier extends Component {
  constructor(props){

    super(props)
     this.state = {
     affiche:false,
     medicament:{},
     analyse:{},
     maladie:{}
  }
  }
  test=() => {
    this.setState({ affiche: !this.state.affiche ,i:0 })
  }

  componentWillMount() {
    console.log(this.props.match.params.CIN)
    this.props.getPatientId(this.props.match.params.CIN)
   this.props.getmedicaments();
   this.props.getmaladies()
 
    // setTimeout(() => {
    //   this.props.getPatient(this.props.dossier.dossiermedical.Id_Patient)
    // }, 1000)
    // console.log(this.props.dossier.dossiermedical.Id_Patient)

  }
Add =(id , medica)=>{
  console.log(id )
  console.log(medica)
 this.props.UpdatDossierMedicament(id ,medica)
}
 
  handleChange=(e)=>{
    this.setState({[e.target.name]:JSON.parse(e.target.value) })
   console.log(e.target);
  }
  render() {
    return (
      <div>
        <Navbar/>
     
      <section id="DossierMEdical">
        
        <div id="containerDossierPatient">
        
                  <h6>Nom :{this.props.onePatient.OnePatient.Nom}</h6>
                  <h6>Prenom :{this.props.onePatient.OnePatient.Prenom}</h6>
                  <h6>Date de naissance :{this.props.onePatient.OnePatient.DateNaiss}</h6>
                  <h6>Adresse :{this.props.onePatient.OnePatient.Adress}</h6>
                  <h6>Numero Telephone :{this.props.onePatient.OnePatient.Telephone}</h6>
                  <h3>Dossier médical</h3> 
          <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
           
            <Tab eventKey={1} title="Médicaments" className="tab">
              <h6>Liste des medicaments</h6>
              {}
              {setTimeout(() => {
      console.log(this.props.dossier.dossiermedical.Id_Medicament)
    }, 2000)}
              {/* <input type ="text" value =""name="medicament"/> */}
              {/*this.props.dossier.dossiermedical.Id_Medicament.map(el=><input type ="text" value ={el.Nom}name="medicament"/> )} */}
              {setTimeout(() => {
      this.props.dossier.dossiermedical.Id_Medicament.map(el=> <h6>hhhhhh</h6>);
    }, 2000)}
              <Button variant="outline-primary btAjouter" onClick={()=>this.test()}>Ajouter</Button>
              {this.state.affiche&&<div className="AjouterBox">
              <div class="box">
                <select onChange={this.handleChange} name="medicament">
                <option selected > medicaments</option>
                {this.props.medicaments.medicaments.map((el, key)=><option key={el.NomMedicament} value={JSON.stringify({Nom:el.NomMedicament, id_med:el._id})}>{el.NomMedicament}</option>)}

                </select>
               
                </div>
                <div className="addbox" >
                        <button className="icon-btn add-btn" onClick={()=>this.Add(this.props.dossier.dossiermedical._id,this.state.medicament)}>
                        <div className="add-icon"></div>
                        <div className="btn-txt">Add</div>
                        </button>
                </div>
                </div>
              }
            </Tab>
            <Tab eventKey={2} title="Maladies" className="tab">
              <h6>Liste des maladies</h6>
              <input type ="text" value ="" name="maladie"/>
              <Button variant="outline-primary btAjouter" onClick="">Ajouter</Button>{' '}



            </Tab>
            <Tab eventKey={3} title="Analyses" className="tab">
              <h6>Liste des Analyses</h6>
              <input type ="text" value ="" name="analyse"/>
              <Button variant="outline-primary btAjouter" onClick="">Ajouter</Button>{' '}
            </Tab>
          </Tabs>
        </div>
      </section>
      <Footer/>

      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    dossier: state.dossierPatient,
    onePatient: state.medecin,
    medicaments:state.listMedicamentsReducer,
    maladies:state.maladie
  };
}
export default connect(MapStateToProps, { getPatientId, getmedicaments,getmaladies,UpdatDossierMedicament})(PatientDossier);
