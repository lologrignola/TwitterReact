import React from "react";
import welcomePicture from "../img/welcome-picture.png";
import ModalLogin from "../components/ModalLogIn";
import ModalRegister from "../components/ModalRegister";
import { Popover, OverlayTrigger } from "react-bootstrap";

function Welcome() {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header>
        {" "}
        <h6 className="text-black">Sorry! &#128546;</h6>{" "}
      </Popover.Header>
      <Popover.Body>This functionallity wasn't required when building this proyect.</Popover.Body>
    </Popover>
  );

  return (
    <div style={{ backgroundColor: "white" }} id="welcome-container">
      <div className="row vw-100 bg-white">
        <div id="welcome-img" className="col">
          <img src={welcomePicture} alt="" />
        </div>
        <div id="happening-now-col" className="col text-center">
          <div className="py-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-twitter"
              viewBox="0 0 16 16"
              id="welcome-logo"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </div>
          <div>
            <h1 className="fw-bolder pt-3" id="happening-now">
              Happening now
            </h1>
          </div>
          <div>
            <h3 className="fw-bolder pt-4 pb-3" id="join-today">
              Join Twitter today.
            </h3>
          </div>
          <div>
            <div className="d-flex flex-column align-items-center">
              <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                <button className="sign-up-buttons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="20px"
                    height="20px"
                    className="me-3"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Sign up with Google
                </button>
              </OverlayTrigger>
              <OverlayTrigger trigger="click" rootClose placement="left" overlay={popover}>
                <button className="sign-up-buttons">
                  <svg
                    fill="#000000"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="20px"
                    height="20px"
                    className="me-3"
                  >
                    {" "}
                    <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z" />
                  </svg>
                  Sign up with Apple
                </button>
              </OverlayTrigger>
              <ModalRegister />
            </div>
            <div className="mt-4">
              <p className="text-muted" id="text-bellow-signup-buttons">
                By signing up, you agree to the{" "}
                <span className="sign-up-a-hover text-primary pointer" href="#">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="sign-up-a-hover text-primary pointer" href="#">
                  Privacy <br />
                  Policy
                </span>
                , including{" "}
                <span className="sign-up-a-hover text-primary pointer" href="#">
                  Cookie Use.
                </span>
              </p>
              <p className="mt-4" id="already-have-an-account">
                Already have an account? <ModalLogin />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="welFooter">
        <hr id="welcome-hr" />
        <footer className="d-flex bg-white justify-content-evenly align-items-center flex-wrap px-5 py-2">
          <span className="a-footer-welcome mx-1 pointer" href="#">
            About
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Help Center
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Terms of service
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Privacy Policy
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            {" "}
            Cookie Policy
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Ads info
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Blog
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Status
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Careers
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Brand Resources
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Advertising
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Marketing
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Twitter for Business
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Developers
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Directory
          </span>
          <span className="a-footer-welcome mx-1 pointer" href="#">
            Settings
          </span>
          <p id="twitter-inc">&copy; {new Date().getFullYear()} Twitter, Inc.</p>
        </footer>
      </div>
    </div>
  );
}

export default Welcome;
