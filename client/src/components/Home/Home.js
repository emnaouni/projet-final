import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nabar from "../NavBar/Navbar"
import './home.css'
import doc from '../../images/doctor.png'
import chrono from '../../images/chrono.png'
import CommentMarche from '../Commentmarche/CommetçaMarche'
import SearchDoctor from '../chercherMedecin/SearchDoctors'
import Footer from '../footer/Footer'
const Home = () => {
   return (
       <div className="Home">
       <section className="Section-navBar">
             <Nabar/>
           <div className="intoGeneral">
               <h1 className="BesoinIntro">Besoin d'un professionel de santé?</h1>
               <img  className="chrono"src={chrono}/>
           <div className="intro">
               <p className='introParag'>Avec E-santé, trouvez et prenez rendez-vous avec un médecin, un dentiste, un spécialiste tout de suite.</p>
                <img className="doc" src={doc}/>
           </div>
           </div>
           </section>
       <CommentMarche/>
       <SearchDoctor/>
       <Footer/>
    </div>
    );
}

export default Home;