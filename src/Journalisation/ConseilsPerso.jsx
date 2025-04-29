import React from 'react';
import { useTranslation } from 'react-i18next';

const ConseilsPerso = () => {
  const { t } = useTranslation();

  return (
  <div className="consultation-card card p-4 mb-4 vital-card">    
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold text-success">
              <i className="fas fa-lightbulb me-2"></i>{ t('customAdvice')}
            </h5>
          </div>

          <div className="border-start border-success ps-3">
            <p className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>
              Prendre le temps de bien mastiquer chaque bouchée.
            </p>
            <p className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>
              Tenir un journal alimentaire pour suivre les habitudes quotidiennes.
            </p>
            <p className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>
              Faire au moins 30 minutes d’activité physique modérée par jour.
            </p>
            <p className="mb-2">
              <i className="fas fa-check-circle text-success me-2"></i>
              Boire 1,5 à 2 litres d’eau par jour, en évitant les boissons sucrées.
            </p>
            <p className="mb-0">
              <i className="fas fa-check-circle text-success me-2"></i>
              Préparer ses repas à l’avance pour éviter les tentations.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default ConseilsPerso;
