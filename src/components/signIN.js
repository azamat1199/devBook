import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useRef,
  useContext,
} from "react";
import {
  useHistory,
  Link,
  useLocation,
  useParams,
  Prompt,
} from "react-router-dom";
import Axios from "../../src/utilis/axios";
import GlobalContext from "../Context/GlobalContext";
import { useDispatch, useSelector } from "react-redux";
import { updGlobalContextateUserAction } from "../Store/actions/userActions";
import { updateUserAction } from "../Store/actions/userActions";
import signInImg from "./img/signIn.svg";
import "../App.css";

export default function SignIn(props) {
  const context = useContext(GlobalContext);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [state, setState] = useState({
    email: "my@mail.ru",
    password: "123456",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();
  const emailRef = useRef();
  const [visible, setVisible] = useState(false);

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({ ...state, [name]: value }));
    },
    [state]
  );

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await Axios.post("/login", state);
      if (!data.success) {
        return setErrorMsg(data.msg);
      }
      // Store user data and redirect
      const { token, user } = data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch(updateUserAction({ user, token }));
      context.setAuthDetails(data);
    } catch (err) {
      console.log(err.response);

      setErrorMsg(err.response.data.msg);
    }
  };

  console.log(errorMsg);

  return (
    <div className="InForm">
      <div className="upImg  inImg">
        <img className="signInImg" src={signInImg} />
      </div>
      <div className="in__form">
        {/* <h2 className={classes.active}>Hello</h2> */}
        <div className="col-right">
          <h2 className="in__form-title"> Sign In</h2>
          <p className="in__form-decs">
            Do not you have an account? <Link to="/sign-up">Sign up</Link>{" "}
          </p>
          {/* <button onClick={() => setVisible((state) => !state)}>
            {visible ? "Turn off" : "Turn on"}
          </button> */}

          <form
            onSubmit={handleSignIn}
            action=""
            className="form"
            autoComplete="off"
          >
            <div className="form__input-wrapper">
              <input
                className="signInp"
                type="text"
                name="email"
                value={state.email}
                onChange={handleInputChange}
                placeholder="Your email"
                autoComplete="new-email"
              />
            </div>
            <div classNamee="form__input-wrapper">
              <input
                className="signInp"
                type="password"
                name="password"
                value={state.password}
                onChange={handleInputChange}
                placeholder="Your password"
                autoComplete="new-password"
              />
            </div>
            <div className="form__input-wrapper">
              <button className="in__form-btn" type="submit">
                Next step
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// ============== ????????? skolko lyudey podalo zayavku i eto posledneye intervyu

// const [state, setState] = useState({
//   email: "",
//   password: "",
// });
// const [visible, setVisible] = useState(null);
// const [users, setUsers] = useState([]);

// const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setState((prevState) => ({ ...prevState, [name]: value }));
// };

// useEffect(() => {
//   console.log("I am effect");
//   if (visible) {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data))
//       .catch((err) => {
//         console.error(err);
//       });
//   }
// }, [visible, state.email]);

// useEffect(() => {
//   console.log("I am effect");
//   const focusMethod = () => {
//     console.log("Focused");
//   };
//   window.addEventListener("focus", focusMethod);
//   return () => window.removeEventListener("focus", focusMethod);
// }, [visible, state.email]);
