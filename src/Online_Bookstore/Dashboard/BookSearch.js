import React, { useState } from "react";
import { Form } from "react-bootstrap";
import useFetch from "../CustomHooks/useFetch";
import BooksView from "./BooksView";


const BookSearch = (props) => {
  const [search, setSearch] = useState("");
  const [searchedBook, setSearchedBook] = useState([]);
  const { booksData } = useFetch(
    `https://api.itbook.store/1.0/search/${search}`
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!search) {
      props.getBookData();
    } else {
      setSearchedBook(booksData.books);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
          <input
              type="text"
              onChange={handleChange}
              placeholder="search for books"
          />
      </Form>
      
      {searchedBook.map(({ isbn13, title }) => (
        <BooksView isbn13={isbn13} title={title} />
      ))}
    </>
  );
};

export default BookSearch;
