import React from "react";
import { useTranslation } from "react-i18next";

const GoalsSection = ({ data, onUpdate }) => {
const { t } = useTranslation();
const handleChange = (e) => {
    onUpdate({
    ...data,
    mainGoal: e.target.value
    });
};

return (
    <div className="form-section">
    <h4 className="mb-3"style={{ color: "#198754" }}>
        <i className="fas fa-bullseye form-icon" style={{ marginLeft:"5px" }}></i>
        {t("goalsSection.title")}
    </h4>

    <div className="row g-3">
        <div className="col-md-12">
        <select
            className="form-select"
            value={data.mainGoal || ""}
            onChange={handleChange}
            required
        >
            <option value="">{t("goalsSection.selectPlaceholder")}</option>
            <option value="perte_de_poids">{t("goalsSection.options.perte_de_poids")}</option>
            <option value="prise_de_poids">{t("goalsSection.options.prise_de_poids")}</option>
            <option value="maintien_de_poids">{t("goalsSection.options.maintien_de_poids")}</option>
        </select>
        </div>
    </div>
    </div>
);
};

export default GoalsSection;
