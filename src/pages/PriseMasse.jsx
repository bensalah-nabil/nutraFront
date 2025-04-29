import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/styles.js';

import NavbarPlans from '../components/common/NavbarPlans';
import Footer from '../components/common/Footer';
import LoginModal from '../modals/LoginModal';
import RegisterModal from '../modals/RegisterModal';
import GallerySection from '../components/PriseMasse/GallerySection';
import HeroSection from '../components/PriseMasse/HeroSection';
import FeaturesSection from '../components/PriseMasse/FeaturesSection';
import VideoSection from '../components/PriseMasse/VideoSection';



const PriseMasse = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
      const [showRegisterModal, setShowRegisterModal] = useState(false);
    
      const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
      const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);
    
  return (
    <>
      <NavbarPlans
            toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
      />
      <LoginModal />
      <RegisterModal />
      <HeroSection toggleRegisterModal={toggleRegisterModal}/>
      <FeaturesSection />
      <VideoSection />
      <GallerySection />
      <Footer />
        <LoginModal
        show={showLoginModal}
        onHide={toggleLoginModal}
        onSwitchToRegister={() => {
          toggleLoginModal();       // ferme login
          toggleRegisterModal();    // ouvre register
        }}
      />

      {/* ✅ RegisterModal avec lien vers connexion */}
      <RegisterModal
  show={showRegisterModal}
  onHide={toggleRegisterModal}
  onSwitchToLogin={() => {
    toggleRegisterModal(); // ferme register
    toggleLoginModal();    // ouvre login ✅ il manquait cette ligne
  }}
  />
    </>
  );
};

export default PriseMasse;
