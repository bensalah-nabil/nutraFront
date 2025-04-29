import { useTranslation } from 'react-i18next';
import { FaPaperPlane } from 'react-icons/fa';

const UserInput = ({ inputValue, onInputChange, onSendMessage, onKeyPress }) => {
  const { t } = useTranslation();

  return (
    <div className="card-footer bg-white border-top-0">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder={t('Posez votre question...')}
          value={inputValue}
          onChange={onInputChange}
          onKeyPress={onKeyPress}
        />
        <button className="btn btn-success" onClick={onSendMessage} aria-label={t('Envoyer')}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default UserInput;
