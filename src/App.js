import './App.css';
import { useState } from "react";
import Main from './components/main/Main';
import Header from './components/header/Header';

function App() {
  
  const [books, setBooks] = useState([]);

  return (
    <div className='app-main-container'>
      <Header setBooks={setBooks} />
      <Main  books={books}/>
    </div>
  );
}

export default App;