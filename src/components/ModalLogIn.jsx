import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function ModalLogin() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setErrorLogin(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  let history = useHistory();
  const [errorLogin, setErrorLogin] = useState(false);

  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/login`, {
        data: { usernameOrEmail, password },
        headers: { "Content-Type": "application/json" },
      });
      console.log("este es el log ", response.data);
      if (response.data.token) {
        console.log(response);
        dispatch({ type: "ADD_TOKEN", payload: response.data });
        history.push("/");
      } else if (response.data.error) {
        setErrorLogin(true);
      }
    } catch (error) {
      //handle error
      console.log("error ", error);
    }
  };

  return (
    <>
      <span className="sign-up-a-hover text-primary pointer" onClick={handleShow}>
        Sign In
      </span>

      <Modal show={show} onHide={handleClose} className="px-0">
        <div style={{ backgroundColor: "white" }} className="welcome-modal px-5 margin-neg-2">
          <Modal.Header className="d-flex justify-content-between">
            <div className="d-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-twitter me-2"
                viewBox="0 0 16 16"
                id="welcome-logo"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <Modal.Title style={{ color: "black" }}>Sign In</Modal.Title>
            </div>
            <div onClick={handleClose}>
              <i className="fas fa-times text-black pointer p-2"></i>
            </div>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(ev) => handleLogin(ev)}>
              <label style={{ color: "black" }} className="form-label" htmlFor="usernameOrEmail">
                Enter your Username Or Email
              </label>
              <input
                type="text"
                id="usernameOrEmail"
                name="usernameOrEmail"
                value={usernameOrEmail}
                className="form-control"
                placeholder="john.doe@example.com"
                onChange={(ev) => setUsernameOrEmail(ev.target.value)}
              />
              <label style={{ color: "black" }} className="form-label mt-3" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                className="form-control mb-3"
              />
              {errorLogin && (
                <p className="text-danger bg-warning p-2">Credentials do not match!</p>
              )}
              <Modal.Footer>
                {" "}
                <button type="submit" class="btn btn-primary">
                  Sign in
                </button>
                <button type="button" class="btn btn-secondary" onClick={handleClose}>
                  Close
                </button>
              </Modal.Footer>
            </form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default ModalLogin;
