import './CTASection.css';
import { useTranslation } from "react-i18next";

const CTASection = ({ onRegisterClick }) => {
  const { t } = useTranslation();

  return (
    <section className="cta-section text-center">
      <h2>{t("ctahome.cta_title")}</h2>
      <p>{t("ctahome.cta_description")}</p>
      <button onClick={onRegisterClick}>{t("ctahome.cta_button")}</button>
    </section>
  );
};

export default CTASection;
