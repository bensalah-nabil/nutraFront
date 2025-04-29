import { useTranslation } from "react-i18next";

const GallerySection = () => {
const { t } = useTranslation();
const images = [
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b",
    "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5"
];

return (
    <section className="py-5 bg-light">
    <div className="container">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#d66d0a" }}>
        {t("gallery.title")}
        </h2>
        <div className="row g-4">
        {images.map((url, idx) => (
            <div className="col-md-4" key={idx}>
            <div
                className="gallery-item"
                style={{
                backgroundImage: `url('${url}')`,
                height: "300px",
                backgroundSize: "cover"
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
