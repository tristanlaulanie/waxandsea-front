import React, { useState } from "react";
import "./Paiement.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcStripe } from "@fortawesome/free-brands-svg-icons";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCcPaypal } from "@fortawesome/free-brands-svg-icons";

function Paiement() {
  const [nom, setNom] = useState("");
  const [nomError, setNomError] = useState("");
  const [cardnumber, setCardnumber] = useState("");
  const [cardnumberError, setCardnumberError] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [expiryDateError, setExpiryDateError] = useState("");

  const handleNomChange = (event) => {
    const value = event.target.value;
    const regex = /^[A-Za-z ]+$/;

    if (regex.test(value) || value === "") {
      setNomError("");
    } else {
      setNomError("Que des lettres SVP.");
    }

    setNom(value);
  };

  const handleCardnumberChange = (event) => {
    const value = event.target.value;
    // Regex pour valider que le numéro de carte contient uniquement des chiffres et a une longueur de 16 caractères
    const regex = /^\d{16}$/;

    if (regex.test(value) || value === "") {
      setCardnumberError("");
    } else {
      setCardnumberError("Le numéro de carte doit contenir 16 chiffres.");
    }

    setCardnumber(value);
  };

  const handleExpiryDateChange = (event) => {
    const value = event.target.value;
    // Regex pour valider que la date d'expiration correspond au format MM/AA
    const regex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;

    if (regex.test(value) || value === "") {
      setExpiryDateError("");
    } else {
      setExpiryDateError(
        'Respectez le format "MOIS (2 chiffres)/ANNEE(2 chiffres)".'
      );
    }

    setExpiryDate(value);
  };

  return (
    <div className="Paiement">
      <h2>Choisir mon mode de paiement</h2>
      <main>
        <span id="paiement_system">
          <container id="paiement-card">
            <span id="paiement_icon_check">
              <FontAwesomeIcon id="paiement_icon" icon={faCcStripe} />
              <input
                id="paiement_radio"
                type="radio"
                name="paiement"
                value="stripe"
              />
            </span>
            <span id="paiement_infos">
              <h3>Paiement par carte bancaire</h3>
              <h4>Titulaire de la carte</h4>
              <input
                id="cardholder_input"
                type="text"
                placeholder="NOM"
                value={nom}
                onChange={handleNomChange}
              />
              {nomError && (
                <div className="error-message_paiement">{nomError}</div>
              )}
              <h4>Numéro de carte bancaire</h4>
              <input
                id="cardnumber_input"
                type="text"
                placeholder="xxxx xxxx xxxx xxxx"
                value={cardnumber}
                onChange={handleCardnumberChange}
              />
              {cardnumberError && (
                <div className="error-message_paiement">{cardnumberError}</div>
              )}
              <span id="paiement_date_code">
                <span id="paiement_date">
                  <h4>Date d'expiration</h4>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                  />
                  {expiryDateError && <div className="error-message_expiry">{expiryDateError}</div>}
                </span>
                <span id="paiement_code">
                  <h4>Code de sécurité</h4>
                  <input id="paiement_code_input" type="text" placeholder="123" />
                </span>
              </span>
            </span>
          </container>
          <container className="paypal_card">
            <input
              id="paypal_radio"
              type="radio"
              name="paiement"
              value="paypal"
            />
            <FontAwesomeIcon id="paypal_card_icon" icon={faPaypal} />
            <FontAwesomeIcon id="paypal_card_icon" icon={faCcPaypal} />
          </container>
        </span>
        <container id="command_details">
          <h2>Ma commande</h2>
          <span id="montant_total_achats">
            <h4>Montant des achats</h4>
            <strong>Total achats €</strong>
          </span>
          <span id="frais_achat">
            <h4>Frais de port estimés</h4>
            <strong>Frais €</strong>
          </span>
          <p id="frais_offer">
            Plus que x euros pour les frais de port offerts.
          </p>
          <span>
            <span id="total_achats">
              <h4>Total</h4>
              <strong>Total en €</strong>
            </span>
            <span id="tva">
              <h5>TVA</h5>
              <strong>TVA en €</strong>
            </span>
          </span>
          <span>
            <span id="cgv">
              <input type="checkbox" name="cgv" value="cgv" />
              <p>J'accepte les C. G. V.</p>
            </span>
            <button id="submit_command" type="submit">
              VALIDER MA COMMANDE
            </button>
          </span>
        </container>
      </main>
    </div>
  );
}

export default Paiement;
