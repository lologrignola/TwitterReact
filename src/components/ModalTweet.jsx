import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

function ModalTweet() {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const history = useHistory();
  const [show, setShow] = useState(false);
  const [tweetContent, setTweetContent] = useState("");
  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      console.log("ENTREEEEE");
      const response = await axios({
        method: "post",
        url: `${process.env.REACT_APP_URL_BACKEND}/tweets`,
        data: {
          tweetContent,
        },

        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
      });
      console.log("RESPUESTA ", response.data);
      if (response.data) {
        dispatch({ type: "ADD_NEW_TWEET", payload: response.data.data });
        setShow(false);
        history.push("/");
      }
    } catch (error) {
      //handle error
      console.log(error);
    }
  };

  return (
    <>
      <div id="bigButtonTwittear" role="button" className="fs-5" onClick={() => setShow(true)}>
        <button
          type="submit"
          className="align-self-end btn rounded-pill btn-twittear py-2 px-4 me-3 mb-2"
        >
          Tweettear
        </button>
      </div>
      <div id="smallButtonTweettear" role="button" className="fs-5" onClick={() => setShow(true)}>
        <button type="submit" className="align-self-end btn rounded-circle btn-twittear p-2 mt-3">
          <svg
            viewBox="0 0 24 24"
            fill="white"
            width="30"
            height="30"
            className="
                r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp
              "
          >
            <g>
              <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
            </g>
          </svg>
        </button>
      </div>
      <Modal show={show} onHide={() => setShow(false)}>
        <div id="modal-negro">
          <Modal.Header className="d-flex justify-content-between">
            <Button variant="" onClick={() => setShow(false)}>
              <i className="fas fa-times text-white"></i>
            </Button>
            <div className="d-flex">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-twitter me-2"
                viewBox="0 0 16 16"
                id="welcome-logo-white"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </div>
          </Modal.Header>
          <form>
            <Modal.Body>
              <div class="grow-wrap">
                <textarea
                  name="tweetText"
                  id="twittear"
                  cols="70"
                  rows="5"
                  maxlength="140"
                  placeholder="Qué estas pensando?"
                  value={tweetContent}
                  onInput={(ev) => setTweetContent(ev.target.value)}
                ></textarea>
              </div>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShow(false)}>
                Close
              </Button>
              <Button type="button" onClick={(ev) => handleSubmit(ev)}>
                Tweetear
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ModalTweet;
