
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import BookPage from "./pages/bookPage/BookPage";
import Header from "./components/header/Header";
function App() {
  
  return ( 
    <Fragment> 
    <Header />
    <Router>
     <Routes>
      <Route path="/"  element={<MainPage />} />
      <Route path="/bookPage/:bookId" element={<BookPage />} />
    </Routes>
    </Router>
    </Fragment>
  );
}
  
export default App;