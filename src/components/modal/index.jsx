import './styles.css'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseSvg, SuccessSvg } from '../../assets/svg/svg';
import { useTranslation } from 'react-i18next';

function MyModal({ token, isOpen, onClose, children }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <SuccessSvg />
        <h2>{t("successful")}</h2>
        <div onClick={onClose} className='modal_close'>
          <CloseSvg />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}

export default MyModal;
