import React from 'react';
import ProfileHero from '../components/profile/ProfileHero';
import PersonalInfo from '../components/profile/PersonalInfo';
import HealthGoals from '../components/profile/HealthGoals';
import ProfileSidebar from '../components/profile/ProfileSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from '../components/common/Navigation';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import  Footer from '../components/common/Footer';
const Profile = () => {
  // Données utilisateur - normalement récupérées depuis une API ou un état global
  const userData = {
    nom: 'Dupont',
    prenom: 'Camille',
    email: 'camille.dupont@example.com',
    dateNaissance: '12/03/1987',
    sexe: 'Femme',
    taille: ' 1.68',
    poids: '65',
    imc: '23.0',
    allergies: 'Aucune',
    medicaments: 'Aucun',
    photo: 'https://randomuser.me/api/portraits/women/47.jpg',
    memberSince: 'Janvier 2023',
    objectifs: [
      'Perte de poids : -8 kg en 6 mois',
      'Maintien de l\'IMC entre 22 et 24',
      'Réduction de la glycémie post-prandiale',
      'Activité physique : 3 séances/semaine'
    ]
  };
  return (
    <>
    <Navigation />
      <ProfileHero />
      <div className="container mb-5">
        <div className="row">
          {/* Colonne principale */}
          <div className="col-lg-8">
            <PersonalInfo userData={userData} />
            <HealthGoals objectifs={userData.objectifs} />
          </div>
          
          {/* Colonne latérale */}
          <div className="col-lg-4">
            <ProfileSidebar userData={userData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;