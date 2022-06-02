import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BookDetailsPage from './components/book-details-page/BookDetailsPage';
import BooksPage from './components/books-page/BooksPage';
import Header from './components/header/Header';
import BookmarksPage from './components/bookmarks-page/BookmarksPage';
import BooksSearchPage from './components/books-search-page/BooksSearchPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/books" >
            <Route index element={<BooksPage/>} />
            <Route path=":isbn13" element={<BookDetailsPage/>} />
          </Route>
          <Route path="/bookmarks" element={<BookmarksPage/>}/>
          <Route path="/search" element={<BooksSearchPage/>}/>
          <Route path="*" element={<Navigate to={"/books"}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
