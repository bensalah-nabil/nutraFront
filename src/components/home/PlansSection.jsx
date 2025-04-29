import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PlansSection = () => {
  const { t } = useTranslation();

  return (
    <section id="plans" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold" style={{ fontSize: "3rem", color: "#d66d0a" }}>{t('planshome.plans_title')}</h2>
          <p className="lead text-muted">{t('planshome.plans_subtitle')}</p>
        </div>

        <div className="row g-4">
          {/* Perte de poids */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">{t('planshome.weight_loss_title')}</h4>
                <p className="card-text">{t('planshome.weight_loss_text')}</p>
                <ul className="list-group list-group-flush mb-3">
                  {t('planshome.weight_loss_features', { returnObjects: true }).map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <i className="fas fa-check text-success me-2"></i>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/perte-poids" className="btn btn-outline-success w-100">{t('planshome.choose_plan')}</Link>
              </div>
            </div>
          </div>

          {/* Maintien */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm border-success">
              <div className="card-header bg-success text-white text-center py-3">
                <h4 className="my-0 fw-normal">{t('planshome.most_popular')}</h4>
              </div>
              <div className="card-body p-4">
                <h4 className="card-title">{t('planshome.maintien_title')}</h4>
                <p className="card-text">{t('planshome.maintien_text')}</p>
                <ul className="list-group list-group-flush mb-3">
                  {t('planshome.maintien_features', { returnObjects: true }).map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <i className="fas fa-check text-success me-2"></i>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/maintien" className="btn btn-outline-success w-100">{t('planshome.choose_plan')}</Link>
              </div>
            </div>
          </div>

          {/* Prise de masse */}
          <div className="col-md-4">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h4 className="card-title">{t('planshome.prise_masse_title')}</h4>
                <p className="card-text">{t('planshome.prise_masse_text')}</p>
                <ul className="list-group list-group-flush mb-3">
                  {t('planshome.prise_masse_features', { returnObjects: true }).map((item, index) => (
                    <li className="list-group-item" key={index}>
                      <i className="fas fa-check text-success me-2"></i>{item}
                    </li>
                  ))}
                </ul>
                <Link to="/prise-masse" className="btn btn-outline-success w-100">{t('planshome.choose_plan')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
