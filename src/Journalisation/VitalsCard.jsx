import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const VitalsCard = () => {
    const { t } = useTranslation();

    const [vitals] = useState({
        poids: { value: '78 kg', change: '-5 kg', status: 'normal', statusClass: 'success' },
        imc: { value: '24.5', status: 'normal', statusClass: 'success' },
        tension: { value: '12/8', status: 'normal', statusClass: 'success' },
        glycemie: { value: '1.10 g/L', status: 'normal', statusClass: 'success' }
    });

    return (
        <div className="consultation-card card p-4 mb-4 vital-card">
            <h4 className="mb-3"style={{ color: "#d66d0a" }}>
                <i className="fas fa-heartbeat consultation-icon" style={{ marginLeft:"10px",color: "#d66d0a" }}></i>
                {t('constantes.titre')}
            </h4>

            <div className="row text-center">
                <div className="col-6 mb-3">
                    <div className="p-3 bg-light rounded">
                        <h6 className="text-muted">{t('constantes.poids')}</h6>
                        <h4 className="text-success">{vitals.poids.value}</h4>
                        <small className="text-success"><i className="fas fa-arrow-down"></i> {vitals.poids.change}</small>
                    </div>
                </div>

                <div className="col-6 mb-3">
                    <div className="p-3 bg-light rounded">
                        <h6 className="text-muted">{t('constantes.imc')}</h6>
                        <h4 className="text-success">{vitals.imc.value}</h4>
                        <small className={`text-${vitals.imc.statusClass}`}>{t(`constantes.${vitals.imc.status}`)}</small>
                    </div>
                </div>

                <div className="col-6">
                    <div className="p-3 bg-light rounded">
                        <h6 className="text-muted">{t('constantes.tension')}</h6>
                        <h4>{vitals.tension.value}</h4>
                        <small className={`text-${vitals.tension.statusClass}`}>{t(`constantes.${vitals.tension.status}`)}</small>
                    </div>
                </div>

                <div className="col-6">
                    <div className="p-3 bg-light rounded">
                        <h6 className="text-muted">{t('constantes.glycemie')}</h6>
                        <h4>{vitals.glycemie.value}</h4>
                        <small className={`text-${vitals.glycemie.statusClass}`}>{t(`constantes.${vitals.glycemie.status}`)}</small>
                    </div>
                </div>
            </div>

            <div className="text-end mt-3">
                <button className="btn btn-link text-decoration-none p-0">
                    {t('constantes.historique')} <i className="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
};

export default VitalsCard;
