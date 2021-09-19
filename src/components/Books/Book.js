import React, { useEffect, useState } from "react";
import Axios from "../../utilis/axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { AiOutlinePlus } from "react-icons/ai";
import { StyledBanner } from "../../styles/Books";
import BookItem from "../../components/Books/BookItem";

/////// IMAGE
import Banner from "../../components/img/Banner.svg";
// import Qidirish from "./img/Qidirish.svg";
import Qidirish from "../../components/img/Qidirish.svg";
import Search from "../../components/img/Search.svg";

const Books = React.forwardRef((props, ref) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const { data } = await Axios("/books");
      if (data.succes) {
        setBooks(data.payload.docs);
      }
    } catch (error) {
      console.log(error);
      //Should not work
      throw new Error("It will not work here either");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <StyledBanner ref={ref}>
      <div>
        <img src={Banner} alt="banner" />
        <div className="inp-position">
          <div className="poisk">
            {" "}
            <img src={Qidirish} alt="poisk" />{" "}
          </div>
          <form className="">
            <input
              type="text"
              className="form"
              placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
            />
            <button type="submit" className="search">
              <img src={Search} alt="" /> Search{" "}
            </button>
          </form>
        </div>
        {!books.length ? (
          <div className="p-5 container bg-light my-5 text-center">
            <h2 className="display-6">Add your first book</h2>
            <Link to="/books/new" className="btn btn-primary">
              <AiOutlinePlus />
              Add
            </Link>
          </div>
        ) : (
          <div className="row gy-5 my-5">
            {books.map((item) => (
              <BookItem
                key={item._id}
                id={item._id}
                title={item.title}
                imageLink={item.imageLink}
              />
            ))}
          </div>
        )}
      </div>
    </StyledBanner>
  );
});

Books.propTypes = {
  ref: PropTypes.objectOf(PropTypes.element),
  props: PropTypes.any,
};

export default Books;
