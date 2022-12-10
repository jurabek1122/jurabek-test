import React from 'react'

const Modal = ({ open, onClose, data }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <svg onClick={onClose} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.625 40.625L25 25M25 25L9.375 9.375M25 25L40.625 9.375M25 25L9.375 40.625" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <div className='zapis-modal'>
          <p>Для записи к приёму врачу обратитесь пожалуйста к ресепшну
          или позвоните в наш Колл Центр <br /><span>1183</span></p>
        </div>
        <button>Закрыт</button>
      </div>
    </div>
  );
};

export default Modal;