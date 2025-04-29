import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faHome,
  faUserCircle,
  faBook,
  faSignInAlt,
  faRobot,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const Navigation = ({ onShowLogin, onShowRegister }) => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const handleLogout = () => {
    localStorage.removeItem('token');
    sessionStorage.clear();
  alert(t("Navigation.logoutAlert"));
    navigate('/');
  };

  // Fonction pour changer langue + direction du texte (ltr ou rtl)
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.body.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <FontAwesomeIcon icon={faUtensils} className="me-2" /> NutriTrack
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isHomePage ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="#features">{t("Navigation.features")}</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#plans">{t("Navigation.plans")}</a>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={onShowLogin} style={{ padding: 0 }}>
                    <FontAwesomeIcon icon={faSignInAlt} className="me-1" /> {t("Navigation.login")}
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-light ms-lg-3" onClick={onShowRegister}>
                    {t("Navigation.register")}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/Formulaire-sante">
                    <FontAwesomeIcon icon={faHome} className="me-1" /> {t("Navigation.home")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">
                    <FontAwesomeIcon icon={faUserCircle} className="me-1" /> {t("Navigation.profile")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Journalisation">
                    <FontAwesomeIcon icon={faBook} className="me-1" /> {t("Navigation.journal")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/nutribot">
                    <FontAwesomeIcon icon={faRobot} className="me-1" /> {t("NutriBot")}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Repas">
                    <FontAwesomeIcon icon={faUtensils} className="me-1" /> {t("Navigation.meals")}
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={handleLogout}
                    style={{ padding: '10px' }}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-1" /> {t("Navigation.logout")}
                  </button>
                </li>
              </>
            )}
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

export default Navigation;
