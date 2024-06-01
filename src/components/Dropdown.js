import React, { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown-container">
      <button className="dropdown-btn" onClick={toggleDropdown}>
        ALL <span className="caret">{isOpen ? <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.63077 1L8 4" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/><path d="M1.26154 4L4.63077 1" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/></svg>: <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.63077 4L1.26154 1" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 1L4.63077 4" stroke="#F7F7F7" stroke-linecap="round" stroke-linejoin="round"/></svg>}</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>All</li>
          <li>Complete</li>
          <li>Incomplete</li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
