
exports.handleSubmit = ({id,rating,comment,booksData,user}) => {
    const userName = user[0].name;
    if (window.localStorage.getItem("reviewBooks")) {
      const reviewData = JSON.parse(window.localStorage.getItem("reviewBooks"));
      if (reviewData[userName]) {
        reviewData[userName][id] = {
          rating:rating,
          comment:comment,
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
      const newReviewObj = {};
      const reviewObj = {};
      reviewObj[id] = {
        rating: rating,
        comment: comment,
        bookID:booksData.isbn13,
        image:booksData.image,
        title:booksData.title
      };
      newReviewObj[userName] = {};
      newReviewObj[userName][id] = {
        rating: rating,
        comment: comment,
        bookID:booksData.isbn13,
        image:booksData.image,
        title:booksData.title
      };
      window.localStorage.setItem("reviewBooks", JSON.stringify(newReviewObj));
    }
  };
