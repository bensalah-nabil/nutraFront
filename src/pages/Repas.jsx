import React, { useState } from 'react';
import Navigation from '../components/common/Navigation';
import MealHero from '../meals/MealHero';
import NutritionSummary from '../meals/NutritionSummary';
import MealTabs from '../meals/MealTabs';
import MealCard from '../meals/MealCard';
import IASuggestion from '../meals/IASuggestion';
import Footer from '../components/common/Footer';

const Repas = () => {
  // État pour la date affichée
  const [dateAffichee, setDateAffichee] = useState(new Date());

  // Fonction pour formater la date en français
  const formaterDate = (date) => {
    return new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(date);
  };

  // Gestionnaire pour le bouton "Hier"
  const afficherHier = () => {
    const nouvelleDate = new Date(dateAffichee);
    nouvelleDate.setDate(nouvelleDate.getDate() - 1);
    setDateAffichee(nouvelleDate);
  };

  // Gestionnaire pour le bouton "Demain"
  const afficherDemain = () => {
    const nouvelleDate = new Date(dateAffichee);
    nouvelleDate.setDate(nouvelleDate.getDate() + 1);
    setDateAffichee(nouvelleDate);
  };

  return (
    <div className="meals-page">
      {/* Section Hero */}
      <Navigation activeLink="repas" />
      <MealHero />
      <div className="container mb-5">
        {/* Navigation par jour */}
        <div className="row mb-4">
            <MealTabs />
            <MealCard />
          <div className="col">
            <div className="card meal-card">
              <div className="card-body py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none"
                    onClick={afficherHier}
                  >
                    <i className="fas fa-chevron-left"></i> Hier
                  </button>
                  <h5 className="mb-0 fw-bold">{formaterDate(dateAffichee)}</h5>
                  <button
                    type="button"
                    className="btn btn-link text-decoration-none"
                    onClick={afficherDemain}
                  >
                    Demain <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NutritionSummary />
      
        <IASuggestion />
      </div>
      <Footer />
    </div>
  );
};

export default Repas;
