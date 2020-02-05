import React from 'react';
import './search.css'
import medecin from '../../images/medecin.png'
const SearchDoctors = () => {
    return (<section className="formSearch">
     <div className="docc"> <img src={medecin} style={{width:"40%"}}/><label className="medecinlab">Médecin</label></div>  
    <form id="searchdoctor" >
          <div className="searchName" >
              <input className="name-doc" type="text" name="doctorName" placeholder="Nom du professionnel de santé" value="" />
          </div>
          <select name="field_speciality" className="SpecialiteSelect" >
                                <optgroup value="0" label="">
                                <option value="13">
                                                Specialité   </option>
                                            <option value="13">
                                                Cardiologue  (Cœur)    </option>
                                            <option value="24">
                                                Chirurgien Esthétique    </option>
                                            <option value="20">
                                                Chirurgien Orthopédiste Traumatologue  </option>
                                            <option value="29">
                                                Dentiste  (Dents)    </option>
                                            <option value="30">
                                                Dermatologue  (Peau)       </option>
                                            <option value="36">
                                                Généraliste                                                     </option>
                                            <option value="39">
                                                Gynécologue Obstétricien                                                     </option>
                                            <option value="65">
                                                Nutritionniste                                                     </option>
                                            <option value="66">
                                                Ophtalmologue  (Yeux)                                                    </option>
                                            <option value="72">
                                                Pédiatre  (Enfant)                                                    </option>
                                             <option value="93">
                                                Psychiatre  (Troubles mentaux)                                                    </option>
                                            <option value="94">
                                                Psychothérapeute                                                     </option>
                                            <option value="80">
                                                Radiologue                                                     </option>
                                            <option value="87">
                                                Rhumatologue                                                     </option>
                                            <option value="95">
                                                Sexologue                                                     </option>
                                              </optgroup>
                                        
                                    </select>
                                 
                                    <select  name="field_gouvernorat_doctor" className="Ville-doctor" data-pf-plc="Ville" tabindex="-1" aria-hidden="true">
                                        <option value="GT">Grand Tunis</option>
                                        <option disabled="">------------------</option>
                                        <option value="23" selected >Tunis </option>
                                        <option value="17">Sfax</option>
                                        <option value="20">Sousse</option>
                                        <option value="15">Monastir</option>
                                        <option value="1">Ariana</option>
                                        <option value="3">Ben arous</option>
                                        <option value="16">Nabeul</option>
                                        <option value="12">Mahdia</option>
                                        <option value="8">Kairouan</option>
                                        <option value="4">Bizerte</option>
                                        <option value="14">Medenine</option>
                                        <option value="13">Mannouba</option>
                                        <option value="5">Gabes</option>
                                        <option value="2">Beja</option>
                                        <option value="6">Gafsa</option>
                                        <option value="7">Jendouba</option>
                                        <option value="11">Le Kef</option>
                                        <option value="18">Sidi bouzid</option>
                                        <option value="9">Kasserine</option>
                                        <option value="24">Zaghouan</option>
                                        <option value="19">Siliana</option>
                                        <option value="10">Kebili</option>
                                        <option value="21">Tataouine</option>
                                        <option value="22">Tozeur</option>
                                    </select>
                        
                         

</form>
</section>
          );
 }
                                        
export default SearchDoctors;