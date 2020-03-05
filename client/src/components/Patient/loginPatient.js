import React, { Component } from 'react';
import './loginpatient.css'
import {Link} from "react-router-dom"
import uuid from 'uuid'
import {connect} from 'react-redux'
import {setAlert,removeAlert} from '../../actions/AlertActions'
import {LoginPatient ,ClearError,logout} from '../../actions/authActions'

export class loginPatient extends Component {
    constructor(props) {
        super(props);
        this.state={
            Email: '',
            password: ''
        }
    }
    handelChange =e=>{
        this.setState({[e.target.name]:e.target.value})
    }
    LoginNow=()=>{
       if(this.state.Email === '' || this.state.password === '' ){
         let id = uuid()
         this.props.setAlert('Please Enter ur credentials before!', 'danger', id)
         setTimeout(() => {
           this.props.removeAlert(id)
         }, 5000);
         }
       else{
         this.props.LoginPatient({
           Email:this.state.Email,
           password:this.state.password
         })
        
        
         
       }
     }
     test=() =>{
       this.props.auth.user.Role!==this.props.match.params.role&&this.props.logout()
         
     }
     componentWillReceiveProps(nextProps) {
       if(nextProps.auth.isAuthenticated){
         // nextProps.auth.user.Role!==this.props.match.params.role?this.props.logout():this.props.history.push('/')
         this.props.history.push('/')
       }
       if(nextProps.auth.error ==='Please Register Before!'|| nextProps.auth.error ==='Wrong password'){
           let id = uuid()
           this.props.setAlert(nextProps.auth.error, 'danger', id)
           setTimeout(() => {
               this.props.removeAlert(id) 
               this.props.ClearError()
           }, 5000);
       }
       
     }
    render() {
        return ( <div className="identifier">
                 <div className="container" onclick="onclick">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
            <h2>Please Sign In</h2><input type="email" placeholder="email" name="Email" onChange={this.handelChange}/>
            <input type="password" placeholder="password" name="password" onChange={this.handelChange} />
            {/* <h2>&nbsp;</h2> */}
            {/* <p className="mot-pass">Mot de passe oublié</p> */}
                    <button className="btn bContinuer" onClick={this.LoginNow}>Continuer</button>
                    <p className="encore">vous n'avez pas encore de compte ?</p>
                    {console.log(this.props.match.params.role)}
                    <p id="cree" ><Link id="cree"to={`/Register/patient/patient`}>Créez un compte ici</Link></p>
        </div>
    </div> <div className="text-compt">
           <div className="boxLogin">
           <p className="personLog">Votre compte est personnel </p>
           <p className="personLog">Ne partager pas vos identifiant</p>
       </div>
       </div>
       </div>
        );
    }
}
const mapStateToProps = state => {
    return{
        auth: state.auth
    }
  }

export default connect(mapStateToProps, {setAlert,removeAlert,LoginPatient,ClearError,logout})(loginPatient) ;
