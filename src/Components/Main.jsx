import React from 'react';

function Main(props) {
    const { books } = props; 
    return (
        <main>
            {books.map((book) => (
                <div key={book.id} className="card">
                    <h2>{book.title}</h2>
                    <p>المؤلف: {book.author}</p>
                    <p>ISBN: {book.isbn}</p>
                </div>
            ))}
        </main>
    );
}

export default Main;