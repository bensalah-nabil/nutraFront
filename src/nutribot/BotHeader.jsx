import { useTranslation } from 'react-i18next';

const BotHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="card-header bg-white border-bottom-0">
      <div className="d-flex align-items-center">
        <img 
          src="NutriTrack.png" 
          alt="Bot Avatar" 
          style={{ height: '40px' }} 
          className="rounded-circle me-3"
        />
        <div>
          <h5 className="mb-0" style={{ color: "#d66d0a",marginLeft:"5px" }}>{t('NutriBot')}</h5>
          <small className="text-muted">{t('botHeader.status')}</small>
        </div>
      </div>
    </div>
  );
};

export default BotHeader;
