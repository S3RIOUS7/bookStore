import React, { useState } from "react";
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
import Loading from "../loading/Loading";
import '../header/header.scss'

function Header() {
  const selectedOrderBy = useSelector((state) => state.selectedOrderBy);
  const selectedCategory = useSelector((state) => state.selectedCategory);
  const searchInput = useSelector((state) => state.searchInput);

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = async () => {

    setLoading(true);
    const res = await fetchBySearchBook(searchInput, 10, selectedOrderBy, selectedCategory);
    dispatch(setBooks(res.items));
    dispatch(setTotalBooks(res.totalItems));
    setLoading(false);
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
            setSelectedOption={(option) => dispatch(setSelectedCategory(option))}
          />
          <h3>Sorting by</h3>
          <PopUpMenu
            options={options2}
            selectedOption={selectedOrderBy}
            setSelectedOption={(option) => dispatch(setSelectedOrderBy(option))}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;