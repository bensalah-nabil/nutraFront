import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Navigation from '../components/common/Navigation';
import Footer from '../components/common/Footer';
import PhysicalSection from '../health-form/PhysicalSection';
import GoalsSection from '../health-form/GoalsSection';
import HealthSection from '../health-form/HealthSection';
import AllergiesSection from '../health-form/AllergiesSection';
import HealthFormHero from '../health-form/HealthFormHero';

const FormulaireSante = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        physicalInfo: {
            age: '',
            weight: '',
            height: ''
        },
        goals: {
            mainGoal: ''
        },
        healthConditions: {
            conditions: []
        },
        allergies: {
            foodAllergies: []
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Données soumises:', formData);
        alert(t('formulaireSante.alertSuccess'));
        // Ajoutez ici la logique d'envoi vers API
    };

    const updateFormData = (section, data) => {
        setFormData(prev => ({
            ...prev,
            [section]: data
        }));
    };

    return (
        <div className="formulaire-sante">
            <Navigation activeLink="profil" />
            <HealthFormHero />

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="health-card card p-4 mb-5">
                            <form onSubmit={handleSubmit}>
                                <PhysicalSection
                                    data={formData.physicalInfo}
                                    onUpdate={(data) => updateFormData('physicalInfo', data)}
                                />
                                <GoalsSection
                                    data={formData.goals}
                                    onUpdate={(data) => updateFormData('goals', data)}
                                />
                                <HealthSection
                                    data={formData.healthConditions}
                                    onUpdate={(data) => updateFormData('healthConditions', data)}
                                />
                                <AllergiesSection
                                    data={formData.allergies}
                                    onUpdate={(data) => updateFormData('allergies', data)}
                                />

                                <div className="d-grid gap-2 mt-4" >
                                    <button type="submit" className="btn btn-nutritrack btn-lg"style={{ marginLeft:'10px' ,color: '#d66d0a' }}>
                                        <i className="fas fa-save me-2"style={{ marginLeft:'10px' ,color: '#d66d0a' }}></i>
                                        {t('formulaireSante.saveButton')}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FormulaireSante;
