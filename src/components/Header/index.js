// REACT IMPORT
import React from "react";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// CSS
import "./Header.css";
// IMAGES
import logo from "./images/WaxAndSea-LogoDef.png";
import instagramIcon from "./images/instagram-icon.png";
import facebookIcon from "./images/facebook-icon.png";
// ROUTER
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <section className="first-header">
        <div className="first-header-left">
          <div className="social-div">
            <a
              href="https://www.facebook.com/lamaisonpercheefrance"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon-header"
                id="facebook-icon-header"
                src={facebookIcon}
                alt="logo facebook"
              />
            </a>
            <a
              href="http://www.instagram.com/waxandsea/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-icon-header"
                id="instagram-icon-header"
                src={instagramIcon}
                alt="logo instagram"
              />
            </a>
            <Link to="/contact">
              <FontAwesomeIcon className="logo-enveloppe" icon={faEnvelope} />
            </Link>
          </div>
        </div>

        <div className="first-header-center">
          <nav>
            <ul className="header-logo-links">
              <div className="header-logo-links-left">
                <li id="nav-boutique">
                  <Link to="/accueil">Accueil</Link>
                </li>
              </div>
              <div className="nav-connexion">
                <li id="nav-li-connexion">
                  <Link to="/connexion">Connexion</Link>
                </li>
              </div>
              <li>
                <img
                  id="logo-waxandsea-header"
                  src={logo}
                  alt="logo de wax & sea"
                />
              </li>
            </ul>
          </nav>
        </div>

        <div className="first-header-right">
          <span id="cart_title">
            <FontAwesomeIcon className="logo-panier" icon={faShoppingCart} />
            <p>
              <Link to="/panier">Panier</Link>
            </p>
          </span>
          <p id="payment_title">
            <Link to="/paiement">Paiement</Link>
          </p>
          <p id="signup_title">
            <Link to="/enregistrement">M'enregistrer</Link>
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
