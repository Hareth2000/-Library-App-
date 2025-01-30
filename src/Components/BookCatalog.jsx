import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/BookCatalog.css'; 

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '', imageUrl: '' });
  const [editBookId, setEditBookId] = useState(null);
  const [editTitle, setEditTitle] = useState('');

  const databaseUrl = 'https://reacttest-f00d2-default-rtdb.firebaseio.com/books.json';

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(databaseUrl);
        if (response.data) {
          const booksArray = Object.keys(response.data).map((key) => ({
            id: key,
            ...response.data[key]
          }));
          setBooks(booksArray.filter(book => !book.isDeleted));
        }
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);

  const handleAddBook = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(databaseUrl, newBook);
      setBooks((prevBooks) => [...prevBooks, { id: response.data.name, ...newBook }]);
      setNewBook({ title: '', author: '', description: '', imageUrl: '' });
    } catch (error) {
      console.error('Error adding book:', error);
    }
  };

  const handleSoftDeleteBook = async (id) => {
    try {
      const updatedBook = { isDeleted: true };
      await axios.patch(`https://reacttest-f00d2-default-rtdb.firebaseio.com/books/${id}.json`, updatedBook);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Error soft deleting book:', error);
    }
  };

  const handleEditBook = (id, currentTitle) => {
    setEditBookId(id);
    setEditTitle(currentTitle);
  };

  const handleSaveEdit = async (id) => {
    try {
      await axios.patch(`https://reacttest-f00d2-default-rtdb.firebaseio.com/books/${id}.json`, { title: editTitle });
      setBooks(books.map(book => book.id === id ? { ...book, title: editTitle } : book));
      setEditBookId(null);
      setEditTitle('');
    } catch (error) {
      console.error('Error updating book title:', error);
    }
  };

  return (
    <div className="book-catalog">
      <h2>Book Catalog</h2>
      <form onSubmit={handleAddBook} className="add-book-form">
        <input type="text" placeholder="Title" value={newBook.title} onChange={(e) => setNewBook({ ...newBook, title: e.target.value })} required />
        <input type="text" placeholder="Author" value={newBook.author} onChange={(e) => setNewBook({ ...newBook, author: e.target.value })} required />
        <textarea placeholder="Description" value={newBook.description} onChange={(e) => setNewBook({ ...newBook, description: e.target.value })} required />
        <input type="text" placeholder="Image URL" value={newBook.imageUrl} onChange={(e) => setNewBook({ ...newBook, imageUrl: e.target.value })} />
        <button type="submit">Add Book</button>
      </form>

      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            {editBookId === book.id ? (
              <>
                <input type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                <button onClick={() => handleSaveEdit(book.id)}>Save</button>
              </>
            ) : (
              <>
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>{book.description}</p>
                {book.imageUrl && <img src={book.imageUrl} alt={book.title} />}
                <button onClick={() => handleEditBook(book.id, book.title)}>Edit</button>
                <button onClick={() => handleSoftDeleteBook(book.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCatalog;
