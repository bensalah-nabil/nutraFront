import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Footer from '../common/Footer';
import Navigation from '../common/Navigation';

const UpdateProfile = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert(t('passwordMismatch'));
      return;
    }

    // Simuler l'envoi (à remplacer par API)
    console.log('Ancien mot de passe:', currentPassword);
    console.log('Nouveau mot de passe:', newPassword);

    alert(t('UpdateProfile.updateSuccess'));
    navigate('/profile');
  };

  return (
    <>
    <Navigation />
      <section className="consultation-hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">
            {t('UpdateProfile.title')}
          </h1>
        </div>
      </section>

      <div className="container mt-5" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
          <div className="mb-3">
            <label className="form-label">{t('UpdateProfile.currentPassword')}</label>
            <input
              type="password"
              className="form-control"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">{t('UpdateProfile.newPassword')}</label>
            <input
              type="password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">{t('UpdateProfile.confirmNewPassword')}</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="text-end">
            <button type="submit" className="btn btn-success">
              {t('UpdateProfile.submitButton')}
            </button>
          </div>
        </form>
      </div>

      <br />
      <br />
      <Footer />
    </>
  );
};

export default UpdateProfile;
