import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
// import classes from "./signIn.module.css";
import ulugbekImg from "./img/ulug.svg";
import "../App.css";

export default function AddBook() {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(null);
  const [users, setUsers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    console.log("I am effect");
    if (visible) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((err) => {
          console.error(err);
        });
    }
  }, [visible, state.email]);

  useEffect(() => {
    console.log("I am effect");
    const focusMethod = () => {
      console.log("Focused");
    };
    window.addEventListener("focus", focusMethod);
    return () => window.removeEventListener("focus", focusMethod);
  }, [visible, state.email]);

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

          <form action="" className="form" autoComplete="off">
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
              <input
                className="signInp"
                type="author"
                name="author"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Author"
                autoComplete="author"
              />
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
