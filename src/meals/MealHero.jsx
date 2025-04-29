import React from 'react';
import { useTranslation } from 'react-i18next';

const MealHero = () => {
  const { t } = useTranslation();

  return (
    <section className="meal-hero">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3" >
          <i className="fas fa-utensils me-2"style={{ marginLeft: '10px' }}></i>
          {t('MealHero.title')}
        </h1>
        <p className="lead">{t('MealHero.subtitle')}</p>
      </div>
    </section>
  );
};

export default MealHero;
