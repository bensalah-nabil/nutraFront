// src/components/HeroSection.jsx
import React from "react";
import { useTranslation } from "react-i18next";

function HeroSection({ toggleRegisterModal }) {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-center">
      <div className="container">
        <h1 className="display-4 fw-bold mb-4">{t("herohome.title")}</h1>
        <p className="lead mb-5">{t("herohome.description")}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            className="btn btn-success btn-lg px-4 gap-3"
            onClick={toggleRegisterModal}
          >
            {t("herohome.startNow")}
          </button>
          <a href="#features" className="btn btn-outline-light btn-lg px-4">
            {t("herohome.learnMore")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
