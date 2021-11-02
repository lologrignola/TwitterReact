import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

function Tweet() {
  const handleOnClick = () => {
    console.log("hola");
  };
  return (
    <>
      <div className="supreme-container">
        <div className="container" style={{ width: 100 + "%" }}>
          <div className="row">
            {/* <!--Left sidebar--> */}
            <div className="col-2">{/* <LeftSideBar /> */}</div>

            {/* <!--Navbar + main content--> */}
            <div className="col-10 gx-3">
              <div className="row">
                <div className="col-8">
                  {/* <%- include ("./partials/navbar") %> */}
                  {/*  <!--main content down here--> */}

                  <Tweet />
                  {/*  <!--end main content--> */}
                </div>
                {/*  <!--Right sidebar--> */}
                <div className="col-4 d-none d-lg-block">{/* <RightSideBar /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--modals// start-->

    <%- include ("./partials/twittearModal") %>

    <!--modals // end-->
    <%- include ("./partials/scripts") %> */}
    </>
  );
}

export default Tweet;
