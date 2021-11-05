import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

function BtnDeleteTweet({ tweetId }) {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const handleDeleteDB = async () => {
    try {
      const response = await axios({
        method: "delete",
        url: `${process.env.REACT_APP_URL_BACKEND}/tweets`,
        data: { tweetId },
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });
      if (response.data) {
        dispatch({ type: "DELETE_TWEET", payload: tweetId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <i
        className="fas fa-trash-alt me-3 pointer"
        onClick={() => {
          handleDeleteDB();
        }}
      ></i>
    </div>
  );
}

export default BtnDeleteTweet;
