import React from 'react';
import guide1 from '../../images/patient-search-guide1.png'

import guide2 from '../../images/patient-search-guide2.png'
import guide3 from '../../images/patient-search-guide3.png'
import guide1Hover from '../../images/patient-search-guide1_hover.png'
import guide2Hover from '../../images/patient-search-guide2_hover.png'
import guide3Hover from '../../images/patient-search-guide3_hover.png'
import './comment.css'
const CommetçaMarche = () => {
    return (<section className="commentMarche" >
                <div className="container" id="info-row">
                    <h3 className="Title-Medecin">Comment ça marche ?</h3>
                    <div className="boxs">
                        <div className="info-box-guide1">
                            <img src={guide1} className="info-box-guide1-image"/>
                                <img src={guide1Hover} className="info-box-guide1-hover-image"/>
                         </div>

                                <div className="info-box-guide2">
                                    <img src={guide2} className="info-box-guide2-image"/>
                                        <img src={guide2Hover} className="info-box-guide2-hover-image"/>
                                 </div>

                                        <div className="info-box-guide3">
                                            <img src={guide3} className="info-box-guide3-image"/>
                                                <img src={guide3Hover} className="info-box-guide3-hover-image"/>
                                        </div>
                               </div>
                              </div>

                   </section>
             );
                            }
 export default CommetçaMarche;
