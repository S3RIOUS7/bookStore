import React, { useState } from 'react';
import { options1 } from '../../utils/constants/constants';
import '../popUpMenu/popupmenu.scss'

const PopUpMenu = ({ options, selectedOption, setSelectedOption }) => {
  
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    
  };

  console.log(options1)

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="toggle-button">
        {selectedOption.label} <span>&#9660;</span>
      </button>
      {isOpen && (
        <ul className="menu">
          {options.map((option) => (
            <li key={option.value} onClick={() => handleOptionClick(option.value, option.label)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopUpMenu;