import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedOrderBy,
  setSelectedCategory,
  setBooks,
  setTotalBooks,
  setSearchInput,
} from "../../redux/actions";
import Input from "../input/Input";
import PopUpMenu from "../popUpMenu/PopUpMenu";
import { options1, options2 } from '../../utils/constants/constants.js';
import { fetchBySearchBook } from '../../api/fetchBySearchBook'
import '../header/header.scss'

function Header() {
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const searchInput = useSelector((state) => state.searchInput);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    const res = await fetchBySearchBook(searchInput, 10, selectedOrderBy, selectedCategory);
    dispatch(setBooks(res.items));
    dispatch(setTotalBooks(res.totalItems));
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h2>Search for the books</h2>
        <Input
          label="Search Books"
          value={searchInput}
          onChange={(e) => dispatch(setSearchInput(e.target.value))}
          type="text"
        />
        <div className="popDiscription">
          <h3>Categories</h3>
          <PopUpMenu
            options={options1}
            selectedOption={selectedCategory}
            setSelectedOption={(option) => dispatch(setSelectedCategory(option))}
          />
          <h3>Sorting by</h3>
          <PopUpMenu
            options={options2}
            selectedOption={selectedOrderBy}
            setSelectedOption={(option) => dispatch(setSelectedOrderBy(option))}
          />
        </div>
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}

export default Header;