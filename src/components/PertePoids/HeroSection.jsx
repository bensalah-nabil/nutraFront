import { useTranslation } from "react-i18next";

function HeroSection({ toggleRegisterModal }) {
  const { t } = useTranslation();

  return (
    <section className="hero-section text-center py-5 bg-light">
      <div className="container">
        <h1 className="display-4 fw-bold">{t("heroPertePoids.title")}</h1>
        <p className="lead mb-4">{t("heroPertePoids.subtitle")}</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            className="btn btn-success btn-lg px-4 gap-3"
            onClick={toggleRegisterModal}
          >
            {t("heroPertePoids.cta")}
          </button>
          <a href="#features" className="btn btn-outline-light btn-lg px-4">
            {t("heroPertePoids.learnMore")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
