import React, { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './App.css'; // استيراد ملف CSS

const initState = {
    books: [
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
    ]
};

class App extends Component {
    render() {
        return (
            <div className="app">
                <Header className="header" />
                <Main books={initState.books} />
                <Footer className="footer" />
            </div>
        );
    }
}

export default App;