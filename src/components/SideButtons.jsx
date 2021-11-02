import React from "react";
import { Link } from "react-router-dom";

function SideButtons({ icon, text, link }) {
  return (
    <li className="nav-item mt-2">
      <Link to={link} style={{ textDecoration: "inherit" }}>
        <div role="button" className="links-leftSide functionallityNotWorking">
          <div className="row">
            <div className="col-12 col-lg-2">
              <i className={icon}></i>
            </div>
            <div className="col-10 collapsable-sidebarleft">{text}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SideButtons;
