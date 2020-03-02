import React, { Component } from 'react'
import './Compte.css'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { setAlert, removeAlert } from '../../actions/AlertActions'
import { LoginPatient, ClearError, logout , loadUser } from '../../actions/authActions'
import uuid from 'uuid'
import './LogAdmin.css'

class LogAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: '',
      password: ''
    }
  }
  handelChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  LoginNow = () => {
    if (this.state.Email === '' || this.state.password === '') {
      let id = uuid()
      this.props.setAlert('Please Enter ur credentials before!', 'danger', id)
      setTimeout(() => {
        this.props.removeAlert(id)
      }, 5000);
    }
    else (this.props.LoginPatient({
      Email: this.state.Email,
      password: this.state.password
    }))
  }
  test = () => {
    this.props.auth.user.Role !== this.props.match.params.role && this.props.logout()

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      // nextProps.auth.user.Role!==this.props.match.params.role?this.props.logout():this.props.history.push('/')
      this.props.history.push('/Admin')
    }
    if (nextProps.auth.error === 'Please Register Before!' || nextProps.auth.error === 'Wrong password') {
      let id = uuid()
      this.props.setAlert(nextProps.auth.error, 'danger', id)
      setTimeout(() => {
        this.props.removeAlert(id)
        this.props.ClearError()
      }, 5000);
    }

  }
  UNSAFE_componentWillMount (){
    if(this.props.auth.token){
        this.props.loadUser()
    }
        
}
  render() {
    return (
      <div >
        {/* <div className="login">
                    <h2 className="connecter">Me connecter</h2>
                    <p className="adress">Adresse e-mail</p>
                    <input className="inp" name="Email" type="text" onChange={this.handelChange}/>
                    <p className="adress">Mot de passe</p>
                    <input className="inp" name="password" type="text" onChange={this.handelChange}/>
                    <button className="btn" onClick={this.LoginNow}>Continuer</button>
                </div> */}


        <div className="login-wrap">
          <div className="login-html">
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Me connecter</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">S'inscrire</label>
            <div className="login-form">
              <div className="sign-in-htm">
                {/* <div className="group">
                  <label for="user" className="label" name="Email" >Username</label>
                  <input id="user" type="text" className="input" onChange={this.handelChange} />
                </div>
                <div className="group">
                  <label for="pass" className="label">Password</label>
                  <input id="pass" type="password" className="input" data-type="password" onChange={this.handelChange} />
                </div>

                <div className="group">
                  <input type="submit" className="button" value="Sign In" onClick={this.LoginNow} />
                </div> */}
                <div className="group">
                  <label for="user" className="label" name="Email" >Adresse mail</label>
                  <input id="user" name="Email" type="text" className="input" onChange={this.handelChange} />
                  <label for="pass" className="label">Mot de passe</label>
                  <input id="pass" name="password" type="text" className="input" onChange={this.handelChange} />
                  <button className="btn" onClick={this.LoginNow}>Continuer</button>
                  <div className="hr"></div>
                  <div className="foot-lnk">
                    <a href="#forgot">Mot De Passe Oublié?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps, { setAlert, removeAlert, LoginPatient, ClearError, logout , loadUser })(LogAdmin);