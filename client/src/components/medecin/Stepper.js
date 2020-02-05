import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import RadioButtonsGroup from './RadioButtonsGroup';

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

function getSteps() {
  return ['Adresse e-mail', 'Informations ', 'mot de passe'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (<div>
        <div className='title'>
          <h2 className="tout">Tout d'abord, quelle est votre adresse e-mail ?</h2>
          </div>
        
        <input className="inp" placeholder="EX:ex@gmail.com" />
        <p className="accept">J'accepte les conditions générales d'utilisation</p>
        <p className="souhait">Je souhaite recevoir les conseils de santé par e-mail</p>
      </div>);
    case 1:
      return <div className="inscri-doc">
        {/* <p className="votr-nem">Quel est votre numéro ou code d'activation</p>
        <p>Numéro d'adhérent ou code d'activation :</p>
        <input className="inp"/> */}
        <p>Prénom : </p>
        <input className="inp"/>
        <p>Nom : </p>
        <input className="inp"/>
        <p>CIN : </p>
        <input className="inp"/>
        <p>Spécialité : </p>
        <input className="inp"/>
        <p>Date de Naissance :</p>
        <input className="inp"/>
        <p>Numéro de téléphone portable :</p>
        <input className="inp"/>
        <p>Adresse cabinet :</p>
        <input className="inp"/>
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
        <input className="inp"/>
        
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

class RegisterStepper extends React.Component {
  state = {
    activeStep: 0,
  };

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

  render() {
    const { classes } = this.props;
    const steps = getSteps();
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
                <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                <div className="StepperButtons">
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                    variant="contained" color="secondary" 
                  >
                    Back
                </Button>
                  <Button variant="contained" color="primary" onClick={this.handleNext}>
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

RegisterStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(RegisterStepper);
