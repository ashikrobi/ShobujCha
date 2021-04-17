import React from "react";
import { Link } from "react-router-dom";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faHome,
  faUserPlus,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
      <ul className="list-unstyled">
        <li>
          <Link to="/" className="text-white">
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/add_review" className="text-white">
            <FontAwesomeIcon icon={faEnvira} /> <span>Add Review</span>
          </Link>
        </li>
        <li>
          <Link to="/tea_variant" className="text-white">
            <FontAwesomeIcon icon={faEnvira} /> <span>Add Tea Variant</span>
          </Link>
        </li>
        <li>
          <Link to="/orderList" className="text-white">
            <FontAwesomeIcon icon={faCartPlus} /> <span>Order List</span>
          </Link>
        </li>
        <li>
          <Link to="/makeAdmin" className="text-white">
            <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
          </Link>
        </li>
      </ul>
      <div>
        <Link to="/" className="text-white">
          <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
