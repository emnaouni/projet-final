import React from 'react';
import photo from './patients-2.png'
import './rdv.css'
const PatientRdv = () => {
    return (
        <div className="patien-RDV">
            <div className="white-section rel">
                <div className="container-1280">
                <h1 className="Title-Medecin">Vous êtes professionnel de santé ?</h1>

                    <div className="flex-row-no-pad mobile-invert w-row">
                        <div className="column-46 w-col w-col-7">
                            <h2 className="heading-mobile">Vos patients gèrent leurs rendez-vous sur Doctolib</h2>
                            <div className="bi-col w-row">
                                <div className="numb-pad-right-20 w-col w-col-4 w-col-stack">
                                    <div className="pad-right-20">
                                        <div className="kpi-title">50 millions</div>
                                        <p className="kpi-desc">de visiteurs se rendent sur le site Doctolib chaque mois</p>
                                    </div>
                                </div>
                                <div className="numb-pad-right-20 w-col w-col-4 w-col-stack">
                                    <div className="pad-right-20">
                                        <div className="kpi-title">50%</div>
                                        <p className="kpi-desc">des Français gèrent déjà leurs rendez-vous sur Doctolib<span className="note"></span></p>
                                    </div>
                                </div>
                                <div className="numb-pad-right-20 w-col w-col-4 w-col-stack">
                                    <div className="pad-right-20">
                                        <div className="kpi-title">96%</div>
                                        <p className="kpi-desc">des patients sont satisfaits de Doctolib et le recommandent à leurs proches <span className="note">(2)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column-2 w-col w-col-5"><img src={photo} alt="Service reconnu par les patients" className="full-img-top-neg lazyload"/></div>
                        </div>
                    </div>
                    <div className="abs-bezel"></div>
                    <div className="button-block flex-center bottom-40"><a href="demo.html" className="btn-solid top-32 mobile-full w-button">Obtenez plus d'informations</a></div>
                </div>
            </div>
            );
        }
        
        export default PatientRdv;
