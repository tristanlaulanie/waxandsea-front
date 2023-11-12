import React from "react";
import "./Card-produit.css";

function CardProduit() {
    return (
      <section class="three-cards">
        <div class="first-products-card">
          <img src="https://fakeimg.pl/300/" alt="grey neutral card"/>
          <button>
            <p>Voir le produit</p>
          </button>
        </div>
      </section>
    );
}

export default CardProduit;