import React, { useState, useCallback, useRef, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { signUpAction } from "../../src/Store/actions/authAction";
import Axios from "../utilis/axios";
import signUpImg from "./img/main.svg";
import "../App.css";
import { useDispatch } from "react-redux";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/all";

export default function SignUp(props) {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    phone: "",
    email: "",
    password: "",
    lastName: "",
    firstName: "",
  });

  const [errors, setErrors] = useState({ type: "", message: "" });

  const emailRef = useRef();
  const [visible, setVisible] = useState(null);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({ ...state, [name]: value }));
    },
    [state]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/sign-up", state);
      if (data.success) {
        // Store user data and redirect
        // localStorage.setItem('token', data.token);
        // localStorage.setItem('user', JSON.stringify(data.user));
        dispatch(signUpAction(data));
      } else {
        const msg = handleErrorObject(data?.msg);
        setErrors(msg);
      }
    } catch (err) {
      const msg = handleErrorObject(err.response?.data?.msg);
      setErrors(msg);
    }
  };

  const handleErrorObject = (errorMsg = "") => {
    if (errorMsg.includes("E11000")) {
      return {
        type: "email",
        message: "This user exist. Choose another email!",
      };
    }
    const errorType = errorMsg.slice(
      errorMsg.indexOf('"'),
      errorMsg.lastIndexOf('"')
    );
    return {
      type: errorType.replace('"', "").replace("\\", ""),
      message: errorMsg,
    };
  };

  return (
    <div className="upRout">
      <div className="upImg">
        <img className="signUpImg" src={signUpImg} alt="signIn" />
      </div>
      <form onSubmit={handleSubmit} id="sign-up" className="in__form">
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
              value={state.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="lastName"
              placeholder="Last Name"
              name="lastName"
              value={state.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="phone"
              placeholder="Phone"
              name="phone"
              value={state.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              className="up-input"
              type="email"
              placeholder="Email"
              name="email"
              ref={emailRef}
              value={state.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="in__form-inputbox">
            <input
              type={visible ? "text" : "password"}
              className="up-input"
              type="password"
              placeholder="Password"
              name="password"
              value={state.password}
              onChange={handleInputChange}
              required
            />
            <button
              onClick={() => setVisible((state) => !state)}
              className="in__form-btn"
            >
              Next step
              {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

// const [register, setRegister] = useState(false);

// const , setValue] = useState({
//   firstName: "",
//   lastName: "",
//   email: "",
//   phone: "",
//   password: "",
// });

// const inputHandler = (e) => {
//   const { value, name } = e.target;
//   setValue((prevState) => ({ ...prevState, [name]: value }));
// };

// const submitHandler = (e) => {
//   e.preventDefault();
//   localStorage.setItem("token", JSON.stringify(value));
//   setRegister(true);
//   setLogged(true);
// };

// if (register) {
//   return <Redirect to="/" />;
// }

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

// function signUp(event) {
//   event.preventDefault();

//   const bookForm = document.getElementById("sign-up");
//   const { email, password, firstName, lastName, phone } = bookForm;
//   const users = {
//     email: email.value,
//     password: password,
//     value,
//     firstName: firstName.value,
//     lastName: lastName.value,
//     phone: phone.value,
//   };

// console.log(user);
//   var requestOptions = {};
// }
