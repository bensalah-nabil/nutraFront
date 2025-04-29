import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    id: '',
    nom: '',
    prenom: '',
    email: '',
    motdepasse: '',
    date: '',
    sexe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données envoyées :', formData);
    // Appel API ici pour enregistrer le user
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="id" className="form-label">{t('Register.id')}</label>
        <input
          type="text"
          className="form-control"
          id="id"
          name="id"
          value={formData.id}
          onChange={handleChange}
          placeholder={t('Register.idPlaceholder')}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nom" className="form-label">{t('Register.nom')}</label>
        <input
          type="text"
          className="form-control"
          id="nom"
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="prenom" className="form-label">{t('Register.prenom')}</label>
        <input
          type="text"
          className="form-control"
          id="prenom"
          name="prenom"
          value={formData.prenom}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">{t('Register.email')}</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="motdepasse" className="form-label">{t('Register.motdepasse')}</label>
        <input
          type="password"
          className="form-control"
          id="motdepasse"
          name="motdepasse"
          value={formData.motdepasse}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="date" className="form-label">{t('Register.date')}</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">{t('Register.sexe')}</label>
        <select
          className="form-select"
          name="sexe"
          value={formData.sexe}
          onChange={handleChange}
          required
        >
          <option value="">{t('Register.sexeOptions.choisir')}</option>
          <option value="homme">{t('Register.sexeOptions.homme')}</option>
          <option value="femme">{t('Register.sexeOptions.femme')}</option>
        </select>
      </div>

      <button type="submit" className="btn btn-success w-100">
        {t('Register.submit')}
      </button>
    </form>
  );
};

export default RegisterForm;
