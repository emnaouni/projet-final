import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import {connect} from "react-redux"
import {removeAlert,setAlert} from '../../actions/AlertActions'
import RegisterStepper from './Stepper';
 class Register extends Component {
     
    render() {
        return (
            <div className="regis">
                <div className="compte">
                    <h3 className="text-comp">Crée mon compte</h3>
                    <div className="cree">
                        <p>Créer mon compte pour consulter un médecin en toute sécurité 24h/24 et 7j/7</p>
                        <div>
                            <p>1- Je m'inscris</p>
                            <p>2- Je renseigne mes informations</p>
                            <p>3- Je consulte</p>
                        </div>
                    </div>
                    <p>J'ai déjà un compte</p>
                </div>
                <div className="key">
                    <RegisterStepper />
                </div>

            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        setAlert: alert=>dispatch(setAlert(alert)),
        clearAlert: id=>dispatch(removeAlert(id))
    }
}
export default connect(null,mapDispatchToProps)(Register)