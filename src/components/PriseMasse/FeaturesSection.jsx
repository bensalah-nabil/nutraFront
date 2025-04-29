import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#d66d0a" }}>
            {t("PriseMasse.title")}
          </h2>
          <p className="lead text-muted">
            {t("PriseMasse.subtitle")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="fas fa-dumbbell fa-3x mb-3 text-success"></i>
              <h3 className="card-title">{t("PriseMasse.featuresPriseMasse.card1.title")}</h3>
              <p>{t("PriseMasse.featuresPriseMasse.card1.text")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="fas fa-apple-alt fa-3x mb-3 text-success"></i>
              <h3 className="card-title">{t("PriseMasse.featuresPriseMasse.card2.title")}</h3>
              <p>{t("PriseMasse.featuresPriseMasse.card2.text")}</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm text-center p-4">
              <i className="fas fa-clock fa-3x mb-3 text-success"></i>
              <h3 className="card-title">{t("PriseMasse.featuresPriseMasse.card3.title")}</h3>
              <p>{t("PriseMasse.featuresPriseMasse.card3.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
