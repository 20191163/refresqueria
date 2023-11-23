import React, { useState } from 'react';

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer style={styles.footer}>
      <p>© 2023 Mi Sitio Web</p>
      <p>
        <span onClick={openModal}>Políticas de Privacidad</span>
        {' | '}
        <span onClick={openModal}>Acerca de Nosotros</span>
        {' | '}
        <span onClick={openModal}>Términos y Condiciones</span>
      </p>

      {isModalOpen && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            {/* Contenido del modal */}
            <h2>Políticas de Privacidad</h2>
            <p>Contenido de las políticas de privacidad...</p>

            {/* Agrega botones u opciones para cerrar el modal */}
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '600px',
  },
};

export default Footer;
