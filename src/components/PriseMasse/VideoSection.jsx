import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const VideoPriseMasse = () => {
  const { t } = useTranslation();

  return (
    <section id="video" className="py-5 text-center bg-light">
      <div className="container">
        <h2 className="fw-bold mb-4" style={{ color: "#d66d0a" }}>
          {t("PriseMasse.videoTitle")}
        </h2>
        <div className="ratio ratio-16x9">
          <iframe
            className="youtube-iframe"
            src="https://www.youtube.com/embed/32IL63ksguo"
            title="Programme Prise de Masse"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoPriseMasse;
