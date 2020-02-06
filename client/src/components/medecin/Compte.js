import React, { Component } from 'react'
import './Compte.css'
import {Link} from "react-router-dom"
import Register from './Register'
 class Compte extends Component {
     constructor(props) {
         super(props);
         this.state={
             Email:'',
             password:''
         }
     }
     handelChange =e=>{
         this.setState({[e.target.name]:e.target.value})
     }
     
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
                    <input className="inp" name="Email" type="text" onChange={this.handelChange}/>
                    <p className="adress">Mot de passe</p>
                    <input className="inp" name="password" type="text" onChange={this.handelChange}/>
                    <p className="mot-pass">Mot de passe oublié</p>
                    <button className="btn">Continuer</button>
                    <p className="encore">vous n'avez pas encore de compte ?</p>
                    <p id="cree"><Link to={'/Register'}>Créez un compte ici</Link></p>
                </div>
                
            </div>
        )
    }
}
export default Compte