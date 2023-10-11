import './App.css';
import { useState } from "react";
import Main from './components/main/Main';
import Header from './components/header/Header';

function App() {
  
  const [books, setBooks] = useState([]);
  const [totalBooks, setTotalBooks] = useState(0);
  const [searchInput, setSearchInput] = useState("");
  
  return (
    <div className='app-main-container'>
      <Header setBooks={setBooks} setTotalBooks={setTotalBooks} searchInput={searchInput} setSearchInput={setSearchInput} />
      <Main setBooks={setBooks} books={books} totalBooks={totalBooks} searchInput={searchInput} setSearchInput={setSearchInput} />
    </div>
  );
}

export default App;