import React from 'react';
import './Modal.css';

export default function Modal({ title, color, location }) {
  return (
    <div className='modalMassage' style={{ border:` 5px solid ${color}`, color: color, right: location }}>
      <p>{title}</p>
    </div>
  );
}
