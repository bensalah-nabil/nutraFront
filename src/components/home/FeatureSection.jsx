import { useTranslation } from "react-i18next";

function FeatureSection() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#d66d0a" }}>
            {t("featureshome.features_title")}
          </h2>
          <p className="lead text-muted">
            {t("featureshome.features_description")}
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon" style={{ fontSize: "3rem", color: "#d66d0a" }}>
                  <i className="fas fa-robot"></i>
                </div>
                <h4 className="card-title">{t("featureshome.feature1_title")}</h4>
                <p className="card-text">
                  {t("featureshome.feature1_text")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon" style={{ fontSize: "3rem", color: "#d66d0a" }}>
                  <i className="fas fa-utensils"></i>
                </div>
                <h4 className="card-title">{t("featureshome.feature2_title")}</h4>
                <p className="card-text">
                  {t("featureshome.feature2_text")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="feature-icon" style={{ fontSize: "3rem", color: "#d66d0a" }}>
                  <i className="fas fa-chart-line"></i>
                </div>
                <h4 className="card-title">{t("featureshome.feature3_title")}</h4>
                <p className="card-text">
                  {t("featureshome.feature3_text")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureSection;
