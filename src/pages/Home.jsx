import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import TopNavbar from "../components/TopNavbar";

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>
        <div className="col-10 col-lg-6">
          <TopNavbar text="Home" />
          <form action="/tweetear" method="POST">
            <div className="top-input-tweet">
              <div className="d-flex p-2" style={{ height: "100%" }}>
                <span className="TweetAuthor-avatar">
                  <div className="Avatar ms-2 mt-2">
                    <img
                      className="rounded-circle"
                      width="55rem"
                      height="55rem"
                      src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg"
                      alt="testUserAvatar"
                    />
                  </div>
                </span>
                <div className="d-flex flex-column" style={{ width: "100%" }}>
                  <div className="ps-3 mt-4" style={{ width: "100%" }}>
                    <input
                      style={{ color: "white" }}
                      type="text"
                      name="tweetText"
                      className="form-control input-tweet-up inputNoborder"
                      placeholder="Qué estas pensando?"
                      maxlength="140"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="align-self-end btn rounded-pill btn-twittear me-2 mb-2 mt-2"
                  >
                    Tweettear
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div id="tweetsContainer"></div>
          <input type="hidden" value="<%= userId %>" id="userIdDiv" />
        </div>
        <div id="rightSidebarContainer" className="col-4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
