import React from 'react';
import Medecin from './components/medecin/Medecin'
import Compte from './components/medecin/Compte';
import Register from './components/medecin/Register';
// import Medecin from './components/medecin/Medecin'
import Home from "./components/Home/Home"
import setAuthToken from './utils/setAuthToken'
if(localStorage.token){
  setAuthToken(localStorage.token)
}
function App() {
  return (
    <div className="App">
    liste medecins:<Medecin/>
    <Compte/>
    <Register/>
    <Home/>
    </div>
  );
}

export default App;
