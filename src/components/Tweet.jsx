import React from "react";
import { Link } from "react-router-dom";

function Tweet() {
  const handleOnClick = () => {
    console.log("hola");
  };
  return (
    <div className="tw-block-parent p-4 mt-4">
      <div className="timeline-TweetList-tweet">
        <div className="timeline-Tweet">
          <div className="timeline-Tweet-brand">
            <div className="Icon Icon--twitter"></div>
          </div>
          {/* <!--tweet author--> */}
          <div className="timeline-Tweet-author">
            <div className="TweetAuthor">
              <Link className="TweetAuthor-link" to="#channel">
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
              </Link>
              <div className="d-inline-block">
                <Link to="/user/616d64b9e259d15fa2dcdfa9 ">
                  <div className="TweetAuthor-name look-like-link">
                    <strong>Claudia</strong>
                  </div>

                  <div className="TweetAuthor-screenName">@Ramona_Salcedo72@hotmail.com</div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!--tweet content--> */}
          <div className="timeline-Tweet-text">
            <p className="breakWord">
              Est quaerat voluptatem officia eos qui et impedit corporis. Consequatur eligendi
              rerum. Consequatur ut repellat. Sint rerum neque impedit ut est at pariatur.
            </p>
          </div>
          {/* <!--tweet metadata// timeStamp && Twitter Web App(posted from)--> */}
          <div className="timeline-Tweet-metadata mt-3">
            <Link className="timeline-Tweet-timestamp look-like-link" to="#">
              29/10/2021
            </Link>
            <span> · </span>
            <Link
              className="look-like-link"
              to="https://help.twitter.com/using-twitter/how-to-tweet#source-labels"
            >
              Twitter Web App
            </Link>
          </div>
          <hr />
          {/* <!--tweet actions--> */}
          <div className="timeline-Tweet-actions list-unstyled">
            <form id="like" action="/tweet/<%= tweet.id %> " method="post"></form>
            <span className="timeline-Tweet-action">
              <Link className="Icon Icon--heart" onClick={() => handleOnClick()}>
                {
                  /* tweet.likes.includes(userId) */ true ? (
                    <Link to="/tweetDisiked/tweet._id ">
                      <i className="fas fa-heart likeHeartRed"></i>
                    </Link>
                  ) : (
                    <Link to="/tweetLiked/tweet._id ">
                      <i className="fas fa-heart likeHeart"></i>
                    </Link>
                  )
                }
              </Link>
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
                  <Link className="ms-4" to="/deleteTweet/ tweet._id">
                    <i className="fas fa-trash-alt"></i>
                  </Link>
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
                          ><Link className="ms-4" to="/deleteTweet/ tweet._id"
                            ><i className="fas fa-trash-alt"></i></
                        ></span>
                         }  */}
          </div>
          {/*  <!--comments--> */}
        </div>
      </div>
    </div>
  );
}

export default Tweet;
