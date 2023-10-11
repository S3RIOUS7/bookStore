import {  useState } from "react";
import Input from "../input/Input";
import PopUpMenu from "../popUpMenu/PopUpMenu";
import './header.scss';
import { options1, options2 } from '../../utils/constants/constants.js';
import { fetchBySearchBook } from "../../api/fetchBySearchBook";

function Header({ setBooks, setTotalBooks, searchInput, setSearchInput }) {
  const [selectedOrderBy, setSelectedOrderBy] = useState(options2[0]);
  const [selectedCategory, setSelectedCategory] = useState(options1[0]);


  const handleSearch = async () => {
  
  const res=await fetchBySearchBook(searchInput, 10, selectedOrderBy, selectedCategory);
  setBooks(res.items)
  setTotalBooks(res.totalItems);  
 
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
          <h3>Categories</h3> <PopUpMenu options={options1} 
           selectedOption={selectedCategory}
           setSelectedOption={setSelectedCategory}
          />
          <h3>Sorting by</h3> <PopUpMenu
              options={options2}
              selectedOption={selectedOrderBy}
              setSelectedOption={setSelectedOrderBy}
            />
        </div>
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
     
    </div>
  );
}

export default Header;