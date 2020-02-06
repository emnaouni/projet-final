
import './search.css'
import medecin from '../../images/medecin.png'
import { connect } from "react-redux"
import React, { Component } from 'react';
import {getAdresseCabinet,getNom,getSpecialite} from '../../actions/medicinActions'
import { Link } from "react-router-dom"

export class SearchDoctors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Nom: "",
            AdresseCabinet: "",
            Specialite: ""
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value })
       
            // if(this.state.Nom !== "" && this.state.AdresseCabinet !=="" && this.state.Specialite !== ""){
            //     this.props.history.push(`/search/${this.state.Nom}/${this.state.AdresseCabinet}/${this.state.Specialite}`)
            
    }
   
    render() {
        return (
            <section className="formSearch">
                <div className="docc">
                    <img src={medecin} style={{ width: "40%" }} />
                    <label className="medecinlab">Médecin</label>
                </div>
                <form id="searchdoctor" >
                    <div className="searchName" >
                        <input className="name-doc"  type="text" name="Nom" placeholder="Nom du professionnel de santé" value={this.state.Nom} onChange={this.handleChange} />
                    </div>
                    <select name="Specialite" className="SpecialiteSelect" onChange={this.handleChange} >
                        <optgroup value="0" label="">
                            <option value="13">
                                Specialité   </option>
                            <option value="Cardiologue  (Cœur) ">
                                Cardiologue  (Cœur)    </option>
                            <option value="Chirurgien Esthétique">
                                Chirurgien Esthétique    </option>
                            <option value="Chirurgien Orthopédiste Traumatologue ">
                                Chirurgien Orthopédiste Traumatologue  </option>
                            <option value="Dentiste  (Dents)">
                                Dentiste  (Dents)    </option>
                            <option value="Dermatologue  (Peau)">
                                Dermatologue  (Peau)       </option>
                            <option value="Généraliste">
                                Généraliste            </option>
                            <option value="Gynécologue Obstétricien ">
                                Gynécologue Obstétricien                                                     </option>
                            <option value="Nutritionniste">
                                Nutritionniste                                                     </option>
                            <option value="Ophtalmologue  (Yeux) ">
                                Ophtalmologue  (Yeux)                                                    </option>
                            <option value="Pédiatre  (Enfant)">
                                Pédiatre  (Enfant)                                                    </option>
                            <option value="Psychiatre  (Troubles mentaux)  ">
                                Psychiatre  (Troubles mentaux)                                                    </option>
                            <option value="Psychothérapeute ">
                                Psychothérapeute                                                     </option>
                            <option value="Radiologue ">
                                Radiologue                                                     </option>
                            <option value="Rhumatologue ">
                                Rhumatologue                                                     </option>
                            <option value="Sexologue">
                                Sexologue                                                     </option>
                        </optgroup>

                    </select>

                    <select onChange={this.handleChange} name="AdresseCabinet"  className="Ville-doctor" data-pf-plc="Ville" tabindex="-1" aria-hidden="true" >
                        <option value="GT">Grand Tunis</option>
                        <option disabled="">------------------</option>
                        <option value="Tunis " selected >Tunis </option>
                        <option value="Sfax">Sfax</option>
                        <option value="Sousse">Sousse</option>
                        <option value="Monastir">Monastir</option>
                        <option value="Ariana">Ariana</option>
                        <option value="Ben arous">Ben arous</option>
                        <option value="Nabeul">Nabeul</option>
                        <option value="Mahdia">Mahdia</option>
                        <option value="Kairouan">Kairouan</option>
                        <option value="Bizerte">Bizerte</option>
                        <option value="Medenine">Medenine</option>
                        <option value="Mannouba">Mannouba</option>
                        <option value="Gabes">Gabes</option>
                        <option value="Beja">Beja</option>
                        <option value="Gafsa">Gafsa</option>
                        <option value="Jendouba">Jendouba</option>
                        <option value="Le Kef">Le Kef</option>
                        <option value="Sidi bouzid">Sidi bouzid</option>
                        <option value="Kasserine">Kasserine</option>
                        <option value="Zaghouan">Zaghouan</option>
                        <option value="Siliana">Siliana</option>
                        <option value="Kebili">Kebili</option>
                        <option value="Tataouine">Tataouine</option>
                        <option value="Tozeur">Tozeur</option>
                    </select>


                <button className="buttonSearch"><Link className="buttonSearch" to={`/search/${this.state.Nom === "" ? "gggg":this.state.Nom }/${this.state.AdresseCabinet === "" ? "gggg" : this.state.AdresseCabinet }/${this.state.Specialite=== "" ? "gggg":this.state.Specialite}`}>
                    <i class="fas fa-search"></i>Chercher</Link></button>

                </form>
            </section>

        );
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//       getname: name => dispatch(getNom(name)),
//       getspecialite: specialit => dispatch(getSpecialite(specialit)),
//       getadressecab: adresse => dispatch(getAdresseCabinet(adresse))
//     }
// }
export default SearchDoctors;