import { useTranslation } from 'react-i18next';

const GallerySection = () => {
  const { t } = useTranslation();

  const images = [
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288",
    "https://images.unsplash.com/photo-1494390248081-4e521a5940db"
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#d66d0a" }}>
          {t("Maintien.galleryTitle")}
        </h2>
        <div className="row g-4">
          {images.map((url, index) => (
            <div key={index} className="col-md-4">
              <div
                className="gallery-item"
                style={{
                  backgroundImage: `url('${url}')`,
                  height: '300px',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '10px'
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
