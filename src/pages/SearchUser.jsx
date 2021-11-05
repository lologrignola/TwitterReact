import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonFlwUnf from "../components/BtnFlwUnf";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import TopNavbar from "../components/TopNavbar";

function SearchUser() {
  const token = useSelector((state) => state.user.token);
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/users/${searchValue}`,
        {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        },
      );
      console.log(response);
      setUsers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }, [searchValue]);
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
          <form>
            <div className="top-input-tweet">
              <div className="d-flex p-2" style={{ height: 100 + "%" }}>
                <span className="TweetAuthor-avatar mt-2">
                  <svg
                    fill="#f1f1f1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="50px"
                    height="50px"
                  >
                    <path d="M 21 3 C 11.6 3 4 10.6 4 20 C 4 29.4 11.6 37 21 37 C 24.354553 37 27.47104 36.01984 30.103516 34.347656 L 42.378906 46.621094 L 46.621094 42.378906 L 34.523438 30.279297 C 36.695733 27.423994 38 23.870646 38 20 C 38 10.6 30.4 3 21 3 z M 21 7 C 28.2 7 34 12.8 34 20 C 34 27.2 28.2 33 21 33 C 13.8 33 8 27.2 8 20 C 8 12.8 13.8 7 21 7 z" />
                  </svg>
                </span>
                <div className="ms-3 mt-4 pe-5" style={{ width: 40 + "em" }}>
                  <input
                    style={{ color: "white" }}
                    type="text"
                    name="username"
                    className="form-control input-tweet-up"
                    placeholder="Ingresa el Username de la persona que quieras seguir"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    value={searchValue}
                    onChange={(ev) => setSearchValue(ev.target.value)}
                  />
                </div>
              </div>
            </div>
          </form>
          {/*   for (let user of allUsers) {  */}
          {users.map((user) => (
            <div className="singleTweet d-flex justify-content-between">
              <div className="d-flex p-2">
                <span className="TweetAuthor-avatar search-responsive">
                  <div className="Avatar ms-2 mt-2">
                    <img
                      className="rounded-circle"
                      width="55rem"
                      src={user.avatar}
                      alt="testUserAvatar"
                    />
                  </div>
                </span>
                <div className="d-flex flex-column">
                  <div className="flex-row w-100 ms-3 mt-2" style={{ height: 2 + "em" }}>
                    <p className="d-inline-flex userFullName search-responsive-smaller text-white">
                      <Link to={`/profile/${user._id}`} className="text-decoration-none text-white">
                        {user.fullname}
                      </Link>
                    </p>
                    <Link to={`/profile/${user._id}`} className="text-decoration-none">
                      <p className="d-inline-flex arroba">@{user.username}</p>
                    </Link>
                  </div>
                  <div className="ms-3 d-flex">
                    <p className="pe-4 tweet-content-container search-responsive-smaller">
                      {user.bio}
                    </p>
                  </div>
                  <div className="d-flex ms-3 mt-3 mb-3"></div>
                </div>
              </div>
              <div className="mt-4">
                <ButtonFlwUnf userId={user._id} />
              </div>
            </div>
          ))}
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
