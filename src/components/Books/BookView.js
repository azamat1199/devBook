import React, { useEffect, useState } from "react";
import Axios from "../../utilis/axios";
import { useParams } from "react-router";

const baseUrl = "https://book.alitechbot.uz";

export default function BookView() {
  const [book, setBook] = useState({
    comment: [],
    book: {
      author: {},
    },
  });

  const params = useParams();

  const fetchBook = async () => {
    try {
      const { data } = await Axios(`/book/${params.id}`);
      if (data.success) {
        setBook(data.payload);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const { imageLink, title, description = "", updateAt } = book.book;

  return (
    <div>
      <div className="card mb-3 my-5">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={imageLink ? imageLink : constants.DEFAULT_BOOK_IMAGE}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description?.length > 225
                  ? description?.slice(0, 225) + "..."
                  : description}
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {new Date(updatedAt).toLocaleDateString()}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="lead">{description}</p>
    </div>
  );
}
