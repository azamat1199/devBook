import React, { useState } from "react";
// import classes from "./signUP.module.css";
import { Link, Redirect } from "react-router-dom";
import signUpImg from "./img/main.svg";
import "../App.css";

export default function SignUp({ setLogged }) {
  const [register, setRegister] = useState(false);

  const [value, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const inputHandler = (e) => {
    const { value, name } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    localStorage.setItem("token", JSON.stringify(value));
    setRegister(true);
    setLogged(true);
  };

  if (register) {
    return <Redirect to="/" />;
  }

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   if (register) {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     if (value.email === token.email && value.password === token.password) {
  //       setLogged(true);
  //       setLogin(true);
  //     } else {
  //       alert("Your password or login is wrong ");
  //       setLogin(false);
  //     }

  //   } else {
  //     alert("Your password is wrong or Token Undefined")
  //   }
  // }

  // if (!login && register) {
  //   console.log("register". login , register);
  //   return <Redirect to= "/signIn"/>;
  // }

  return (
    <div className="upRout">
      <div className="upImg">
        <img className="signUpImg" src={signUpImg} alt="signIn" />
      </div>
      <form className="in__form" onSubmit={submitHandler}>
        <div className="in__form-inner">
          <h1 className="in__form-title">Sign up</h1>
          <p className="in__form-decs">
            Already have an account?
            <Link to="/sign-in" className="link">
              {" "}
              Sign in
            </Link>
          </p>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="firstName"
              placeholder="First Name"
              name="firstName"
              value={value.firstName}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="lastName"
              placeholder="Last Name"
              name="lastName"
              value={value.lastName}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="email"
              placeholder="Email"
              name="email"
              value={value.email}
              onChange={inputHandler}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="password"
              placeholder="Password"
              name="password"
              value={value.password}
              onChange={inputHandler}
              required
            />
          </div>

          <button className="in__form-btn"> Next step</button>
        </div>
      </form>
    </div>
  );
}
