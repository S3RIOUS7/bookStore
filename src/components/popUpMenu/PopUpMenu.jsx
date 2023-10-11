import React, { useState } from 'react';
import '../popUpMenu/popupmenu.scss'

const PopUpMenu = ({ options, selectedOption, setSelectedOption }) => {
  
  const [isOpen, setIsOpen] = useState(false);
 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // console.log(setSelectedOption)
  };

  
  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="toggle-button">
        {selectedOption || (options.length > 0 ? options[0] : 'Выберите опцию')} <span>&#9660;</span>
      </button>
      {isOpen && (
        <ul className="menu">
          {options.map((option) => (
            <li key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PopUpMenu;