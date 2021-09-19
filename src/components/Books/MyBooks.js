import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import Axios from "../../utilis/axios";
import { Link, useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import constants from "../../containers/constants/index";
import { AiOutlineDelete, AiOutlineEdit, AiOutlinePlus } from "react-icons/ai";
import Swal from "sweetalert2";

const Books = React.forwardRef((props, ref) => {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  const handleDelete = async (id) => {
    try {
      const { data } = await Axios.delete(`/books/${id}`);
      if (data) {
        Swal.fire({
          title: "Deleted",
          text: "You deleted the book successfuly",
          icon: "Success",
        });
        fetchBooks();
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "Error",
      });
    }
  };

  const fetchBooks = async () => {
    try {
      const { data } = await Axios("/books/my-books");
      console.log(data);
      if (data.success) {
        setBooks(data.payload);
      }
    } catch (error) {
      console.log(error);
      // Not Working
      throw new Error("It will not work else");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div ref={ref}>
      {!books.length ? (
        <div className="p-5 container bg-light my-5 text-center">
          <h2 className="display-6">Ad your first book</h2>
          <Link to="/books/new" className="btn btn-primary">
            <AiOutlinePlus />
            Add
          </Link>
        </div>
      ) : (
        <div className="row gy-5 my-5">
          {!books.length ? (
            <div className="p-5 container bg-light my-5 text-center">
              <h2 className="display-6">Ad your first book</h2>
              <Link to="/books/new" className="btn btn-primary">
                <AiOutlinePlus />
                Add
              </Link>
            </div>
          ) : (
            <div className="row gy-5 my-5">
              {books.map((item) => {
                const { title, imageLink, _id } = item;
                return (
                  <StyledBookItem
                    key={_id}
                    className="col-md-6 col-lg-4 col-xxl-3"
                  >
                    <div className="card">
                      <img
                        alt={title}
                        className="card-img-top img-fluid"
                        src={imageLink || constants.DEFAULT_BOOK_IMAGE}
                        onError={(e) =>
                          (e.target.src = constants.DEFAULT_BOOK_IMAGE)
                        }
                      />
                      <div className="card-body">
                        <h5 className="card-title">
                          {title.length > 20
                            ? title.slice(0, 17) + "..."
                            : title}
                        </h5>
                      </div>
                      <div className="card-footer d-flex w-100 justify-content-between">
                        <button className="btn btn-sm btn-info">
                          <AiOutlineEdit /> Edit
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(_id)}
                        >
                          <AiOutlineDelete /> Delete
                        </button>
                      </div>
                    </div>
                  </StyledBookItem>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
});

Books.propTypes = {
  ref: PropTypes.objectOf(PropTypes.element),
  props: PropTypes.any,
};

export default Books;
