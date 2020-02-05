import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css'
import RegisterStepperPatient from './StepperPatient';

class RegisterPatient extends Component {
    render() {
        return (
            <div className="regis">
                <div className="compte-patient">
                    <h3 className="text-comp">Crée mon compte</h3>
                    <div className="cree">
                        <p>Créer mon compte pour consulter un patient en toute sécurité 24h/24 et 7j/7</p>
                        <div>
                            <p>1- Je m'inscris</p>
                            <p>2- Je renseigne mes informations</p>
                            <p>3- Je consulte</p>
                        </div>
                    </div>
                    <p>J'ai déjà un compte</p>
                </div>
                <div className="key">
                    <RegisterStepperPatient />
                </div>

            </div>
        )
    }
}
export default RegisterPatient