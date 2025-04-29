// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
// Import des pages
import Home from './pages/home.jsx';
import Profil from "./pages/profile.jsx";
import UpdateProfile from './components/profile/UpdateProfile';
import Repas from "./pages/Repas.jsx";
import Journalisation from "./pages/Journalisation.jsx";
import FormulaireSante from "./pages/FormulaireSante.jsx";
import NutriBot from "./pages/NutriBot.jsx";
import PertePoids from "./pages/PertePoids.jsx";
import Maintien from "./pages/Maintien.jsx";
import PriseMasse from "./pages/PriseMasse.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/styles.js";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profil />} />
          <Route path="/modifier-profil" element={<UpdateProfile />} />
          <Route path="/repas" element={<Repas />} />
          <Route path="/journalisation" element={<Journalisation />} />
          <Route path="/formulaire-sante" element={<FormulaireSante />} />
          <Route path="/nutribot" element={<NutriBot />} />
          <Route path="/perte-poids" element={<PertePoids />} />
          <Route path="/maintien" element={<Maintien />} />
          <Route path="/prise-masse" element={<PriseMasse />} />
        </Routes>
      </Router>
  
  );
}

export default App;
