import { useTranslation } from "react-i18next";

function MaintienFeaturesSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#d66d0a" }}>
            {t("Maintien.featuresTitle")}
          </h2>
          <p className="lead text-muted">{t("Maintien.featuresSubtitle")}</p>
        </div>
        <div className="row g-4">
          {/* Feature 1 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="fas fa-seedling fa-3x mb-3" style={{ fontSize: "3rem", color: "#198754" }}></i>
                <h4 className="card-title">{t("Maintien.feature1Title")}</h4>
                <p className="card-text">{t("Maintien.feature1Text")}</p>
              </div>
            </div>
          </div>
          {/* Feature 2 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="fas fa-utensils fa-3x mb-3" style={{ fontSize: "3rem", color: "#198754" }}></i>
                <h4 className="card-title">{t("Maintien.feature2Title")}</h4>
                <p className="card-text">{t("Maintien.feature2Text")}</p>
              </div>
            </div>
          </div>
          {/* Feature 3 */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <i className="fas fa-sliders-h fa-3x mb-3" style={{ fontSize: "3rem", color: "#198754" }}></i>
                <h4 className="card-title">{t("Maintien.feature3Title")}</h4>
                <p className="card-text">{t("Maintien.feature3Text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MaintienFeaturesSection;
