import React, { useEffect, useState } from "react";
// import classes from "./signIn.module.css";
import ulugbekImg from "./img/ulug.svg";
import "../App.css";
import { useRef } from "react";
import Axios from "../../src/utilis/axios";
import { getValidInputData } from "./../utilis/index";
import { handleErrorObject } from "./../utilis/index";
import Swal from "sweetalert2";

export default function AddBook() {
  const [errors, setErrors] = useState({});
  const [authors, setAuthors] = useState([]);
  const fileRef = useRef();
  const coverImageRef = useRef();

  const [state, setState] = useState({
    author: "",
    imageLink: "",
    password: "",
    title: "",
    link: "",
    price: null,
    pages: null,
    counrty: "",
    language: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios("/authors");
        console.log(data);
        setAuthors(data.payload);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { link, imageLink, ...restData } = state;
      const formDataToSubmit = getValidInputData(restData);

      const formData = new FormData();
      for (let x in formDataToSubmit) {
        formData.append(x, formDataToSubmit[x]); // { name: '12}
      }

      if (fileRef.current.files[0]) {
        formData.append("link", fileRef.current.files[0]);
      }

      if (coverImageRef.current.files[0]) {
        formData.append("IMAGE", coverImageRef.current.files[0]);
      }

      const { data } = await Axios.post("./books", formData);
      console.log(data);
      Swal.fileRef({
        title: "Succesful",
        text: "The Book Created",
        icon: "wWrning",
      });
    } catch (error) {
      const errorData = error.response.data;
      const errorResponse = errorData ? errorData?.msg : errorData;
      console.log(error.response);
      const msg = handleErrorObject(errorResponse);
      setErrors(msg);
    }
  };

  console.log(errors);

  return (
    <div className="InForm">
      <div className="ulug-img">
        <img className="addImg" src={ulugbekImg} />
        <div className="left-footer">
          <h3 className="ulugbek-text">Ulugbek hazinasi</h3>
          <button className="upload">Upload cover</button>
        </div>
      </div>
      <div className="in__form">
        {/* <h2 className={classes.active}>Hello</h2> */}
        <div className="col-right">
          <h2 className="in__form-title">Add Book</h2>
          {/* <p className="in__form-decs">
            Do not you have an account? <Link to="/sign-up">Sign up</Link>{" "}
          </p> */}
          {/* <button onClick={() => setVisible((state) => !state)}>
            {visible ? "Turn off" : "Turn on"}
          </button> */}

          <form
            action=""
            onSubmit={handleSubmit}
            className="form"
            autoComplete="off"
          >
            <div className="form__input-wrapper">
              <input
                className="signInp"
                type="title"
                name="title"
                value={state.email}
                onChange={handleInputChange}
                placeholder="Title"
                autoComplete="title"
              />
            </div>
            <div className="form__input-wrapper">
              <input
                className="signInp"
                type="pages"
                name="pages"
                value={state.email}
                onChange={handleInputChange}
                placeholder="Pages"
                autoComplete="pages"
              />
            </div>
            <div className="form__input-wrapper">
              <input
                className="signInp"
                type="year"
                name="year"
                value={state.email}
                onChange={handleInputChange}
                placeholder="Year"
                autoComplete="Year"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="price"
                name="price"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Price"
                autoComplete="price"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="country"
                name="country"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Country"
                autoComplete="counrty"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <select
                className="signInp"
                type="author"
                name="author"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Author"
                autoComplete="author"
              >
                {authors.map((item) => {
                  const { _id, firstName, lastName } = item;
                  return (
                    <option value={_id} key={_id}>
                      {`${firstName} ${lastName}`}
                    </option>
                  );
                })}
              </select>
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="description"
                name="description"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Description"
                autoComplete="description"
              />
            </div>
            {/* http://book.alitechbot.uz/api/books */}
            <div className="form__input-wrapper">
              <button className="in__form-btn" type="submit">
                Create{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
