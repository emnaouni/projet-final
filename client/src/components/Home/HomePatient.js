import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabar from "../NavBar/Navbar"
import './home.css'
import doc from '../../images/doctor.png'
import chrono from '../../images/chrono.png'
import CommentMarche from '../Commentmarche/CommetçaMarche'
import SearchDoctor from '../chercherMedecin/SearchDoctors'
import PatientRdv from './medecin/PatientRdv';
import MedecinService from './medecin/MedecinService'

const HomePatient = () => {
    return (
      <div>  <section className="Section-navBar">
             <Nabar/>
           <div className="intoGeneral">
               <div className="boxIntro">
                <h1 className="BesoinIntro">Besoin d'un professionel de santé?</h1>
                <img  className="chrono"src={chrono}/>
                    <div className="intro">
                        <p className='introParag'>Avec E-santé, trouvez et prenez rendez-vous avec un médecin, un dentiste, un spécialiste tout de suite.</p>
                            <img className="doc" src={doc}/>
                     </div>
                </div>
           </div>
           </section>
           <CommentMarche/>
           <SearchDoctor/>

           <PatientRdv/>
           
           <MedecinService/>
          
       </div>
      
    );
}

export default HomePatient;
