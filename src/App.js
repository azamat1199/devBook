import React from "react";
import { Provider } from "react-redux";
import { Route, Switch, NavLink } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./components/signUP";
import SignIn from "./components/signIN";
import addBook from "./components/AddBook";
import addAuthor from "./components/AddAuthor";
import Home from "./components/Home";
import "./App.css";
import MainSettings from "./components/settings/MainSettings";

// import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header>
          <Switch>
            <Route component={MainSettings} exact path="/main-settings" />
          </Switch>
          <MainSettings />
        </Header>
        {/* <Home></Home> */}
        {/* <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
        <NavLink to="/sign-in">Sign in</NavLink>
        <NavLink to="/add-book">Add Book</NavLink>
        <NavLink to="/add-author">Add Author</NavLink> */}
      </header>
      <Switch>
        <Route component={SignIn} exact path="/sign-in" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={addBook} exact path="/add-book" />
        <Route component={addAuthor} exact path="/add-author" />
        <Route component={MainSettings} exact path="/main-settings" />
        <Route component={Home} />
      </Switch>
    </div>
  );
}

export default App;
