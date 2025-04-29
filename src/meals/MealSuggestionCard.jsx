import React, { useContext } from 'react';
import { MealContext } from '../context/MealContext'; // Un contexte global à créer
import { FaInfoCircle, FaPlus } from 'react-icons/fa';

const MealSuggestionCard = ({ meal }) => {
  const { addMealToPlan } = useContext(MealContext);

  const handleAddToPlan = () => {
    addMealToPlan(meal); // Ajoute ce plat au plan
  };

  const handleShowDetails = () => {
    alert(`Détails de ${meal.title} :\n${meal.description}`);
  };

  return (
    <div className="card p-3 mb-3">
      <div className="d-flex align-items-center mb-2">
        <img src={meal.image} alt={meal.title} style={{ height: '50px', borderRadius: '10px' }} />
        <div className="ms-3">
          <h5>{meal.title}</h5>
          <p className="mb-0 text-muted">{meal.description}</p>
        </div>
      </div>
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-outline-success" onClick={handleShowDetails}>
          <FaInfoCircle className="me-1" />
          Détails
        </button>
        <button className="btn btn-success" onClick={handleAddToPlan}>
          <FaPlus className="me-1" />
          Ajouter à mon plan
        </button>
      </div>
    </div>
  );
};

export default MealSuggestionCard;
