import React from "react";
import { Link } from "react-router-dom";
import { Popover, OverlayTrigger } from "react-bootstrap";

function SideButtons({ icon, text, link, working }) {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>
        {" "}
        <h6 className="text-black">Sorry! &#128546;</h6>{" "}
      </Popover.Header>
      <Popover.Body>This functionallity wasn't required when building this proyect.</Popover.Body>
    </Popover>
  );
  return (
    <>
      {working === "functionallityNotWorking" ? (
        <li className="nav-item mt-2">
          <Link to={link} style={{ textDecoration: "inherit" }}>
            <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover}>
              <div role="button" className={`links-leftSide ${working}`}>
                <div className="row">
                  <div className="col-12 col-lg-2">
                    <i className={icon}></i>
                  </div>
                  <div className="col-10 collapsable-sidebarleft">{text}</div>
                </div>
              </div>
            </OverlayTrigger>
          </Link>
        </li>
      ) : (
        <li className="nav-item mt-2">
          <Link to={link} style={{ textDecoration: "inherit" }}>
            <div role="button" className={`links-leftSide ${working}`}>
              <div className="row">
                <div className="col-12 col-lg-2">
                  <i className={icon}></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">{text}</div>
              </div>
            </div>
          </Link>
        </li>
      )}
    </>
  );
}

export default SideButtons;
