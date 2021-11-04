import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import TopNavbar from "../components/TopNavbar";
import { useDispatch } from "react-redux";
import axios from "axios";
import Tweet from "../components/Tweet";
import { useHistory } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";

function Home() {
  const [tweetContent, setTweetContent] = useState("");
  const token = useSelector((state) => state.user.token);
  const tweets = useSelector((state) => state.tweets);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_URL_BACKEND}/tweets`,
        data: {
          tweetContent,
        },

        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });
      if (response.data) {
        dispatch({ type: "ADD_NEW_TWEET", payload: response.data.data });

        /*     history.push("/"); */
      }
    } catch (error) {
      //handle error
      console.log(error);
    }
  };

  const [page, setPage] = useState(1);
  const [dataLength, setdataLength] = useState(0);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/tweets/${page}`,{
            headers: { "Content-Type": "application/json", Authorization: "Bearer " + token }
          },
        );
        console.log("DATA");
        console.log(response);
        setdataLength(dataLength + response.data.length);
        dispatch({ type: "ADD_MORE_TWEETS", payload: response.data });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={dataLength}
      next={()=>setPage((prev) => prev + 1)}
      hasMore={true}
    >
    <div className="container">
      <div className="row">
        <div className="col-2">
          <LeftSideBar />
        </div>
        <div className="col-10 col-lg-6">
          <TopNavbar text="Home" />
          <form action="/tweetear" onSubmit={(ev) => handleSubmit(ev)} method="POST">
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
                      placeholder="What's happening?"
                      maxlength="140"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                      value={tweetContent}
                      onChange={(ev) => setTweetContent(ev.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="align-self-end btn rounded-pill btn-twittear me-2 mb-2 mt-2"
                  >
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div id="tweetsContainer">
            {tweets.map((tweet) => (
              <Tweet tweet={tweet} />
            ))}
          </div>
        </div>
        <div id="rightSidebarContainer" className="col-4">
          <RightSideBar />
        </div>
      </div>
    </div>
    </InfiniteScroll>
  );
}

export default Home;
