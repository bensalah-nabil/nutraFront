import React from "react";
import { useTranslation } from "react-i18next";

const allergies = [
  { id: "gluten", labelKey: "gluten" },
  { id: "lactose", labelKey: "lactose" },
  { id: "fruits_coque", labelKey: "fruits_coque" },
  { id: "soja", labelKey: "soja" },
  { id: "œufs", labelKey: "œufs" },
  { id: "poisson", labelKey: "poisson" },
  { id: "crustacés", labelKey: "crustacés" }
];

const AllergiesSection = ({ data, onUpdate }) => {
  const { t } = useTranslation();

  const handleAllergyChange = (e) => {
    const { value, checked } = e.target;
    let updatedAllergies = [...data.foodAllergies];

    if (value === "aucune") {
      updatedAllergies = checked ? ["aucune"] : [];
    } else {
      if (checked) {
        updatedAllergies = updatedAllergies.filter((a) => a !== "aucune");
        updatedAllergies.push(value);
      } else {
        updatedAllergies = updatedAllergies.filter((a) => a !== value);
      }
    }

    onUpdate({
    ...data,
    foodAllergies: updatedAllergies
    });
};

return (
    <div className="form-section">
    <h4 className="mb-3"style={{ color: "#198754" }}>
        <i className="fas fa-allergies form-icon"style={{ marginLeft:"5px" }}></i>
        {t("allergiesSection.title")}
    </h4>
    <div className="checkbox-group">
        <h5 className="mb-3"style={{ color: "#d66d0a" }}>{t("allergiesSection.knownAllergies")}</h5>
        <div className="mb-3">
        <div className="form-check">
            <input
            className="form-check-input"
            type="checkbox"
            value="aucune"
            id="all_0"
            checked={data.foodAllergies.includes("aucune")}
            onChange={handleAllergyChange}
            />
            <label className="form-check-label" htmlFor="all_0">
            {t("allergiesSection.none")}
            </label>
        </div>

        {allergies.map((allergy) => (
            <div className="form-check" key={allergy.id}>
            <input
                className="form-check-input"
                type="checkbox"
                value={allergy.id}
                id={`all_${allergy.id}`}
                checked={data.foodAllergies.includes(allergy.id)}
                onChange={handleAllergyChange}
            />
            <label className="form-check-label" htmlFor={`all_${allergy.id}`}>
                {t(`allergiesSection.allergiesList.${allergy.labelKey}`)}
        </label>
            </div>
        ))}
        </div>
    </div>
    </div>
);
};

export default AllergiesSection;
