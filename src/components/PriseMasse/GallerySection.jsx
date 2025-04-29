import { useTranslation } from "react-i18next";

const PriseMasseGallery = () => {
  const { t } = useTranslation();

  const images = [
    "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#d66d0a" }}>
          {t("PriseMasse.galleryTitle")}
        </h2>
        <div className="row g-4">
          {images.map((url, idx) => (
            <div className="col-md-4" key={idx}>
              <div
                className="gallery-item"
                style={{
                  backgroundImage: `url('${url}')`,
                  height: "300px",
                  backgroundSize: "cover",
                  borderRadius: "12px"
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriseMasseGallery;
