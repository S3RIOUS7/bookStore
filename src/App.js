import './App.css';
import { useState } from "react";
import Main from './components/main/Main';
import Header from './components/header/Header';
import { options1, options2 } from './utils/constants/constants.js'
function App() {
  
  const [selectedOrderBy, setSelectedOrderBy] = useState(options2[0]);
  const [selectedCategory, setSelectedCategory] = useState(options1[0]);

  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  
  
  return (
    <div className='app-main-container'>
      <Header setBooks={setBooks} setTotalBooks={setTotalBooks} searchInput={searchInput} setSearchInput={setSearchInput} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} selectedOrderBy={selectedOrderBy} setSelectedOrderBy={setSelectedOrderBy}/>
      <Main setBooks={setBooks} books={books} totalBooks={totalBooks} searchInput={searchInput} setSearchInput={setSearchInput} selectedCategory={selectedCategory} selectedOrderBy={selectedOrderBy}/>
    </div>
  );
}

export default App;