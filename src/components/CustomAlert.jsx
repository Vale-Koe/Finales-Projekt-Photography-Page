import React from 'react';
import "../css/CustomAlert.css";

function CustomAlert({message, onClose}) {
  return (
    <div className='customAlertOverlay'>
        <div className='customAlert'>
            <p>{message}</p>
            <button onClick={onClose}>OK</button>
        </div>
    </div>
  )
}

export default CustomAlert