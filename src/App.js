import React from "react";
// COMPOSANTS
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import Connexion from "./components/Connexion";
import Panier from "./components/Panier";
import Footer from "./components/Footer";
// CSS
import "./App.css";
// ROUTER
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
