import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux"
import store from "./store"
import Medecin from './components/medecin/Medecin';
import { BrowserRouter, Route } from 'react-router-dom';
import Compte from './components/medecin/Compte';
import Register from './components/medecin/Register';
import RegisterPatient from './components/medecin/RegisterPateint'


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Route exact path="/personne/medecin" component={Medecin}/>
    <Route exact path="/" component={Compte}/>
    <Route exact path="/Register/medecin" component={Register}/>
    <Route exact path="/Register/patient" component={RegisterPatient}/>




    
    
    
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
