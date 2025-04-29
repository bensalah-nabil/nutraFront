import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HealthFormHero = () => {
  const { t } = useTranslation();

  return (
    <section className="consultation-hero">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          <FontAwesomeIcon icon={faUserCircle} className="me-2" style={{ marginLeft:"10px" }}/>
          {t('healthFormHero.title')}
        </h1>
        <p className="lead">{t('healthFormHero.description')}</p>
      </div>
    </section>
  );
};

export default HealthFormHero;
