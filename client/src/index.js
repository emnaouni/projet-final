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
import LogAdmin from './components/Admin/LogAdmin';
import HomeMedecin from './components/Home/medecin/HomeMedecin';
import PatientDossier from './components/Patient/PatientDossier';
import Timer from './components/timer/Timer'
import PrivateRoute from './components/PrivateRoute'
import PrivateRouteMedecin from './components/PrivateRouteMedecin';
import loginPatient from './components/Patient/loginPatient';

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Alert/>
    <PrivateRoute exact path="/Admin" component={Admin} />
    <Route exact path="/search/:Nom/:adress/:spec" component={Medecin}/>
    <Route exact path="/" component={Home}/>
    <Route exact path='/Login/:medecin' component={Compte}/>
    <Route exact path='/Login/patient/:patient' component={loginPatient}/>

    <Route exact path='/Admin/Login' component={LogAdmin}/>

    {/* <Route exact path="/Register" component={Register}/>
    <Route exact path="/personne/medecin" component={Medecin}/> */}
    <Route exact path='/timer' component={Timer}/>
    <Route exact path="/Register/medecin" component={Register}/>
    <Route exact path="/Register/patient/patient" component={RegisterPatient}/>
    <PrivateRouteMedecin exact path="/homeMedecin" component={HomeMedecin}/>
    <Route exact path="/dossiermedical/:CIN" component={PatientDossier}/>

    
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
