import React, { Component } from 'react'
import './Compte.css'


 class Compte extends Component {
    render() {
        return (
            <div className="identifi">
                <div className="text-compte">
                    <p className="personnel">Votre compte est personnel </p>
                    <p className="partager">Ne partager pas vos identifiant</p>
                </div>
                <div className="login">
                    <h2 className="connecter">Me connecter</h2>
                    <p className="adress">Adresse e-mail</p>
                    <input className="inp"/>
                    <p className="adress">Mot de passe</p>
                    <input className="inp"/>
                    <p className="mot-pass">Mot de passe oublié</p>
                    <button className="btn">Continuer</button>
                    <p className="encore">vous n'avez pas encore de compte ?</p>
                    <p className="cree">Créez un compte ici</p>
                </div>
                
            </div>
        )
    }
}
export default Compte