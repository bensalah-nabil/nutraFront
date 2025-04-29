import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const HealthGoals = ({ objectifs }) => {
  const { t } = useTranslation();

  return (
    <div className="card p-4">
      <h3 className="mb-4" style={{ color: 'chocolate' }}>
        <FontAwesomeIcon icon={faChartLine} className="me-2" style={{ color: 'chocolate', marginLeft:'10px' }} />
        {t('healthGoalsTitle')}
      </h3>
      <ul>
        {objectifs.map((objectif, index) => (
          <li key={index}>{objectif}</li>
        ))}
      </ul>
      <div className="text-end mt-3">
        <button className="btn btn-success">
          <FontAwesomeIcon icon={faPlusCircle} className="me-2" style={{ marginLeft:'10px'}} />
          {t('addGoal')}
        </button>
      </div>
    </div>
  );
};

export default HealthGoals;
