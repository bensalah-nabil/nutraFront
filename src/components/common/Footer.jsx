import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faMapMarkerAlt, faEnvelope, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-dark text-light p-4">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h5>{t('footer.plans_title')}</h5>
            <ul className="list-unstyled">
              <Link to="/perte-poids" className="btn btn-outline-success w-100" style={{ fontSize:'15px' }}>
                {t('footer.perte_poids')}
              </Link>
              <Link to="/maintien" className="btn btn-outline-success w-100" style={{ fontSize:'15px' }}>
                {t('footer.maintien')}
              </Link>
              <Link to="/prise-masse" className="btn btn-outline-success w-100" style={{ fontSize:'15px' }}>
                {t('footer.prise_masse')}
              </Link>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <Link className="navbar-brand" to="/">
              <FontAwesomeIcon icon={faUtensils} className="me-2" style={{ width:'320px', height:'50px', marginTop:"3%" }} />
              <h3 style={{ marginLeft:'0px', marginTop:'20px' }}>{t('footer.brand_name')}</h3>
            </Link>
          </div>

          <div className="col-md-4">
            <h5>{t('footer.contact_title')}</h5>
            <ul className="list-unstyled" style={{ fontSize: "18px", marginTop:"20px" }}>
              <li><FontAwesomeIcon icon={faPhoneAlt} className="me-2" style={{ color: "#d66d0a" }} /> +216 23 801 780</li>
              <li><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" style={{ color: "#d66d0a" }} /> {t('footer.address')}</li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" style={{ color: "#d66d0a" }} />
                <a href="mailto:contact@exemple.com" className="text-light">{t('footer.email_label')}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
