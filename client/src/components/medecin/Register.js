import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import {connect} from "react-redux"
import {removeAlert,setAlert} from '../../actions/AlertActions'
 class Register extends Component {
     
    render() {
        return (
            <div className="regis">
                <div className="compte">
                    <h3>Crée mon compte</h3>
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
                    <h2 className="tout">Tout d'abord, quelle est votre adresse e-mail ?</h2>
                    <input className="inp" placeholder="EX:ex@gmail.com"/>

                    <p className="accept">J'accepte les conditions générales d'utilisation</p>
                    <p className="souhait">Je souhaite recevoir les conseils de santé par e-mail</p>
                    <button className="confirm">Confirmer</button>
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