import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2">
          <LeftSideBar />
        </div>
        <div class="col-10 col-lg-6">
          {/* NAVBAR ACA ***********************************************************************  */}
          <form action="/tweetear" method="POST">
            <div class="top-input-tweet">
              <div class="d-flex p-2" style="height: 100%">
                <span class="TweetAuthor-avatar">
                  <div class="Avatar ms-2 mt-2">
                    <img
                      class="rounded-circle"
                      width="55rem"
                      src="<%= userAvatar %>"
                      alt="testUserAvatar"
                    />
                  </div>
                </span>
                <div class="d-flex flex-column" style="width: 100%">
                  <div class="ps-3 mt-4" style="width: 100%">
                    <input
                      style="color: white"
                      type="text"
                      name="tweetText"
                      class="form-control input-tweet-up inputNoborder"
                      placeholder="Qué estas pensando?"
                      maxlength="140"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                  </div>
                  <button
                    type="submit"
                    class="align-self-end btn rounded-pill btn-twittear me-2 mb-2 mt-2"
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
        <div id="rightSidebarContainer" class="col-4">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default Home;
