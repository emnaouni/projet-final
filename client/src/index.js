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
import Home from './components/Home/Home'
import  Alert  from './components/Alert/Alert';


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <Alert/>
    <Route exact path="/search/:Nom/:adress/:spec" component={Medecin}/>
    <Route exact path="/" component={Home}/>
    <Route exact path='/Login/medecin' component={Compte}/>
    <Route exact path='/Login/patient' component={Compte}/>
    <Route exact path="/Register" component={Register}/>
    
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
