import React from "react";
import "./Panier.css";
// IMAGES

function Panier() {
  return (
    <div className="Panier">
      <main className="main-frame">
        <section className="panier-frame">
          <img
            src="https://produits.bienmanger.com/1762-0w470h470_Panier_Osier_Habille_Tissu_Vichy.jpg"
            alt=""
          />
          <div className="panier-texte">
            <p className="prix">PRIX 29.90 €</p>
            <p className="quantite">QUANTITE 1</p>
          </div>
          <button id='button'>
            <i className="fa-brands fa-paypal"></i>
            Payer
          </button>
        </section>
        <section className="panier-frame">
          <img
            src="https://produits.bienmanger.com/1762-0w470h470_Panier_Osier_Habille_Tissu_Vichy.jpg"
            alt=""
          />
          <div className="panier-texte">
            <p className="prix">PRIX 29.90 €</p>
            <p className="quantite">QUANTITE 1</p>
          </div>
          <button id='button'>
            <i className="fa-brands fa-paypal"></i>
            Payer
          </button>
        </section>
      </main>
    </div>
  );
}

export default Panier;
