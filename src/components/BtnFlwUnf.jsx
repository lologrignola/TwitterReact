import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";

/* Botón follow / unfollow */

function ButtonFlwUnf({ userId }) {
  const user = useSelector((state) => state.user);
  const token = useSelector((state) => state.user.token);
  const userFollowing = useSelector((state) => state.user.following);
  const [follow, setFollow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userFollowing.includes(userId)) {
      setFollow(true);
    } else {
      setFollow(false);
    }
  }, []);

  const handleFollowDB = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_BACKEND}/users/follow`,
        data: { userId },
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });

      if (response.data) {
        dispatch({ type: "ADD_NEW_FOLLOWING", payload: userId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnFollowDB = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios({
        method: "patch",
        url: `${process.env.REACT_APP_URL_BACKEND}/users/unfollow`,
        data: { userId },
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });

      if (response.data) {
        dispatch({ type: "DELETE_FOLLOWING", payload: userId });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFollow = (ev) => {
    setFollow(!follow);
    ev.preventDefault();
  };

  return (
    <>
      {user.id !== userId && (
        <div>
          {follow === false ? (
            <form class="align-self-center">
              <button
                style={{ backgroundColor: "rgb(235, 235, 235)", color: "black", width: "90px" }}
                type="submit"
                class="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
                onClick={(ev) => {
                  handleFollow(ev);
                  handleFollowDB(ev);
                }}
              >
                Follow
              </button>
            </form>
          ) : (
            <form class="align-self-center">
              <button
                style={{ backgroundColor: "rgb(190, 190, 190)", color: "black", width: "90px" }}
                type="submit"
                class="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
                onClick={(ev) => {
                  handleFollow(ev);
                  handleUnFollowDB(ev);
                }}
              >
                Following
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}

export default ButtonFlwUnf;
