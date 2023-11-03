
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainPage from './pages/mainPage/MainPage';
import BookPage from "./pages/bookPage/BookPage";
function App() {
  
  return (
    <Router>
       <Routes>
      <Route path="/"  element={<MainPage />} />
      <Route path="/bookPage/:bookId" element={<BookPage />} />
    </Routes>
    </Router>
  );
}
  
export default App;