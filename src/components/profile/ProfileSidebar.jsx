import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faSignOutAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileSidebar = ({ userData }) => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [photo, setPhoto] = useState(userData.photo);
  const { t } = useTranslation();

  // Déconnexion
  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
    alert(t("ProfileSidebar.logoutAlert"));
    navigate('/');
  };

  // Modifier photo (ouvrir input)
  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  // Supprimer photo
  const handleDelete = () => {
    setPhoto(null);
  };

  // Choisir nouvelle image
  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPhoto(imageUrl);
    }
  };

  // Supprimer compte
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(t("ProfileSidebar.confirmDeleteAccount"));
    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/users/delete', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        alert(t("ProfileSidebar.accountDeleted"));
        localStorage.removeItem('token');
        sessionStorage.clear();
        navigate('/');
      } else {
        alert(t("ProfileSidebar.accountDeleteFailed"));
      }
    } catch (error) {
      console.error('Erreur lors de la suppression du compte :', error);
      alert(t("ProfileSidebar.accountDeleteError"));
    }
  };

  return (
    <div className="card p-4 mb-4 text-center" onContextMenu={(e) => e.preventDefault()}>
      <img
        src={photo || '/default-avatar.png'}
        className="rounded-circle mb-3 mx-auto"
        width="120"
        alt="Profil"
        style={{ cursor: 'pointer', objectFit: 'cover' }}
        onClick={handleEditClick}
      />

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: 'none' }}
        onChange={handlePhotoChange}
      />

      <h4>{userData.prenom} {userData.nom}</h4>
      <p className="text-muted">{t("ProfileSidebar.memberSince")} {userData.memberSince}</p>

      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-outline-primary" onClick={handleEditClick}>
          {t("ProfileSidebar.editPhoto")}
        </button>
        {photo && (
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            {t("ProfileSidebar.deletePhoto")}
          </button>
        )}

        <button className="btn btn-outline-success" onClick={() => navigate('/modifier-profil')}>
          <FontAwesomeIcon icon={faKey} className="me-2" />
          {t("ProfileSidebar.changePassword")}
        </button>

        <button className="btn btn-outline-danger" onClick={handleDeleteAccount}>
          <FontAwesomeIcon icon={faTrashAlt} className="me-2" />
          {t("ProfileSidebar.deleteAccount")}
        </button>

        <button className="btn btn-danger" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
          {t("ProfileSidebar.logout")}
        </button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
