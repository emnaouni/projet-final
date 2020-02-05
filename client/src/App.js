import React from 'react';
import Medecin from './components/medecin/Medecin'
import Compte from './components/medecin/Compte';
import Register from './components/medecin/Register';

function App() {
  return (
    <div className="App">
    liste medecins:<Medecin/>
    <Compte/>
    <Register/>

    </div>
  );
}

export default App;
