import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const NutritionSummary = () => {
    const { t } = useTranslation();

    useEffect(() => {
        const circles = document.querySelectorAll('circle[stroke-dashoffset]');
        circles.forEach(circle => {
            const value = circle.parentElement.parentElement.getAttribute('data-value');
            const offset = 220 - (220 * value / 100);
            circle.style.strokeDashoffset = offset;
        });
    }, []);

    const calories = { current: 1450, target: 1900 };

    return (
        <div className="row mb-4">
            {/* Calories */}
            <div className="col-md-4 mb-3">
                <div className="card meal-card h-100">
                    <div className="card-body text-center">
                        <h5 className="card-title"style={{ marginLeft:"10px",color: "#d66d0a" }}>{t('NutritionSummary.calories')}</h5>
                        <div className="d-flex justify-content-center my-3">
                            <div className="circle-progress position-relative" data-value="75">
                                <svg className="position-absolute" width="80" height="80" viewBox="0 0 80 80">
                                    <circle className="text-light" cx="40" cy="40" r="35" strokeWidth="8" fill="none"></circle>
                                    <circle className="text-success" cx="40" cy="40" r="35" strokeWidth="8" fill="none" 
                                            strokeDasharray="220" strokeDashoffset="55" style={{transition: 'stroke-dashoffset 1s ease'}}></circle>
                                </svg>
                                <div className="position-absolute top-50 start-50 translate-middle">
                                    <h3 className="mb-0">75%</h3>
                                </div>
                            </div>
                        </div>
                        <span>1800/1970
                        <p className="mb-0">{t('NutritionSummary.kcal', { current: calories.current, target: calories.target })}</p>
                    </span></div>
                </div>
            </div>

            {/* Macronutriments */}
            <div className="col-md-4 mb-3">
                <div className="card meal-card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center mb-4"style={{ marginLeft:"10px",color: "#d66d0a" }}>{t('NutritionSummary.macronutrients')}</h5>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between mb-1">
                                <span>{t('NutritionSummary.proteins')}</span>
                                <span>112g (28%)</span>
                            </div>
                            <div className="progress progress-meal">
                                <div className="progress-bar bg-success" style={{width: '28%'}}></div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="d-flex justify-content-between mb-1">
                                <span>{t('NutritionSummary.carbs')}</span>
                                <span>180g (45%)</span>
                            </div>
                            <div className="progress progress-meal">
                                <div className="progress-bar bg-info" style={{width: '45%'}}></div>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-between mb-1">
                                <span>{t('NutritionSummary.fats')}</span>
                                <span>60g (27%)</span>
                            </div>
                            <div className="progress progress-meal">
                                <div className="progress-bar bg-warning" style={{width: '27%'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Micronutriments */}
            <div className="col-md-4 mb-3">
                <div className="card meal-card h-100">
                    <div className="card-body">
                        <h5 className="card-title text-center mb-4"style={{ marginLeft:"10px",color: "#d66d0a" }}>{t('NutritionSummary.micronutrients')}</h5>
                        <div className="row">
                            {[
                                { key: 'fibers', value: '22g', percent: 70, color: 'bg-primary' },
                                { key: 'iron', value: '14mg', percent: 78, color: 'bg-danger' },
                                { key: 'calcium', value: '850mg', percent: 85, color: 'bg-purple' },
                                { key: 'vitaminD', value: '8μg', percent: 53, color: 'bg-orange' }
                            ].map((nutri, index) => (
                                <div className="col-6 mb-3 text-center" key={index}>
                                    <div className={`nutri-badge ${nutri.color} text-white d-inline-block mb-1`}>
                                        {t(nutri.key)}
                                    </div>
                                    <h5 className="mb-0">{nutri.value}</h5>
                                    <small>{t('NutritionSummary.ajr', { value: nutri.percent })}</small>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NutritionSummary;
