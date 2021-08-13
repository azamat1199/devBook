import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import avloniyImg from "./img/avloniy.svg";
import "../App.css";

export default function SignIn(props) {
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
        .then((res) => res.json(  ))
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
      <div className="avloniy-img">
        <img className="add-author-img" src={avloniyImg} />
        <div className="left-footer">
          <h3 className="ulugbek-text">Ulugbek hazinasi</h3>
          <button className="upload">Upload image</button>
        </div>
      </div>
      <div className="add-form">
        {/* <h2 className={classes.active}>Hello</h2> */}
        <div className="col-right">
          <h2 className="in__form-title"> Add author</h2>
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
                type="text"
                name="firstName"
                value={state.email}
                onChange={handleInputChange}
                placeholder="First name"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="text"
                name="last name"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Last name"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="date"
                name="date "
                value={state.password}
                onChange={handleInputChange}
                placeholder="Date of birth"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="date"
                name="date "
                value={state.password}
                onChange={handleInputChange}
                placeholder="Date of death"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="text"
                name="country"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Country"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="text"
                name="bio"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Bio"
              />
            </div>
            <div className="form__input-wrapper">
              <button className="create-btn" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
