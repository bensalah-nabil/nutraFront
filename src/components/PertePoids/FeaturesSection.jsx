import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = t("PertePoidsFeatures", { returnObjects: true });

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#d66d0a" }}>
            {t("sectionTitle")}
          </h2>
          <p className="lead text-muted">{t("sectionSubtitle")}</p>
        </div>
        <div className="row g-4">
          {features.map((feature, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <i className={`fas ${feature.icon} fa-3x text-success mb-3`}></i>
                  <h4 className="card-title">{feature.title}</h4>
                  <p className="card-text">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
