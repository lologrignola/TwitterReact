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
                                      src="https://avatars.dicebear.com/api/identicon/.svg"
                                      alt="testUserAvatar"
                                    />
                                  </div>
                                </span>
                              </div>
                            </a>
                            <div className="d-inline-block">
                              <a href="/user/616d64b9e259d15fa2dcdfa9 ">
                                <div className="TweetAuthor-name look-like-link">
                                  <strong>Claudia</strong>
                                </div>

                                <div className="TweetAuthor-screenName">
                                  @Ramona_Salcedo72@hotmail.com
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        {/* <!--tweet content--> */}
                        <div className="timeline-Tweet-text">
                          <p className="breakWord">
                            Est quaerat voluptatem officia eos qui et impedit corporis. Consequatur
                            eligendi rerum. Consequatur ut repellat. Sint rerum neque impedit ut est
                            at pariatur.
                          </p>
                        </div>
                        {/* <!--tweet metadata// timeStamp && Twitter Web App(posted from)--> */}
                        <div className="timeline-Tweet-metadata mt-3">
                          <a className="timeline-Tweet-timestamp look-like-link" href="#">
                            29/10/2021
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
                            <a className="Icon Icon--heart" onClick={() => handleOnClick()}>
                              {
                                /* tweet.likes.includes(userId) */ true ? (
                                  <a href="/tweetDisiked/tweet._id ">
                                    <i className="fas fa-heart likeHeartRed"></i>
                                  </a>
                                ) : (
                                  <a href="/tweetLiked/tweet._id ">
                                    <i className="fas fa-heart likeHeart"></i>
                                  </a>
                                )
                              }
                            </a>
                          </span>
                          <span>{/* <%= tweet.likes.length %> */}</span>
                          {
                            /* (locals.unauthDelete) */ false && (
                              <div className="alert alert-danger" role="alert">
                                locals.unauthDelete[0]
                              </div>
                            )
                          }
                          {
                            /* (userId === tweetId)*/ true && (
                              <span>
                                <a className="ms-4" href="/deleteTweet/ tweet._id">
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </span>
                            )
                          }
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
