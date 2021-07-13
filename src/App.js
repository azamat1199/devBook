import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import SignUp from "./components/signUP";
import SignIn from "./components/signIN";
import addBook from "./components/AddBook";
import addAuthor from "./components/AddAuthor";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
        <NavLink to="/add-author">Add Author</NavLink>
      </header>
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={addBook} exact path="/add-book" />
        <Route component={addAuthor} exact path="/add-author" />
        {/* <Route component={SignIn} /> */}
      </Switch>
    </div>
  );
}

export default App;
