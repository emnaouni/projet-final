import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from "./components/Admin/Admin"
import Home from "./components/Home/Home"
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from "./store"
import Medecin from './components/medecin/Medecin';
import Compte from './components/medecin/Compte';
import Register from './components/medecin/Register';
import  Alert  from './components/Alert/Alert';
import RegisterPatient from './components/medecin/RegisterPateint'
import HomeMedecin from './components/Home/medecin/HomeMedecin';
import PatientDossier from './components/Patient/PatientDossier';
import Timer from './components/timer/Timer'


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Alert/>
    <Route exact path="/Admin" component={Admin} />
    <Route exact path="/search/:Nom/:adress/:spec" component={Medecin}/>
    <Route exact path="/" component={Home}/>
    <Route exact path='/Login/:role' component={Compte}/>
    <Route exact path='/timer' component={Timer}/>

  
    <Route exact path="/Register/medecin" component={Register}/>
    <Route exact path="/Register/patient" component={RegisterPatient}/>
    <Route exact path="/homeMedecin" component={HomeMedecin}/>
    <Route exact path="/dossiermedical/:CIN" component={PatientDossier}/>

    
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
