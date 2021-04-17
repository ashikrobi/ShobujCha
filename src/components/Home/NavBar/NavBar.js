import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import teaLogo from "../../../images/green-tea.png";

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
        <p className="navbar-brand">
          {" "}
          <img style={{ height: "64px" }} src={teaLogo} alt="" /> ShobujCha
        </p>
        {loggedInUser.email && <h5 className="mr-2">{loggedInUser.name}</h5>}
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="admin">
                ADMIN
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </li>
            <li className="nav-item">
              {loggedInUser.email && (
                <button
                  className="btn btn-outline-danger"
                  onClick={() => setLoggedInUser({})}
                >
                  Sign Out
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
