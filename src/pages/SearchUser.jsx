import React from "react";
import { Link } from "react-router-dom";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import TopNavbar from "../components/TopNavbar";

function SearchUser() {
  return (
    <div className="container">
      <div className="row">
        {/* <!--Left sidebar--> */}
        <div className="col-2">
          <LeftSideBar />
        </div>
        {/*  <!--Navbar + main content--> */}
        <div className="col-10 col-lg-6">
          <TopNavbar text="Search" />
          {/* <!--main content down here--> */}
          <form action="/search-one" method="POST">
            <div className="top-input-tweet">
              <div className="d-flex p-2" style={{ height: 100 + "%" }}>
                <span className="TweetAuthor-avatar">
                  <div className="Avatar ms-2 mt-2">
                    <img
                      className="rounded-circle"
                      width="55rem"
                      src="https://avatars.dicebear.com/api/identicon/.svg"
                      alt="testUserAvatar"
                    />
                  </div>
                </span>
                <div className="ms-3 mt-4" style={{ width: 40 + "em" }}>
                  <input
                    style={{ color: "white" }}
                    type="text"
                    name="username"
                    className="form-control input-tweet-up"
                    placeholder="Ingresa el Username de la persona que quieras seguir"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                </div>
                <button
                  type="submit"
                  className="align-self-end btn rounded-pill btn-twittear me-3 mb-2"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
          {/*   for (let user of allUsers) {  */}
          <div className="singleTweet d-flex justify-content-between">
            <div className="d-flex p-2">
              <span className="TweetAuthor-avatar search-responsive">
                <div className="Avatar ms-2 mt-2">
                  <img
                    className="rounded-circle"
                    width="55rem"
                    src="https://avatars.dicebear.com/api/identicon/.svg"
                    alt="testUserAvatar"
                  />
                </div>
              </span>
              <div className="d-flex flex-column">
                <div className="flex-row w-100 ms-3 mt-2" style={{ height: 2 + "em" }}>
                  <p className="d-inline-flex userFullName search-responsive-smaller text-white">
                    <Link
                      to="/user/616d64b9e259d15fa2dcdfa9 "
                      className="text-decoration-none text-white"
                    >
                      {/*  <%= user.fullname %> */}
                      Claudia
                    </Link>
                  </p>
                  <Link to="/user/616d64b9e259d15fa2dcdfa9 " className="text-decoration-none">
                    <p className="d-inline-flex arroba">
                      @Ramona_Salcedo72@hotmail.com
                      {/* <%= user.username %> */}
                    </p>
                  </Link>
                </div>
                <div className="ms-3 d-flex">
                  <p className="pe-4 tweet-content-container search-responsive-smaller">
                    In maxime laudantium.
                    {/* <%-user.bio%> */}
                  </p>
                </div>
                <div className="d-flex ms-3 mt-3 mb-3"></div>
              </div>
            </div>
            {/* <% if (ownUserFollowings.includes(user.id)) { %> */}
            <form
              className="align-self-center"
              action="/unFollow/616d64b9e259d15fa2dcdfa9"
              method="POST"
            >
              <button
                style={{ backgroundColor: "rgb(204, 204, 204)", color: "black", width: 90 + "px" }}
                type="submit"
                className="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
              >
                Siguiendo
              </button>
            </form>
            {/*    <% } else { %> */}
            {/* <form className="align-self-center" action="/follow/<%-user._id%>" method="POST">
              <button
                style="background-color: white; color: black; width: 90px"
                type="submit"
                className="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
              >
                Seguir
              </button>
            </form> */}
            {/*  <% } %> */}
          </div>
          {/*   <% } %> */}
        </div>
        {/* <!--Right sidebar--> */}
        <div id="rightSidebarContainer" className="col-4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default SearchUser;
