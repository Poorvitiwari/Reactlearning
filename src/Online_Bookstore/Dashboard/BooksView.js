import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
const BooksView = ({isbn13,title,image}) => {
  return (
    <React.Fragment >
          <Card style={{ width: "28rem" }} >
            <Link to={`/books/${isbn13}`}>
             { image && <img src={image} alt="Books" /> }
              <div className="bottom">
                <h3>{title}</h3>
              </div>
            </Link>
          </Card>
    </React.Fragment>
  );
};

export default BooksView;
