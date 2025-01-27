import React, { useState } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([
        {
            id: 1,
            title: "مقدمة ابن خلدون",
            author: "ابن خلدون",
            isbn: "1289499030"
        },
        {
            id: 2,
            title: "الحاوي في الطب",
            author: "ابو بكر الرازي",
            isbn: "893847239479"
        },
        {
            id: 3,
            title: "كتاب الشفاء",
            author: "ابن سينا",
            isbn: "9782745100321"
        }
    ]);

    // function addBook() {
    //     const newBook = {
    //         id: books.length + 1,
    //         title: "كتاب جديد",
    //         author: "مؤلف جديد",
    //         isbn: "1234567890"
    //     };
    //     setBooks([books, newBook]);
    // }

    return (
        <div className="app">
            <Header className="header" />
            {/* <button onClick={addBook}>إضافة كتاب</button> */}
            <Main books={books} />
            <Footer className="footer" />
        </div>
    );
};

export default App;