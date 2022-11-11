
exports.handleSubmit = ({id,rating,comment,booksData,user}) => {
    const userName = user[0].name;
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
