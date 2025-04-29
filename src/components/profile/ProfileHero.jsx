import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const ProfileHero = () => {
  const { t } = useTranslation();

  return (
    <section className="consultation-hero">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3">
          <FontAwesomeIcon icon={faUserCircle} className="me-2" />
          {t('profileTitle')}
        </h1>
        <p className="lead">{t('profileSubtitle')}</p>
      </div>
    </section>
  );
};

export default ProfileHero;
