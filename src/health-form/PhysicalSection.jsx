import { useTranslation } from 'react-i18next';

const PhysicalSection = ({ data, onUpdate }) => {
  const { t } = useTranslation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    onUpdate({
      ...data,
      [name]: value
    });
  };

  return (
    <div className="form-section">
      <h4 className="mb-4" style={{ color: "#198754"}}>
        <i className="fas fa-ruler-combined form-icon"style={{ marginLeft:"10px"}}></i>
        {t('physicalSection.title')}
      </h4>

      <div className="row g-3">
        <div className="col-md-4">
          <label className="form-label">{t('physicalSection.age')}</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={data.age || ''}
            onChange={handleChange}
            min="1"
            max="120"
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">{t('physicalSection.weight')}</label>
          <div className="input-group">
            <input
              type="number"
              step="0.1"
              className="form-control"
              name="weight"
              value={data.weight || ''}
              onChange={handleChange}
              min="30"
              max="300"
              required
            />
            <span className="input-group-text">{t('physicalSection.kg')}</span>
          </div>
        </div>

        <div className="col-md-4">
          <label className="form-label">{t('physicalSection.height')}</label>
          <div className="input-group">
            <input
              type="number"
              step="0.1"
              className="form-control"
              name="height"
              value={data.height || ''}
              onChange={handleChange}
              min="50"
              max="250"
              required
            />
            <span className="input-group-text">{t('physicalSection.cm')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalSection;
