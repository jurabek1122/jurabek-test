import React from 'react'
import { stars } from '../assets/data'

const FotoModal = ({ open, onClose, data }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='fotoModalContainer'
      >
        <img src={data.image} alt='/' />
        <svg onClick={onClose} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.625 40.625L25 25M25 25L9.375 9.375M25 25L40.625 9.375M25 25L9.375 40.625" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
    </div>
  );
};

export default FotoModal;