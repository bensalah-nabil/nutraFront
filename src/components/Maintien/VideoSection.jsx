import React from "react";
import { useTranslation } from "react-i18next";
const VideoSection = () => {
    const { t } = useTranslation();
  return (
<section id="video" className="py-5 bg-white text-center">
    <div className="container">
    <h2 className="fw-bold mb-4"style={{ color:"#d66d0a" }}>
  {t("Maintien.videoTitle")}</h2>
<div className="ratio ratio-16x9">
<iframe
  src="https://www.youtube.com/embed/QeNSVBeAd_c"
  title="Philosophie NutriTrack"
  allow="autoplay"
  allowfullscreen
style={{ border: "none", borderRadius: "10px" }}
></iframe>

</div>
    </div>
</section>
);
};
export default VideoSection;
