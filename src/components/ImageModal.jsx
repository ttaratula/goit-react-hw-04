// src/components/ImageModal/ImageModal.jsx
import ReactModal from 'react-modal';
import { useEffect } from 'react';
import styles from './ImageModal.module.css'; // Якщо є стилі

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
      overlayClassName={styles.overlay}
      className={styles.content}
    >
      {/* ВСТАВЛЯЄМО СЮДИ велике зображення */}
      <img
        src={image?.urls?.regular}
        alt={image?.alt_description || 'Large image'}
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }}
      />

      {/* Додатково можна вивести автора, лайки і т.д. */}
      <p>Author: {image?.user?.name}</p>
      <p>Likes: {image?.likes}</p>
      <p>Description: {image?.description || 'No description'}</p>
    </ReactModal>
  );
}
