import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";

function Tweet() {
  return (
    <>
      <div className="supreme-container">
        <div className="container" style="width: 100%">
          <div className="row">
            {/* <!--Left sidebar--> */}
            <div className="col-2">
              <LeftSideBar />
            </div>

            {/* <!--Navbar + main content--> */}
            <div className="col-10 gx-3">
              <div className="row">
                <div className="col-8">
                  {/* <%- include ("./partials/navbar") %> */}
                  {/*  <!--main content down here--> */}

                  <div className="tw-block-parent p-4 mt-4">
                    <div className="timeline-TweetList-tweet">
                      <div className="timeline-Tweet">
                        <div className="timeline-Tweet-brand">
                          <div className="Icon Icon--twitter"></div>
                        </div>
                        {/* <!--tweet author--> */}
                        <div className="timeline-Tweet-author">
                          <div className="TweetAuthor">
                            <a className="TweetAuthor-link" href="#channel">
                              <div className="d-inline-block">
                                <span className="TweetAuthor-avatar">
                                  <div className="Avatar d-inline-block">
                                    <img
                                      className="rounded-circle me-2 mb-4"
                                      width="60rem"
                                      src="<%= tweet.author.avatar %>"
                                      alt="testUserAvatar"
                                    />
                                  </div>
                                </span>
                              </div>
                            </a>
                            <div className="d-inline-block">
                              <a href="/user/<%= tweet.author.id %> ">
                                <div className="TweetAuthor-name look-like-link">
                                  <strong>{/* <%= tweet.author.fullname %> */}</strong>
                                </div>

                                <div className="TweetAuthor-screenName">
                                  @{/* <%= tweet.author.username %> */}
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--tweet content--> */}
                        <div className="timeline-Tweet-text">
                          <p className="breakWord">{/* <%= tweet.content %> */}</p>
                        </div>
                        {/* <!--tweet metadata// timeStamp && Twitter Web App(posted from)--> */}
                        <div className="timeline-Tweet-metadata mt-3">
                          <a className="timeline-Tweet-timestamp look-like-link" href="#">
                            {/* <%= createdAt %> */}
                          </a>
                          <span> · </span>
                          <a
                            className="look-like-link"
                            href="https://help.twitter.com/using-twitter/how-to-tweet#source-labels"
                          >
                            Twitter Web App
                          </a>
                        </div>
                        <hr />
                        {/* <!--tweet actions--> */}
                        <div className="timeline-Tweet-actions list-unstyled">
                          <form id="like" action="/tweet/<%= tweet.id %> " method="post"></form>
                          <span className="timeline-Tweet-action">
                            <a
                              className="Icon Icon--heart"
                              onclick="document.getElementById('like').submit(); return false;"
                            >
                              {/* {if (tweet.likes.includes(userId)) { 
                            <a href="/tweetDisiked/tweet._id "
                              ><i className="fas fa-heart likeHeartRed"></i
                            ></a>
                            }else{ 
                            <a href="/tweetLiked/tweet._id "
                              ><i className="fas fa-heart likeHeart"></i
                            ></a>
                            }  */}
                            </a>
                          </span>
                          <span>{/* <%= tweet.likes.length %> */}</span>
                          {/* { if (locals.unauthDelete) { 
                        <div className="alert alert-danger" role="alert">
                           locals.unauthDelete[0] 
                        </div>
                         }  */}{" "}
                          {/* if (userId === tweetId) {
                        <span
                          ><a className="ms-4" href="/deleteTweet/ tweet._id"
                            ><i className="fas fa-trash-alt"></i></a
                        ></span>
                         }  */}
                        </div>
                        {/*  <!--comments--> */}
                      </div>
                    </div>
                  </div>
                  {/*  <!--end main content--> */}
                </div>
                {/*  <!--Right sidebar--> */}
                <div className="col-4 d-none d-lg-block">
                  <RightSideBar />
                </div>
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
