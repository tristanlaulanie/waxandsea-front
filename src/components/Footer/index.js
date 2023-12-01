// REACT IMPORTS
import React from "react";
// CSS
import "./Footer.css";
// IMAGE
import facebook from "./image/facebook-icon.png";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul class="policies-contact-footer">
        <li id="policie-link">Politique de confidentialité</li>
        <li>Conditions générales de vente</li>
        <li id="legal-mentions">Mentions légales</li>
        <li>
          <Link id="contact-link" to="/contact">Contact</Link>
        </li>
      </ul>
      <ul class="dev-policies-footer">
        <li id="copyright">(c) 2023</li>
        <li>Développé par neoCode</li>
        <li id="rights-link">Tous droits réservés</li>
      </ul>
      <ul>
        <li class="social-networks-footer">
          <a
            href="https://www.instagram.com/waxandsea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="logo-insta-footer" icon={faInstagram} />
          </a>
          <a
            href="https://www.facebook.com/lamaisonpercheefrance"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img id="facebook-logo-footer" src={facebook} alt="logo facebook" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
