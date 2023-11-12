// REACT IMPORTS
import React from "react";
// CSS
import "./Footer.css";
// IMAGE
import facebook from "./image/facebook-icon.png";
// FONTAWESOME
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <ul class="policies-contact-footer">
        <li id="policie-link">Politique de confidentialité</li>
        <li>Conditions générales de vente</li>
        <li id="legal-mentions">Mentions légales</li>
        <li id="contact-link">Contact</li>
      </ul>
      <ul class="dev-policies-footer">
        <li id="copyright">(c) 2023</li>
        <li>Développé par neoCode</li>
        <li id="rights-link">Tous droits réservés</li>
      </ul>
      <ul>
        <li class="social-networks-footer">
        <FontAwesomeIcon className="logo-insta-footer" icon={faInstagram} />
          <img
            id="facebook-logo-footer"
            src={facebook}
            alt="logo facebook"
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
