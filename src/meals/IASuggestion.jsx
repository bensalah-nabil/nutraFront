import React from 'react';
import { useTranslation } from 'react-i18next';

const IASuggestion = () => {
const { t } = useTranslation();

return (
    <div className="card meal-card mt-4">
    <div className="card-body">
        <h4 className="mb-3">
        <i className="fas fa-robot text-primary me-2"></i> {t('iaSuggestion.title')}
        </h4>
        <p>{t('iaSuggestion.description')}</p>
        
        <div className="d-flex align-items-center bg-light p-3 rounded">
        <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            width="80"
            height="80"
            className="rounded me-3"
            alt={t('iaSuggestion.mealName')}
            style={{ marginLeft: '20px' }}
        />
        <div>
            <h5 className="mb-1">{t('iaSuggestion.mealName')}</h5>
            <p className="mb-0 text-muted">{t('iaSuggestion.mealInfo')}</p>
        </div>
        </div>
        
        <div className="d-flex justify-content-end mt-3">
        <button className="btn btn-outline-success me-2">
            <i className="fas fa-info-circle me-1"></i> {t('iaSuggestion.buttons.details')}
        </button>
        <button className="btn btn-success">
            <i className="fas fa-plus me-1" style={{ marginRight:"2px" }}></i> {t('iaSuggestion.buttons.addToPlan')}
        </button>
        </div>
    </div>
    </div>
);
};

export default IASuggestion;
