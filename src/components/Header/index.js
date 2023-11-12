// REACT IMPORT
import React from "react";
// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
            <img
              className="social-icon-header"
              id="facebook-icon-header"
              src={facebookIcon}
              alt="logo facebook"
            />
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
          </div>
        </div>

        <div className="first-header-center">
          <nav>
            <ul className="header-logo-links">
              <div className="header-logo-links-left">
                <li id="nav-accueil">Accueil</li>
                <li id="nav-boutique">
                  <a href="/#">Boutique</a>
                </li>
              </div>
              <li>
                <img
                  id="logo-waxandsea-header"
                  src={logo}
                  alt="logo de wax & sea"
                />
              </li>
              <div className="nav-contact-histoire">
                <li id="nav-li-contact">
                  <Link to="/connexion">Connexion</Link>
                </li>
                <li>
                  <Link to="/panier">Panier</Link>
                </li>
              </div>
            </ul>
          </nav>
        </div>

        <div className="first-header-right">
          <FontAwesomeIcon className="logo-panier" icon={faShoppingCart} />
          <p>
            <a href="/#">Panier</a>
          </p>
        </div>
      </section>
    </header>
  );
}

export default Header;
