import axios from "axios";
import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonFlwUnf from "../components/BtnFlwUnf";

function SearchModal() {
  const token = useSelector((state) => state.user.token);
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/users/${searchValue}`,
        {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        },
      );
      console.log(response);
      setUsers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }, [searchValue]);

  return (
    <>
      <div style={{ backgroundColor: "black" }} className="sticky-top pb-3 ">
        <div className="pt-3">
          <form
            onSubmit={(ev) => {
              ev.preventDefault();
              setShow(true);
            }}
          >
            <input
              type="text"
              className="form-control rounded-pill"
              name="username"
              placeholder="Buscar en Twitter"
              aria-label="Username"
              aria-describedby="basic-addon1"
              value={searchValue}
              onChange={(ev) => setSearchValue(ev.target.value)}
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
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
          <Modal.Body>
            {" "}
            {users.map((user) => (
              <div className="singleTweet d-flex justify-content-between">
                <div className="d-flex p-2">
                  <span className="TweetAuthor-avatar search-responsive">
                    <div className="Avatar ms-2 mt-2">
                      <img
                        className="rounded-circle"
                        width="55rem"
                        src={user.avatar}
                        alt="testUserAvatar"
                      />
                    </div>
                  </span>
                  <div className="d-flex flex-column">
                    <div className="flex-row w-100 ms-3 mt-2" style={{ height: 2 + "em" }}>
                      <p className="d-inline-flex userFullName search-responsive-smaller text-white">
                        <Link
                          to={`/profile/${user._id}`}
                          className="text-decoration-none text-white"
                        >
                          {user.fullname}
                        </Link>
                      </p>
                      <Link to={`/profile/${user._id}`} className="text-decoration-none">
                        <p className="d-inline-flex arroba">@{user.username}</p>
                      </Link>
                    </div>
                    <div className="ms-3 d-flex">
                      <p className="pe-4 tweet-content-container search-responsive-smaller">
                        {user.bio}
                      </p>
                    </div>
                    <div className="d-flex ms-3 mt-3 mb-3"></div>
                  </div>
                </div>
                <span className="mt-4">
                  {" "}
                  <ButtonFlwUnf userId={user._id} />
                </span>
              </div>
            ))}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
              Save Changes
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}
export default SearchModal;
