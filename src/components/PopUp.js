import React from 'react'
import './PopUp.css';

function PopUp({ children, onClose, saveTodo}) {
  return (
  <div className='pop-up'>
    <div>
      {children}
      <div className="button-group">
        <button className="cancel" onClick={onClose}>CANCEL</button>
        <button className="apply" onClick={saveTodo}>APPLY</button>
      </div>
    </div>
  </div>
  )
}

export default PopUp