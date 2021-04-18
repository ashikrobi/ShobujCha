import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="d-flex justify-content-between ml-5 mr-5 pb-3">
      <div>
        <h6>
          Copyright &copy; Shobuj<span className="text-success">Cha</span>. All
          rights reserved
        </h6>
      </div>
      <div>
        <Link to={"www.facebook.com"}>
          <FontAwesomeIcon
            className="mr-3"
            style={{ fontSize: "1.8em" }}
            icon={faFacebook}
          />
        </Link>
        <Link to={"www.twitter.com"}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "1.8em" }} />
        </Link>
      </div>
      <div>
        <h6>
          <FontAwesomeIcon icon={faPhoneVolume} />
          +8801558899776
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
