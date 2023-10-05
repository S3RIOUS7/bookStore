import {  useState } from "react";
import Input from "../input/Input";
import PopUpMenu from "../popUpMenu/PopUpMenu";
import './header.scss';
import { options1, options2 } from '../../utils/constants/constants.js';
import { fetchBySearchBook } from "../../api/fetchBySearchBook";

function Header({ setBooks }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = async () => {
   const res=await fetchBySearchBook(searchInput, 10);
  setBooks(res.items)
  };

  return (
    <div className="header">
      <div className="headerContainer">
        <h2>Search for the books</h2>
        <Input
        label="Search Books"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
      />
        <div className="popDiscription">
          <h3>Categories</h3> <p><PopUpMenu options={options1}/></p>
          <h3>Sorting by</h3> <p><PopUpMenu options={options2}/></p>
        </div>
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Header;