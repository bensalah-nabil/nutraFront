import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const HistoryTimeline = () => {
  const { t } = useTranslation();
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const data = [
      { date: '10 Août 2024', descriptionKey: 'item1' },
      { date: '15 Juin 2024', descriptionKey: 'item2' },
      { date: '10 Mai 2025', descriptionKey: 'item3' },
    ];

    setTimeline(data);
  }, []);

  return (
    <div className="consultation-card card p-4">
    <h3 className="mb-3"style={{ color: "#d66d0a" }}>
        <i className="fas fa-history consultation-icon"style={{ marginLeft:"10px",color: "#d66d0a" }}></i>
        {t('journalisation.historique')}
      </h3>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div className="timeline-item" key={index}>
            <h5>{item.date}</h5>
            <p>{t(`journalisation.${item.descriptionKey}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryTimeline;
