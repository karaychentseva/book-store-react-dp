import './App.css';
import BookDetailsPage from './components/book-details-page/BookDetailsPage';
import BooksPage from './components/books-page/BooksPage';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <BooksPage /> */}
      <BookDetailsPage />
    </div>
  );
}

export default App;
