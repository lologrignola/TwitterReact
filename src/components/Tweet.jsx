import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ButtonFlwUnf from "./BtnFlwUnf";
import LikeButton from "./LikeButton";
import BtnDeleteTweet from "./BtnDeleteTweet";

function Tweet({ tweet }) {
  const user = useSelector((state) => state.user);
  const fechaNueva = new Date(Date.parse(tweet.createdAt));
  const createdAt = `${fechaNueva.getDate()}-${
    fechaNueva.getMonth() + 1
  }-${fechaNueva.getFullYear()}`;

  const handleOnClick = () => {};
  return (
    <div className="tw-block-parent p-4">
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
                        src={tweet.author.avatar}
                        alt="testUserAvatar"
                      />
                    </div>
                  </span>
                </div>
              </Link>
              <div className="d-inline-block">
                <Link to={`/user/${tweet.author._id}`}>
                  <div className="TweetAuthor-name look-like-link">
                    <strong>{tweet.author.fullname}</strong>
                  </div>

                  <div className="TweetAuthor-screenName">@{tweet.author.username}</div>
                </Link>
              </div>
            </div>
          </div>
          {/* <!--tweet content--> */}
          <ButtonFlwUnf userId={tweet.author._id} />
          <Link className="TweetAuthor-link" to={`/tweet/${tweet._id}`}>
            <div className="timeline-Tweet-text">
              <p className="breakWord">{tweet.content}</p>
            </div>
          </Link>
          {/* <!--tweet metadata// timeStamp && Twitter Web App(posted from)--> */}
          <div className="timeline-Tweet-metadata mt-3">
            <Link className="timeline-Tweet-timestamp look-like-link" to="#">
              {createdAt}
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
            <span className="timeline-Tweet-action d-flex justify-content-between">
              <span className="ms-3 d-flex">
                {" "}
                <LikeButton likes={tweet.likes} tweetId={tweet._id} />
                {tweet.likes.length}
              </span>

              {tweet.author._id === user.id && (
                <span>
                  <BtnDeleteTweet tweetId={tweet._id} />
                </span>
              )}
            </span>
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
