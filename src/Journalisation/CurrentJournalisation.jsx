import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const CurrentJournalisation = () => {
  const { t } = useTranslation();
  const [consultationData, setConsultationData] = useState(null);

  useEffect(() => {
    const fetchIAData = () => ({
      date: '24 Mai 2025',
      status: 'Complétée',
      motif: 'Analyse IA : Évaluation personnalisée pour optimisation nutritionnelle et bien-être.',
      examenClinique: {
        poids: '75 kg (-3 kg depuis dernière visite)',
        tension: '11/7',
        glycemie: '1.05 g/L',
        imc: 23.8,
      },
      diagnostic: "Rapport IA : Progression satisfaisante vers les objectifs de santé.",
      conseilsNutritionnels: [
        "Augmenter la consommation de fibres à 30g/jour",
        "Réduire les sucres simples après 17h",
        "Favoriser les protéines végétales dans 50% des repas"
      ],
      complements: [
        "Vitamine B12 : 500 mcg/jour",
        "Probiotiques : 1 capsule/jour"
      ],
      prochainRDV: '24 Août 2025'
    });

    setTimeout(() => {
      setConsultationData(fetchIAData());
    }, 1500);
  }, []);

  if (!consultationData) {
    return <div>{t('consultation.chargement')}</div>;
  }

  return (
    <div className="consultation-card card p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0"style={{ color: "#198754" }}>
          <i className="fas fa-file-medical consultation-icon"style={{ marginLeft:"10px",color: "#198754" }}></i>
          {t('consultation.titre', { date: consultationData.date })}
        </h3>
        <span className="badge bg-success">{t('consultation.status')}</span>
      </div>

      <div className="consultation-section">
        <h4 style={{color: "#d66d0a" }}>
        <i className="fas fa-comment-medical consultation-icon"style={{ marginLeft:"10px",color: "#d66d0a" }}></i>{t('consultation.motif')}</h4>
        <p className="ps-4">{consultationData.motif}</p>
      </div>

      <div className="consultation-section">
        <h4 style={{ color: "#d66d0a" }}><i className="fas fa-clipboard-check consultation-icon"style={{ marginLeft:"10px",color: "#d66d0a" }}>
          </i>{t('consultation.examen')}</h4>
        <div className="row ps-4">
          <div className="col-md-6">
            <p><strong>{t('consultation.poids')} :</strong> {consultationData.examenClinique.poids}</p>
            <p><strong>{t('consultation.tension')} :</strong> {consultationData.examenClinique.tension}</p>
          </div>
          <div className="col-md-6">
            <p><strong>{t('consultation.glycemie')} :</strong> {consultationData.examenClinique.glycemie}</p>
            <p><strong>{t('consultation.imc')} :</strong> {consultationData.examenClinique.imc}</p>
          </div>
        </div>
      </div>

      <div className="consultation-section">
        <h4 style={{ color: "#d66d0a" }}><i className="fas fa-diagnoses consultation-icon"style={{ marginLeft:"10px",color: "#d66d0a" }}></i>{t('consultation.diagnostic')}</h4>
        <p className="ps-4">{consultationData.diagnostic}</p>
      </div>

      <div className="consultation-section">
        <h4 style={{ color: "#d66d0a" }}><i className="fas fa-prescription-bottle-alt consultation-icon" style={{ marginLeft:"10px",color: "#d66d0a" }}></i>{t('consultation.prescription')}</h4>
        <div className="ps-4">
          <div className="prescription-item">
            <h5 style={{ marginLeft:"10px",color: "#198754" }}>{t('consultation.conseils')}</h5>
            <ul>
              {consultationData.conseilsNutritionnels.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="prescription-item">
            <h5 style={{ marginLeft:"10px",color: "#198754" }}>{t('consultation.complements')}</h5>
            <ul>
              {consultationData.complements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="consultation-section">
        <h4 style={{ color: "#d66d0a" }}><i className="fas fa-calendar-check consultation-icon"style={{ marginLeft:"10px",color: "#d66d0a" }}></i>{t('consultation.rdv')}</h4>
        <p className="ps-4">
          <strong>{consultationData.prochainRDV}</strong> - {t('consultation.suivi')}
        </p>
      </div>
    </div>
  );
};

export default CurrentJournalisation;
