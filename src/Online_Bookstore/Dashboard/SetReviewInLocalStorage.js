exports.handleSubmit = ({id,rating,comment}) => {
    const getBookData = window.localStorage.getItem("user_login");
    const userData = JSON.parse(getBookData);
    const userName = userData[0].name;
    if (window.localStorage.getItem("reviewBooks")) {
      const reviewData = JSON.parse(window.localStorage.getItem("reviewBooks"));
      if (reviewData[userName]) {
        reviewData[userName][id] = {
          rating: rating,
          comment: comment,
        };
      } else {
        reviewData[userName] = {};
        reviewData[userName][id] = {
          rating: rating,
          comment: comment,
        };
      }

      window.localStorage.setItem("reviewBooks", JSON.stringify(reviewData));
    } else {
      const obj = {};
      const obj1 = {};
      obj1[id] = {
        rating: rating,
        comment: comment,
      };
      obj[userName] = {};
      obj[userName][id] = {
        rating: rating,
        comment: comment,
      };
      window.localStorage.setItem("reviewBooks", JSON.stringify(obj));
    }
  };
