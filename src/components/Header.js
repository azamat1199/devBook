import { Link } from "react-router-dom";

import { NavBarItem, StyledHeader } from "./../styles/NavBar";
import badiyat from "./img/Badiiyat.svg";
import shoir from "./img/shoir.svg";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const menu = (
  <Menu>
    <Menu.Item>
      <Link
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        to="/sign-up"
      >
        Sign Up
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        to="/sign-in"
      >
        Sign IN
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
        to="/main-settings"
      >
        Settings
      </Link>
    </Menu.Item>

    <Menu.Item disabled>
      <a rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    </Menu.Item>
    <Menu.Item danger>a danger item</Menu.Item>
  </Menu>
);

export default function Header() {
  return (
    <StyledHeader>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand" to="/home">
              <img src={badiyat} alt="" to="/home" />
            </Link>

            <NavBarItem className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="navLinks" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks" to="/books">
                  Books
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="navLinks" to="/authors">
                  Authors
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks" to="/add-book">
                  Add Book
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navLinks" to="/add-author">
                  Add Author
                </Link>
              </li>
            </NavBarItem>
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <img className="head-img" src={shoir} alt="Author " />{" "}
                <DownOutlined />
              </a>
            </Dropdown>
            {/* <select class="" aria-label="Default select example">
              <option selected>{console.log(shoir)}</option>
              {/* <option value="1"> */}
            {/* <Link to="/sign-up" /> */}
            {/* </option> */}
            {/* <option value="2">
                <Link to="/sign-in" />
              </option> */}
            {/* </select> */}
            {/* <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form> */}
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
}
