import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './RadioButtonsGroup';
import {connect} from "react-redux"
import {registerPatient,ClearError} from '../../actions/authActions'
import {removeAlert,setAlert } from '../../actions/AlertActions'
import uuid from 'uuid'

const styles = theme => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});



class RegisterStepperMedecin extends React.Component {
  state = {
    activeStep: 0,
    Nom:'',
    Prenom:'',
    AdresseCabinet:'',
    Telephone:'',
    Email:'',
    password:'',
    Role:":medecin",
    Specialite:''
  
  };
getSteps=()=> {
  return ['Adresse e-mail', 'Informations ', 'mot de passe'];
}

 getStepContent=(stepIndex)=> {
  switch (stepIndex) {
    case 0:
      return (<div>
        <div className='title'>
          <h2 className="tout">Tout d'abord, quelle est votre adresse e-mail ?</h2>
          </div>
        
        <input className="inp" placeholder="EX:ex@gmail.com" onChange={this.handleChange} name="Email" />
        <p className="accept">J'accepte les conditions générales d'utilisation</p>
        <p className="souhait">Je souhaite recevoir les conseils de santé par e-mail</p>
      </div>);
    case 1:
      return <div className="inscri-doc">
        {/* <p className="votr-nem">Quel est votre numéro ou code d'activation</p>
        <p>Numéro d'adhérent ou code d'activation :</p>
        <input className="inp"/> */}
        <p>Prénom : </p>
        <input className="inp" onChange={this.handleChange} name="Prenom"/>
        <p>Nom : </p>
        <input className="inp" onChange={this.handleChange} name="Nom"/>
        {/* <p>CIN : </p>
        <input className="inp" /> */}
        <p>Spécialité : </p>
        <input className="inp" onChange={this.handleChange} name="Specialite"/>
        {/* <p>Date de Naissance :</p>
        <input className="inp" /> */}
        <p>Numéro de téléphone portable :</p>
        <input className="inp" onChange={this.handleChange} name="Telephone"/>
        <p>Adresse cabinet :</p>
        <input className="inp" onChange={this.handleChange} name="AdresseCabinet"/>
        <div className='gender'>
          <p>genre :  </p>
        <RadioButtonsGroup/>
        </div>
        
        
        
        {/* <button className="conf-btn">confirmer</button> */}

        
      </div>;
    case 2:
      return <div className="inscri-doc" >
        <p className="votr-nem">Mot de passe</p>
        <p>Mot de passe : </p>
        <input className="inp" onChange={this.handleChange} name="password"/>
        
          <p>Votre mot de passe doit contenir :</p>
         <ul className="list-password"> 
           <li>
          8 caractères minimum
          </li>

         <li>Une ou plusieurs lettres majuscules</li>

         <li>Une ou plusieurs lettres minuscules</li>

         <li>Un ou plusieurs chiffres</li>
          
        </ul>
        <p>Confirmation de mot de passe : </p>
        <input className="inp"/>
      </div>;
    default:
      return 'Unknown stepIndex';
  }
}

handleChange = e => {
  this.setState({[e.target.name]: e.target.value})
}

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };


  
registerNow=()=>{
  if(this.state.Nom === '' || this.state.Prenom === '' || this.state.Email=== '' || this.state.password === ''|| this.state.Telephone===''|| this.state.Specalite===''|| this.state.AdresseCabinet==='' ){
    let id = uuid()
    this.props.setAlert('All fields are required', 'warning', id)
    setTimeout(() => {
      this.props.removeAlert(id)
    }, 5000);
    }
  else{
    this.props.registerPatient({
        Nom:this.state.Nom,
        Prenom:this.state.Prenom,
        Specalite:this.state.Specalite,
        Telephone:this.state.Telephone,
        AdresseCabinet:this.state.AdresseCabinet,
        Email:this.state.Email,
        password:this.state.password,
        Role:this.state.Role
    })
  }
}
componentWillReceiveProps(nextProps) {
  if(nextProps.auth.isAuthenticated){
      this.props.history.push('/homeMedecin')
  }
  if(nextProps.auth.error ==='User already exist!!'){
      let id = uuid()
      this.props.setAlert(nextProps.auth.error, 'danger', id)
      setTimeout(() => {
          this.props.removeAlert(id) 
          this.props.ClearError()
      }, 5000);
  }
  
}
  render() {
    const { classes } = this.props;
    const steps = this.getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {this.state.activeStep === steps.length ? (
            <div >
              <Typography className={classes.instructions}>All steps completed</Typography>
              <Button onClick={this.handleReset}>Reset</Button>
            </div>
          ) : (
              <div >
                <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
                <div className="StepperButtons">
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                    variant="contained" color="secondary" 
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={activeStep === steps.length - 1 ?this.registerNow : this.handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }
}

RegisterStepperMedecin.propTypes = {
  classes: PropTypes.object,
};


const mapStateToProps = state => {
  return{
      auth: state.auth
  }
}
export default connect(mapStateToProps,{setAlert,removeAlert,registerPatient,ClearError})(withStyles(styles)(RegisterStepperMedecin));


