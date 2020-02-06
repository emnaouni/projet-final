import React, { Component } from 'react';
import { connect } from "react-redux"
import { getmedecins } from "../../actions/medicinActions"
import './medecin.css'
import Calendrier from './Calendrier';
class Medecin extends Component {

    state = {

    }
    componentDidMount() {
        this.props.getmedecins();
        
    }

    render() {
        const Filt=this.props.alldoctors.medecins
        .filter(doc=> doc.Nom===this.props.match.params.Nom.trim() || doc.AdresseCabinet===this.props.match.params.adress.trim()|| doc.Specialite===this.props.match.params.spec.trim())
        
        return (
            <div className="DoctorsList"> 
                { Filt.length>0? Filt.map(el => (
                    <div className="doctorCard">
                        <div className="doctorItem">
                            <h3>{el.Nom} {el.Prenom}</h3>
                           
                            <p className="specialité">specialité: {el.Specialite}</p>
                            
                            <p className="mail">Email:{el.Email}</p>
                            <p className="adresse">Adresse:{el.AdresseCabinet}</p>
                           
                        </div>
                        <div className="Calender">
                            <Calendrier />
                        </div>
                    </div>


                )
                ):this.props.alldoctors.medecins.map(el => (
                    <div className="doctorCard">
                        <div className="doctorItem">
                            <h3>{el.Nom} {el.Prenom}</h3>
                           
                            <p className="specialité">specialité: {el.Specialite}</p>
                            
                            <p className="mail">Email:{el.Email}</p>
                            <p className="adresse">Adresse:{el.AdresseCabinet}</p>
                           
                        </div>
                        <div className="Calender">
                            <Calendrier />
                        </div>
                    </div>


                )
                )}
            </div>
        );
    }

}
const MapStateToProps = state => {
    return {
        alldoctors: state.medecin
    };
}
export default connect(MapStateToProps, { getmedecins })(Medecin);
