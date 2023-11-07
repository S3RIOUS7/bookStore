import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedOrderBy,
  setSelectedCategory,
  setSearchInput,
} from "../../redux/actions";
import{fetchBooks} from '../../redux/asyncActions'
import Input from "../input/Input";
import PopUpMenu from "../popUpMenu/PopUpMenu";
import { options1, options2 } from '../../utils/constants/constants.js';

import Loading from "../loading/Loading";
import '../header/header.scss'

function Header() {
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);
  const selectedCategory = useSelector((state) => state.selectedCategory);// useSelector получаю значение из редакс-состояние
  const searchInput = useSelector((state) => state.searchInput);

  const loading = useSelector((state) => state.loading);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchBooks(searchInput, 10, selectedOrderBy, selectedCategory));
  };
  const setValueInput = (str) => {
    dispatch(setSearchInput(str))
  }
  const setCategory = (option) => {
    dispatch(setSelectedCategory(option))
  }

  const setOrderBy = (option) => {
    dispatch(setSelectedOrderBy(option))
  }

  return (
    <div className="header">
      <div className="headerContainer">
        <h2>Search for the books</h2>
        <Input
          label="Search Books"
          value={searchInput}
          onChange={setValueInput}
          type="text"
          onButtonClick={handleSearch}
        />
        {loading ? (
          <Loading /> // Отображаем анимацию загрузки при активной загрузке
        ) : (
          <button onClick={handleSearch}>Search</button>
        )}
        <div className="popDiscription">
          <h3>Categories</h3>
          <PopUpMenu
            options={options1}
            selectedOption={selectedCategory}
            setSelectedOption={setCategory}
          />
          <h3>Sorting by</h3>
          <PopUpMenu
            options={options2}
            selectedOption={selectedOrderBy}
            setSelectedOption={setOrderBy}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;