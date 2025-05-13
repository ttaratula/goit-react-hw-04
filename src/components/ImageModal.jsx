// src/components/ImageModal.jsx
import ReactModal from 'react-modal';
import { useEffect } from 'react';

// Встановлення root-елемента для доступності
ReactModal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <img src={image?.largeUrl} alt={image?.alt} style={{ maxWidth: '100%' }} />
    </ReactModal>
  );
}
