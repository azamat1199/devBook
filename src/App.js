import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
  BrowserRouter as Router,
} from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/signUP";
import SignIn from "./components/signIN";
import addBook from "./components/AddBook";
import addAuthor from "./components/AddAuthor";
import Home from "./components/Home";
import MainSettings from "./components/settings/MainSettings";
import Book from "./components/Books/Book";
import { fetchMyBooksActios } from "./Store/actions/bookActions";
import withAuthDetails from "./HOC/withAuthDetails";

// const HeaderWithHoc = withAuthDetails(Header, false);

const initialState = {
  token: null,
  user: {
    lang: "uz",
  },
};

const defaultUser = {
  email: "my@mail.ru",
  firstName: "Mike",
  lastName: "Pampeo",
};

function App() {
  const dispatch = useDispatch();
  const { token, user } = useSelector((state) => state.user);
  console.log(token, user);

  useEffect(() => {
    dispatch(fetchMyBooksActios());
  }, [token, user]);

  const location = useLocation();
  const canRedirectToHome = 
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  if (token) {
    console.log(4444444);
    return (
      <div className="App">
        {/* <HeaderWithHoc /> */}
        {canRedirectToHome ? (
          <Redirect from={["/sign-in", "/sign-up"]} to="/" />
        ) : null}
        <header>
          <Header />
          <Switch>
            <Route component={MainSettings} exact path="/main-settings" />
            <Route component={addBook} exact path="/add-book" />
            <Route component={addAuthor} exact path="/add-author" />
            <Route component={MainSettings} exact path="/main-settings" />
            <Route component={Book} exact path="/book" />
            <Route component={Home} />
          </Switch>
          {/* </Header> */}
        </header>
      </div>
    );
  }
  console.log(999999);
  return (
    <React.Fragment>
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={SignIn} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
