import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Tweet({ tweet }) {
  const user = useSelector((state) => state.user);
  console.log(tweet);
  const fechaMalFormato = Date.parse(tweet.createdAt);

  const fechaNueva = new Date(fechaMalFormato);
  console.log(fechaNueva);
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
          <Link className="TweetAuthor-link" to={`/tweet/${tweet._id}`}>
            <div className="timeline-Tweet-text">
              <p className="breakWord">{tweet.content}</p>
            </div>
          </Link>
          {/* <!--tweet metadata// timeStamp && Twitter Web App(posted from)--> */}
          <div className="timeline-Tweet-metadata mt-3">
            <Link className="timeline-Tweet-timestamp look-like-link" to="#">
              Created: {createdAt}
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
            <span className="ms-2">{tweet.likes.length}</span>
            {
              /* (locals.unauthDelete) */ false && (
                <div className="alert alert-danger" role="alert">
                  locals.unauthDelete[0]
                </div>
              )
            }
            {tweet.author._id === user.id && (
              <span>
                <Link className="ms-4" to="/deleteTweet/ tweet._id">
                  <i className="fas fa-trash-alt"></i>
                </Link>
              </span>
            )}
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
