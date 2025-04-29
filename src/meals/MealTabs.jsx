import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MealCard from './MealCard';

const MealTabs = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('breakfast');
    const [meals, setMeals] = useState({
        breakfast: [...defaultBreakfast],
        lunch: [...defaultLunch],
        dinner: [...defaultDinner],
        snacks: [...defaultSnacks]
    });

    const handleAddIngredient = (mealType) => {
        const newIngredient = prompt(t("prompt.addIngredient"));
        if (newIngredient) {
            setMeals(prev => ({
                ...prev,
                [mealType]: prev[mealType].map(card => ({
                    ...card,
                    ingredients: [...card.ingredients, { name: newIngredient, checked: false }]
                }))
            }));
        }
    };

    const renderMealCards = (mealType) =>
        meals[mealType].map((meal, idx) => (
            <MealCard key={idx} {...meal} />
        ));

    return (
        <>
            {/* Tabs */}
            <ul className="nav nav-pills mb-4 justify-content-center" id="meal-tabs" role="tablist">
                {['breakfast', 'lunch', 'dinner', 'snacks'].map(tab => (
                    <li className="nav-item mx-2" role="presentation" key={tab}>
                        <button
                            className={`nav-link meal-tab ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            <i className={`fas fa-${getTabIcon(tab)} me-1`}></i> {t(`meals.${tab}`)}
                        </button>
                    </li>
                ))}
            </ul>

            {/* Content */}
            <div className="tab-content" id="meal-tabs-content">
                <div className="tab-pane fade show active" role="tabpanel">
                    {renderMealCards(activeTab)}
                    <div className="text-center">
                        <button
                            className="btn btn-meal"
                            onClick={() => handleAddIngredient(activeTab)}
                        >
                            <i className="fas fa-plus me-2"></i>{t("actions.addFood")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

// Utilitaire pour choisir une icône selon le repas
const getTabIcon = (tab) => {
    switch (tab) {
        case 'breakfast': return 'coffee';
        case 'lunch': return 'utensils';
        case 'dinner': return 'moon';
        case 'snacks': return 'apple-alt';
        default: return 'question';
    }
};

// Valeurs par défaut de chaque repas
const defaultBreakfast = [{
    title: "Smoothie protéiné",
    icon: "coffee",
    calories: "350 kcal | P: 25g | G: 40g | L: 8g",
    ingredients: [
        { name: "1 banane", checked: true },
        { name: "30g de protéines en poudre", checked: true },
        { name: "200ml de lait d'amande", checked: true },
        { name: "1 c.à.s de beurre de cacahuète", checked: true },
        { name: "1 pincée de cannelle", checked: true }
    ],
    notes: "Mélanger tous les ingrédients au mixeur jusqu'à obtenir une texture lisse.",
    time: "8:30 - Consommé"
}];

const defaultLunch = [{
    title: "Salade de quinoa",
    icon: "utensils",
    calories: "520 kcal | P: 30g | G: 60g | L: 15g",
    ingredients: [
        { name: "100g de quinoa cuit", checked: false },
        { name: "1 avocat", checked: false },
        { name: "150g de poulet grillé", checked: false },
        { name: "50g de feta", checked: false },
        { name: "1 c.à.s d'huile d'olive", checked: false }
    ],
    notes: "Mélanger le quinoa avec les légumes, ajouter le poulet et la feta. Arroser d'huile d'olive.",
    alert: "Repas programmé pour 13:00 - Pas encore consommé"
}];

const defaultDinner = [{
    title: "Poêlée de légumes et saumon",
    icon: "moon",
    calories: "480 kcal | P: 35g | G: 20g | L: 22g",
    ingredients: [
        { name: "150g de saumon grillé", checked: false },
        { name: "100g de brocolis vapeur", checked: false },
        { name: "1 petite patate douce", checked: false },
        { name: "1 c.à.s d'huile de coco", checked: false }
    ],
    notes: "Faire revenir les légumes dans l’huile de coco, ajouter le saumon à la fin.",
    alert: "Repas prévu à 20:00"
}];

const defaultSnacks = [{
    title: "Yaourt grec aux fruits",
    icon: "apple-alt",
    calories: "180 kcal | P: 12g | G: 15g | L: 7g",
    ingredients: [
        { name: "1 pot de yaourt grec (100g)", checked: false },
        { name: "50g de fruits rouges", checked: false },
        { name: "1 c.à.c de miel", checked: false }
    ],
    notes: "Mélanger les fruits et le miel avec le yaourt.",
    alert: "Snack possible à 16:30"
}];

export default MealTabs;
