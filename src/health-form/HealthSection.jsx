import React from 'react';
import { useTranslation } from 'react-i18next';

const conditions = [
{ id: 'diabete', labelKey: 'healthSection.conditions.diabete' },
{ id: 'hypertension', labelKey: 'healthSection.conditions.hypertension' },
{ id: 'cholesterol', labelKey: 'healthSection.conditions.cholesterol' },
{ id: 'dyspepsie', labelKey: 'healthSection.conditions.dyspepsie' },
{ id: 'cardiaque', labelKey: 'healthSection.conditions.cardiaque' },
{ id: 'thyroide', labelKey: 'healthSection.conditions.thyroide' },
];

const HealthSection = ({ data, onUpdate }) => {
const { t } = useTranslation();

const handleConditionChange = (e) => {
    const { value, checked } = e.target;
    let updatedConditions = [...data.conditions];

    if (value === 'none') {
    updatedConditions = checked ? ['none'] : [];
    } else {
    if (checked) {
        updatedConditions = updatedConditions.filter(c => c !== 'none');
        updatedConditions.push(value);
    } else {
        updatedConditions = updatedConditions.filter(c => c !== value);
    }
    }

    onUpdate({
    ...data,
    conditions: updatedConditions,
    });
};

return (
    <div className="form-section">
    <h4 className="mb-3"style={{ color: "#198754" }}>
        <i className="fas fa-heartbeat form-icon"style={{ marginLeft:"10px" }}></i>
        {t('healthSection.title')}
    </h4>

    <div className="checkbox-group">
        <h5 className="mb-3"style={{ color: "#d66d0a" }}>{t('healthSection.medicalConditions')}</h5>
        <div className="mb-3">
        <div className="form-check">
            <input
            className="form-check-input"
            type="checkbox"
            value="none"
            id="cond_0"
            checked={data.conditions.includes('none')}
            onChange={handleConditionChange}
        />
            <label className="form-check-label" htmlFor="cond_0">
            {t('healthSection.none')}
            </label>
        </div>

        {conditions.map((condition) => (
            <div className="form-check" key={condition.id}>
            <input
                className="form-check-input"
                type="checkbox"
                value={condition.id}
                id={`cond_${condition.id}`}
                checked={data.conditions.includes(condition.id)}
                onChange={handleConditionChange}
            />
            <label className="form-check-label" htmlFor={`cond_${condition.id}`}>
                {t(condition.labelKey)}
            </label>
            </div>
            ))}
        </div>
    </div>
    </div>
);
};

export default HealthSection;
