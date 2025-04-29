import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
const NavbarPlans = ({ toggleLoginModal, toggleRegisterModal }) => {
 const { t, i18n } = useTranslation(); // ✅ داخل الـ component

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <i className="fas fa-utensils me-2"></i>
          {t("NutriTrack")}
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Basculer la navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="fas fa-home me-1"></i>{t("home")}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-3" href="#features">{t("features")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#video">{t("method")}</a>
            </li>
            <li className="nav-item d-flex align-items-center">
              <button
                className="nav-link btn btn-link text-white px-3"
                onClick={toggleLoginModal}
              >
                <i className="fas fa-sign-in-alt me-1"></i>
                {t("login.ar")}
              </button>
            </li>
            <li className="nav-item ms-lg-2">
              <button
                className="btn btn-light rounded-pill px-3 py-2 my-2 my-lg-0"
                onClick={toggleRegisterModal}
              >
                {t("register")}
              </button>
            </li>
          </ul>
          <div className="d-flex align-items-center ms-3">
            <button onClick={() => changeLanguage('fr')} className="btn btn-outline-light btn-sm me-2">
              Français
            </button>
            <button onClick={() => changeLanguage('ar')} className="btn btn-outline-light btn-sm">
              العربية
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavbarPlans;