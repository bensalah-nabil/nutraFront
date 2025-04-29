import { useTranslation } from 'react-i18next';
import { Modal } from 'react-bootstrap';
import RegisterForm from '../auth/RegisterForm'; // Assurez-vous que le chemin est correct

function RegisterModal({ show, onHide, onSwitchToLogin }) {
  const { t } = useTranslation();
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontSize:'25px',marginLeft:'30%',color: "#d66d0a" }}>
        {t('Register.title')}
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
  <RegisterForm />
  <p>
    {t('Register.alreadyAccount')}{" "}
    <span
      style={{color: "#d66d0a" , cursor: "pointer",marginLeft: "5px"}}
      onClick={onSwitchToLogin}
    >
    {t('Register.loginHere')}
    </span>
  </p>
</Modal.Body>
    </Modal>
  );
}

export default RegisterModal;
