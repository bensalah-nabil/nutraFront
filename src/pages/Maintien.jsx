import React, { useState } from "react";
import NavbarPlans from "../components/common/NavbarPlans";
import HeroSection from '../components/Maintien/HeroSection';
import FeaturesSection from '../components/Maintien/FeaturesSection';
import VideoSection from '../components/Maintien/VideoSection';
import GallerySection from '../components/Maintien/GallerySection';
import Footer from '../components/common/Footer';
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/styles.js";

const Maintien = () => {
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

export default Maintien;
