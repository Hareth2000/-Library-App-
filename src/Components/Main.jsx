import React, { Component } from 'react';

class Main extends Component {
    render() {
        const { books } = this.props;
        return (
            <main>
                {books.map(book => (
                    <div key={book.id} className="card">
                        <h2>{book.title}</h2>
                        <p>المؤلف: {book.author}</p>
                        <p>ISBN: {book.isbn}</p>
                    </div>
                ))}
            </main>
        );
    }
}

export default Main;