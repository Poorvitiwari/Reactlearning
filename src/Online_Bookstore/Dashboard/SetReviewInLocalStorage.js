
exports.handleSubmit = ({id,rating,comment,booksData}) => {
    const getBookData = window.localStorage.getItem("user_login");
    const userData = JSON.parse(getBookData);
    const userName = userData[0].name;
    console.log("HERE",booksData.isbn13);
    console.log(id);
    if (window.localStorage.getItem("reviewBooks")) {
      const reviewData = JSON.parse(window.localStorage.getItem("reviewBooks"));
      if (reviewData[userName]) {
        reviewData[userName][id] = {
          
          rating: rating,
          comment: comment,
          bookID:booksData.isbn13,
          image:booksData.image,
          title:booksData.title
        };
      } else {
        reviewData[userName] = {};
        reviewData[userName][id] = {
          rating: rating,
          comment: comment,
          bookID:booksData.isbn13,
          image:booksData.image,
          title:booksData.title
        };
      }

      window.localStorage.setItem("reviewBooks", JSON.stringify(reviewData));
    } else {
      const obj = {};
      const obj1 = {};
      obj1[id] = {
        rating: rating,
        comment: comment,
        bookID:booksData.isbn13,
        image:booksData.image,
        title:booksData.title
      };
      obj[userName] = {};
      obj[userName][id] = {
        rating: rating,
        comment: comment,
        bookID:booksData.isbn13,
        image:booksData.image,
        title:booksData.title
      };
      window.localStorage.setItem("reviewBooks", JSON.stringify(obj));
    }
  };
