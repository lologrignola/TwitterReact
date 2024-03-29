import axios from "axios";
import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function ModalRegister() {
  const [errorRegister, setErrorRegister] = useState("");
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setErrorRegister("");
  };
  const handleShow = () => setShow(true);
  let history = useHistory();

  const handleRegister = async (ev) => {
    ev.preventDefault();

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/sign-in`, {
        data: { email, password, fullname },
        headers: { "Content-Type": "application/json" } /**Authorization: "bearer " + token */,
      });
      console.log(response.data);
      if (response.data.token) {
        dispatch({ type: "ADD_TOKEN", payload: response.data });
        history.push("/");
      } else if (response.data.error) {
        setErrorRegister(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="sign-up-buttons" onClick={handleShow}>
        Sign up with phone or email
      </button>

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
              <Modal.Title style={{ color: "black" }}>Sign Up</Modal.Title>
            </div>
            <div onClick={handleClose}>
              <i className="fas fa-times text-black pointer p-2"></i>
            </div>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(ev) => handleRegister(ev)}>
              <label style={{ color: "black" }} className="form-label" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={fullname}
                onChange={(ev) => setFullname(ev.target.value)}
                className="form-control"
                placeholder="John Doe"
              />
              <label style={{ color: "black" }} className="form-label mt-3" htmlFor="email">
                Enter your email
              </label>
              <input
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="john.doe@example.com"
              />
              <label style={{ color: "black" }} className="form-label  mt-3" htmlFor="password">
                Create a password
              </label>
              <input
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                type="password"
                id="password"
                name="password"
                className="form-control mb-3"
              />
              {errorRegister && <p className="text-danger bg-warning p-2">{errorRegister}</p>}
              <hr />
              <Modal.Footer>
                {" "}
                <button type="submit" class="btn btn-primary">
                  Sign up
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

export default ModalRegister;
