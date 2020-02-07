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

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Admin" component={Admin} />
            </Switch>


        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
