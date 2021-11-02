import React from "react";

function SideButtons({ icon, text }) {
  return (
    <li className="nav-item mt-2">
      <div role="button" className="links-leftSide functionallityNotWorking">
        <div className="row">
          <div className="col-12 col-lg-2">
            <i className={icon}></i>
          </div>
          <div className="col-10 collapsable-sidebarleft">{text}</div>
        </div>
      </div>
    </li>
  );
}

export default SideButtons;
