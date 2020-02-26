import React from 'react';
import './medecinservice.css'

const MedecinService = () => {
    return ( <section className="MedicinService">
                    <div className="row-Medcin">
                        <div className="containerService">
                        <div className="col-pad-20 mobile-border-btm mobile-pad-10 w-col w-col-4">
                            <div className="box-arg">
                            <i class="fas fa-chart-line"></i>
                                    <h2 id="top-16">Augmentez les revenus de votre cabinet</h2>
                                    <p className="top-14-content">Faites connaître votre cabinet et réduisez vos rendez-vous non honorés</p>
                       </div>
                            </div>
                            <div className="col-pad-20 mobile-border-btm mobile-pad-10 w-col w-col-4">
                                <div className="box-arg">
                                <i class="fas fa-hands"></i>
                                        <h2 id="top-16">Réduisez votre temps de secrétariat de 65%<span className="note">(1)</span>
                                        </h2>
                                        <p className="top-14-content">Diminuez le nombre d’appels à votre secrétariat et gagnez en sérénité dans la gestion de votre cabinet</p>
                                </div>
                                </div>
                                <div className="col-pad-20 mobile-border-btm mobile-pad-10 w-col w-col-4">
                                    <div className="box-arg">
                                    <i class="fas fa-users"></i>
                                            <h2 id="top-16">Améliorez l’expérience de vos patients</h2>
                                            <p className="top-14-content">Offrez leur la prise de rendez-vous en ligne et de nombreux services uniques</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </section>
               );
                }
                
export default MedecinService;
