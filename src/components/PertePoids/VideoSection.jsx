import React from "react";
import { useTranslation } from "react-i18next";
const VideoSection = () => {
    const { t } = useTranslation();

    return (
    <section id="video" className="py-5 bg-white text-center">
    <div className="container">
        <h2 className="fw-bold mb-4"style={{ color:"#d66d0a" }}>  
        {t("methodePertePoids.title")}</h2>
        <div className="ratio ratio-16x9">
    <div className="video-container">
    <iframe
        src="https://www.youtube.com/embed/_uUtenV7mnU"
        title="Méthode NutriTrack"
        style={{  position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'  }}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    />
</div>

        
        </div>
        </div>
    </section>
);
};

export default VideoSection;
