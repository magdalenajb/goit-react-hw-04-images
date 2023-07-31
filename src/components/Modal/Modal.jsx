import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import c from './Modal.module.css';

export const Modal = ({image, description, onClose}) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  })

 const handleKeyDown = e => {
    if (e.code === 'Escape' || e.currentTarget === e.target) {
      onClose();
    }
  };

    return (
      <div className={c.Overlay} onClick={handleKeyDown}>
        <div className={c.Modal}>
          <img src={image} alt={description} />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
