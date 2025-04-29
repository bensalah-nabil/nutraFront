import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';

const HeroNutribot = () => {
  const { t } = useTranslation();

  return (
    <section className="consultation-hero">
      <div className="container text-center">
        <h1 className="display-4 fw-bold mb-3"style={{ marginLeft: '10px' }}>
          <FontAwesomeIcon icon={faRobot} className="me-2"  />
          Nutribot
        </h1>
        <p className="lead">{t('heroNutribot.subtitle')}</p>
      </div>
    </section>
  );
};

export default HeroNutribot;
