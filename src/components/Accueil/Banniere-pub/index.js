import React from "react";
import "./Banniere-pub.css";
import mannequin from "./images/mannequin-robe-verte-font-bleu.png";
import logo from "./images/WaxAndSea-LogoDef.png";

function BannierePub () {
    return (
        <div class="banner_model-logos_section">
        <section class="banner-model">
          <img
            class="banner-model-img"
            src={mannequin}
            alt="banniere gifs animés"
          />
          <div class="banner-model-logo-and-text">
            <p>
              DES VETEMENTS ET ACCESSOIRES UNIQUES, <br />
              REALISES SUR DEMANDE.
            </p>
            <img
              class="banner-model-logo"
              src={logo}
              alt="logo de Wax and Sea"
            />
          </div>
        </section>
      </div>
    );
}

export default BannierePub;