import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

function LikeButton({ likes, tweetId }) {
  const tweets = useSelector((state) => state.tweets);
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user);
  const [liked, setLiked] = useState(false);
  const [likedTweets, setLikedTweets] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (likes.includes(user.id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, []);

  const handleLiked = (ev) => {
    setLiked(!liked);
  };

  const handleLikeDB = async () => {
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_BACKEND}/tweets/like`,
        data: { tweetId },
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });
      console.log("RESPUESTA ", user.id);
      if (response.data) {
        dispatch({ type: "ADD_NEW_LIKED", payload: { userId: user.id, tweetId } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnlikeDB = async () => {
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_BACKEND}/tweets/unlike`,
        data: { tweetId },
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });
      console.log("RESPUESTA ", user.id);
      if (response.data) {
        dispatch({ type: "DELETE_LIKED", payload: { userId: user.id, tweetId } });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="me-2">
      {liked === true ? (
        <i
          className="fas fa-heart likeHeartRed pointer"
          onClick={(ev) => {
            handleLiked(ev);
            handleUnlikeDB();
          }}
        ></i>
      ) : (
        <i
          className="fas fa-heart likeHeart pointer"
          onClick={(ev) => {
            handleLiked(ev);
            handleLikeDB();
          }}
        ></i>
      )}
    </div>
  );
}

export default LikeButton;
