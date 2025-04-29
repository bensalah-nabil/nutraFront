import React, { useState } from "react";
import NavbarHome from "../components/common/NavbarHome";
import HeroSection from "../components/home/HeroSection";
import FeatureSection from "../components/home/FeatureSection";
import PlansSection from "../components/home/PlansSection";
import CTASection from "../components/home/CTASection";
import Footer from "../components/common/Footer";

import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/styles.js";

function Home() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const toggleLoginModal = () => setShowLoginModal(!showLoginModal);
  const toggleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

  return (
    <>
      <NavbarHome
        toggleLoginModal={toggleLoginModal}
        toggleRegisterModal={toggleRegisterModal}
      />

      <HeroSection toggleRegisterModal={toggleRegisterModal} />
      <FeatureSection />
      <PlansSection />
      <CTASection onRegisterClick={toggleRegisterModal} />
      <Footer />

      {/* ✅ LoginModal avec lien vers inscription */}
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
}

export default Home;
