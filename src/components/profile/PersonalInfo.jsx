import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const PersonalInfo = ({ userData }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleModifierClick = () => {
    navigate('/formulaire-sante');
  };

  return (
    <div className="card p-4 mb-4">
      <h3 className="mb-4" style={{ color: 'chocolate' }}>
        <FontAwesomeIcon icon={faIdCard} className="me-2" style={{ color: 'chocolate', marginLeft:'10px' }} />
        {t('personalInfoTitle')}
      </h3>
      <div className="row">
        <div className="col-md-6">
          <p><strong>{t('lastName')} :</strong> {userData.nom}</p>
          <p><strong>{t('firstName')} :</strong> {userData.prenom}</p>
          <p><strong>{t('email')} :</strong> {userData.email}</p>
          <p><strong>{t('birthDate')} :</strong> {userData.dateNaissance}</p>
          <p><strong>{t('gender')} :</strong> {userData.sexe}</p>
        </div>
        <div className="col-md-6">
          <p><strong>{t('height')} :</strong> {userData.taille} m</p>
          <p><strong>{t('weight')} :</strong> {userData.poids} kg</p>
          <p><strong>{t('bmi')} :</strong> {userData.imc}</p>
          <p><strong>{t('allergies')} :</strong> {userData.allergies}</p>
          <p><strong>{t('medications')} :</strong> {userData.medicaments}</p>
        </div>
      </div>
      <div className="text-end mt-3">
        <button className="btn btn-outline-success" onClick={handleModifierClick}>
          <FontAwesomeIcon icon={faEdit} className="me-2" style={{ marginLeft:'10px' }}/>
          {t('editInfo')}
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
