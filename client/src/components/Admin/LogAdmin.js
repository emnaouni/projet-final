import React, { Component } from 'react'
import './Compte.css'
import {Link} from "react-router-dom"
import {connect} from 'react-redux'
import {setAlert,removeAlert} from '../../actions/AlertActions'
import {LoginPatient ,ClearError,logout} from '../../actions/authActions'
import uuid from 'uuid'

 class LogAdmin extends Component {
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
          else(this.props.LoginPatient({
            Email:this.state.Email,
            password:this.state.password
          }))
      }
      test=() =>{
        this.props.auth.user.Role!==this.props.match.params.role&&this.props.logout()
              
      }
      componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated){
          // nextProps.auth.user.Role!==this.props.match.params.role?this.props.logout():this.props.history.push('/')
          this.props.history.push('/Admin')
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
                    <button className="btn" onClick={this.LoginNow}>Continuer</button>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        auth: state.auth
    }
  }
export default connect(mapStateToProps, {setAlert,removeAlert,LoginPatient,ClearError,logout})(LogAdmin);