import React from 'react';
import '../input/input.scss'
import searchIcon from '../../assets/img/search.png'


const Input = ({ label, value, onChange, type, onButtonClick  }) => {

  const changeHandler = (e) =>{
    onChange?.(e.target.value)
  }

  return (
    <div className="input-container">
      
      <input type={type} value={value} onChange={changeHandler}  placeholder={label} className='inputField' />
      <button onClick={onButtonClick} className="search-button">
        <img src={searchIcon} alt="Search" /></button>
    </div>
  );
};

export default Input;