import React, { Component } from 'react';
import {connect} from "react-redux"
import {getmedecins} from "../../actions/medicinActions"

export class Medecin extends Component {
    componentDidMount() {
        this.props.getmedecins(); 
         console.log('hiii medecin')
    }
    
    render() {
        return (
            <div className="DoctorsList"> {  console.log('hiii')}
               { this.props.alldoctors.medecins.map(el=>(
                    
                   <div>
                       <p>nom</p>{el.Nom}
                       <p>Prenom</p>{el.Prenom}
                       <p>Email</p> {el.Email}
                   </div>
               )
                )}
            </div>
        );
    }
}

const MapStateToProps= state=>{
    return {
        alldoctors: state.medecinReducer
      };
}
export default connect(MapStateToProps,{getmedecins})(Medecin);
