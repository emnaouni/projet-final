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
                                    <p><a id="footer-inscription" href="#">S'inscrire</a></p>
                                   <p><a id="footer-mon-compte" href="#">Se connecter</a></p> 
                         </div>
                         </div>
                         <div className="Offres">
                         <div id="subsection">
                                    <h3 className="sidebar-header">Nos offres</h3>
                                    <p><a id="footer-RDV" href="#">Prenez RDV</a></p>
                                    <p><a id="footer-nos-medecins" href="#">Chercher medecins</a></p>
                                    <p><a id="footer-pro" href="#">Vous êtes médecin?</a></p>
                         </div>
                         </div>
                         <div  className="Social-media">
                             <h3 className="sidebar-header">Suivez-nous</h3>
                                <ul className="List-SocialMedia">
                                    <li className="item-socialmedia"><a target="_blank" href="#"><i class="fab fa-twitter-square"></i></a></li>
                                     <li className="item-socialmedia"><a target="_blank" href="#"><i class="fab fa-facebook-square"></i></a></li>
                                     <li className="item-socialmedia"><a target="_blank" href="#"><i class="fab fa-linkedin"></i></a></li>
                                    <li className="item-socialmedia"><a target="_blank" href="#"><i class="fab fa-instagram"></i></a></li>
                                    <li className="item-socialmedia"><a target="_blank" href="#"><i class="fab fa-youtube"></i></a></li>
                                    </ul>
                             </div>
        </section>
                    );
                }
                
                export default Footer;
