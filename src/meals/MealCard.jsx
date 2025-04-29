import React from 'react';
import { useTranslation } from 'react-i18next';

const MealCard = ({
  title = '',
  icon = 'utensils',
  calories = '',
  ingredients = [],
  notes = '',
  time = '',
  alert = '',
  onEdit = () => {},
  onDelete = () => {},
  onReuse = () => {}
}) => {
  const { t } = useTranslation();

  return (
    <div className="card meal-card mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start mb-3">
          <div>
            <h4 className="mb-1">
              <i className={`fas fa-${icon} meal-icon`}></i> {title}
            </h4>
            <span className="text-muted">{calories}</span>
          </div>
          <div className="dropdown">
            <button
              className="btn btn-sm btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
              <i className="fas fa-ellipsis-v"></i>
            </button>
            <ul className="dropdown-menu">
              <li>
                <button className="dropdown-item" onClick={onEdit}>
                  <i className="fas fa-edit me-2"></i>
                  {t('MealCard.edit')}
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={onDelete}>
                  <i className="fas fa-trash me-2"></i>
                  {t('MealCard.delete')}
                </button>
              </li>
              <li>
                <button className="dropdown-item" onClick={onReuse}>
                  <i className="fas fa-redo me-2"></i>
                  {t('MealCard.reuse')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        {alert && (
          <div className="alert alert-warning">
            <i className="fas fa-exclamation-circle me-2"></i>
            {t('MealCard.warning')}: {alert}
          </div>
        )}

        <div className="row">
          <div className="col-md-6">
            <h5 className="mt-3">
              <i className="fas fa-list-ul text-muted me-2"></i>
              {t('MealCard.ingredients')}
            </h5>
            <ul className="ingredient-list">
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <i
                    className={`${
                      ingredient.checked
                        ? 'fas fa-check-circle text-success'
                        : 'far fa-circle text-muted'
                    } me-2`}
                  ></i>
                  {ingredient.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h5 className="mt-3">
              <i className="fas fa-question-circle text-muted me-2"></i>
              {t('MealCard.notes')}
            </h5>
            <p>{notes}</p>

            {time && (
              <>
                <h5 className="mt-3">
                  <i className="fas fa-clock text-muted me-2"></i>
                  {t('MealCard.time')}
                </h5>
                <p>
                  <i className="far fa-clock me-2"></i> {time}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
