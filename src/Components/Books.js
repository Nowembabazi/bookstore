import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/books';
import Book from './Book';
import AddNewBook from './AddNewBook';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line
  }, []);
  const books = useSelector((state) => state.handleBook.entities);
  return (
    <>
      <div className="book-shelf">
        {
          books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))
        }
      </div>
      <AddNewBook />
    </>
  );
}

export default Books;
