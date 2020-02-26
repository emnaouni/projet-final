import React, { Component } from 'react';
import { connect } from "react-redux"
import { getmedecins } from "../../actions/medicinActions"
import './medecin.css'
import Calendrier from './Calendrier';
import Timer from '../timer/Timer'
import imagedoc from '../../images/noimg100x100.png'
import FlagTunisia from '../../images/FlagTunisia.png'
import NavBar from '../NavBar/Navbar';
import Footer from '../footer/Footer';
class Medecin extends Component {

    state = {

    }
    componentWillMount() {
       this.props.getmedecins();

    }

    render() {
      
        const Filt = this.props.alldoctors.medecins
            .filter(doc => doc.Nom === this.props.match.params.Nom.trim() || doc.AdresseCabinet === this.props.match.params.adress.trim() || doc.Specialite === this.props.match.params.spec.trim())

        return (  
        <div>
        <NavBar/>
            <div className="DoctorsList">
                {Filt.length > 0 ? Filt.map(el => (
                    <div className="doctorCard">
                        <div className='imageDoc'>
                      <img id="imgDoc" src={imagedoc} alt='img doctor' />
                        </div>
                        <div className="doctorItem">
                           <div className='NameChecked'>
                            <h3>Dr {el.Nom} {el.Prenom}</h3> <i  id="iconeCheked"class="fas fa-chevron-circle-down"></i>
                            </div>
                            <p className="specialité">specialité: {el.Specialite}</p>

                            <p className="mail">Email:{el.Email}</p>
                            <div className="AdrresseDoc">
                            <img src={FlagTunisia} id='img-adress' alt='tunisie' /><p className="adresse">Adresse:{el.AdresseCabinet}</p>
                            </div>
                        </div>
                        <div className="Calender">
                            {/* <Calendrier /> */}
                            <Timer id={el._id} />
                        </div>
                    </div>


                )
                ) : this.props.alldoctors.medecins.map(el => (
                    <div className="doctorCard">
                        <div className='imageDoc'> <img id="imgDoc" src={imagedoc} alt='img doctor' />
                        </div>
                        <div className="doctorItem">
                            <div className='NameChecked'>
                            <h3>Dr {el.Nom} {el.Prenom}</h3> <i id="iconeCheked" class="fas fa-chevron-circle-down"></i>
                            </div>
                            <p className="specialité">specialité: {el.Specialite}</p>


                            <p className="mail">Email:{el.Email}</p>
                            <div className="AdrresseDoc">
                            <img src={FlagTunisia} id='img-adress' alt='tunisie' /><p className="adresse">{el.AdresseCabinet}</p>
                            </div>
                        </div>
                        <div className="Calender">
                            {/* <Calendrier /> */}
                            <Timer  id={el._id}/>
                        </div>
                    </div>


                )
                )}
            </div>
            <Footer/>
            </div>
        );
    }

}
const MapStateToProps = state => {
    return {
        alldoctors: state.medecin
    };
}
export default connect(MapStateToProps, { getmedecins })(Medecin);
