import React from 'react';
import './footer.css'
const Footer = () => {
    return (<section id="Footer-section">
                         <div className="Presentation">
                         <div id="subsection">
                                    <h3 className="sidebar-header">E-santé</h3>
                                    <p><a id="footer-qui-sommes-nous" href="#">Qui sommes-nous ?</a></p>
                                    <p><a id="footer-nos-medecins" href="#">Nos médecins</a></p>
                                    <p><a id="footer-charte" href="#">Notre charte de déontologie</a></p>
                         </div>
                         </div>

                         <div className="Login">
                         <div id="subsection">
                                    <h3 className="sidebar-header">Mon compte</h3>
                                    <a id="footer-inscription" href="#">S'inscrire</a><br/>
                                    <a id="footer-mon-compte" href="#">Se connecter</a>
                         </div>
                         </div>
                         <div className="Offres">
                         <div id="subsection">
                                    <h3 className="sidebar-header">MNos offres</h3>
                                    <p><a id="footer-RDV" href="#">Prenez RDV</a></p>
                                    <p><a id="footer-nos-medecins" href="#">Chercher medecins</a></p>
                                    <p><a id="footer-pro" href="#">Vous êtes médecin?</a></p>
                         </div>
                         </div>
                         <div  className="Social-media">
                             <h3 className="sidebar-header">Suivez-nous</h3>
                                <ul className="unstyled inline social-icons social-simple social-lg">
                                    <li><a target="_blank" href="#"><i className="fa fa-twitter-square"></i></a></li>
                                     <li><a target="_blank" href="#"><i className="fa fa-facebook-official"></i></a></li>
                                     <li><a target="_blank" href="#"><i className="fa fa-linkedin-square"></i></a></li>
                                    <li><a target="_blank" href="#"><i className="fa fa-instagram"></i></a></li>
                                    <li><a target="_blank" href="#"><i className="fa fa-youtube"></i></a></li>
                                    </ul>
                             </div>
        </section>
                    );
                }
                
                export default Footer;
