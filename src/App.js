
import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookStore from "./Online_BookStore/Dashboard/BookStore";
import BookDetail from "./Online_BookStore/Dashboard/BookDetail";
import Header from "./Online_BookStore/Header";
import SignUp from "./Online_BookStore/Registration/SignUp";
import Login from "./Online_BookStore/Login/Login";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="Login" element={<Login />} />
            <Route path="bookstore" element={<BookStore />} />
            <Route path="books/:id" element={<BookDetail />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
