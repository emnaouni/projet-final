import React, { Component } from 'react';
import { connect } from "react-redux"
import { getmedecins } from "../../actions/medicinActions"
import './medecin.css'
import Calendrier from './Calendrier';
class Medecin extends Component {


    componentDidMount() {
        this.props.getmedecins();
        console.log('hiii medecin')
    }

    render() {
        return (
            <div className="DoctorsList"> {console.log('hiii')}
            
                {this.props.alldoctors.medecins.map(el => (
                    <div className="doctorCard">
                        
                        <div className="doctorItem">
                        <img className="img-doc" src="https://santebd.org/wp-content/uploads/2018/12/Docteur.png" alt="new"/>
                            <h2 >{el.Nom} {el.Prenom}</h2>
                            <p className="specialit">{el.Role} {el.Specialite}</p>
                            <p className="mail">Email:{el.Email}</p>
                            <p>{el.AdresseCabinet}</p>
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
        alldoctors: state.medecinReducer
    };
}
export default connect(MapStateToProps, { getmedecins })(Medecin);
