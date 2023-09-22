import React, { useState } from 'react';
import '../popUpMenu/popupmenu.scss'

const PopUpMenu = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="toggle-button">
        {selectedOption || (options.length > 0 ? options[0] : 'Выберите опцию')} <span>&#9660;</span>
      </button>
      {isOpen && (
        <ul className="menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopUpMenu;