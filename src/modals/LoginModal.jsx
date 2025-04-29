import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LoginForm from '../auth/LoginForm';

const LoginModal = ({ show, onHide, onSwitchToRegister }) => {
  const { t } = useTranslation();

  const handleClose = () => {
    if (typeof onHide === 'function') {
      onHide();
    }
  };

  const handleSwitchToRegister = () => {
    if (typeof onSwitchToRegister === 'function') {
      onHide();
      onSwitchToRegister();
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize:'25px', marginLeft:'40%', color: "#d66d0a" }}>
          {t('login.title')}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <LoginForm />
      </Modal.Body>

      <Modal.Footer className="justify-content-center">
        <p className="mb-0">
          {t('login.no_account')}{' '}
          <Button
            variant="link"
            className="p-0"
            style={{ color: "#d66d0a", cursor: "pointer" }}
            onClick={handleSwitchToRegister}
          >
            {t('login.register')}
          </Button>
        </p>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
