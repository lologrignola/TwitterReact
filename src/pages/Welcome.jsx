import React from "react";
import welcomePicture from "../img/welcome-picture.png";

function Welcome() {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="row vw-100">
        <div id="welcome-img" class="col">
          <img src={welcomePicture} alt="" />
        </div>
        <div id="happening-now-col" class="col">
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
            <div className="d-flex flex-column">
              <button className="sign-up-buttons functionallityNotWorking">
                <i className="fab fa-google"></i>Sign up with Google
              </button>
              <button className="sign-up-buttons functionallityNotWorking">
                <i className="fab fa-apple"></i>Sign up with Apple
              </button>
              <button
                className="sign-up-buttons"
                data-bs-toggle="modal"
                data-bs-target="#registerModal"
              >
                Sign up with phone or email
              </button>
            </div>
            <div className="mt-4">
              <p className="text-muted" id="text-bellow-signup-buttons">
                By signing up, you agree to the
                <a className="sign-up-a-hover functionallityNotWorking" href="#">
                  Terms of Service
                </a>{" "}
                and
                <a className="sign-up-a-hover functionallityNotWorking" href="#">
                  Privacy <br />
                  Policy
                </a>
                , including
                <a className="sign-up-a-hover functionallityNotWorking" href="#">
                  Cookie Use.
                </a>
              </p>
              <p className="mt-4" id="already-have-an-account">
                Already have an account?
                <a
                  className="sign-up-a-nohover"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr id="welcome-hr" />
      <footer className="d-flex justify-content-evenly align-items-center flex-wrap px-5 py-2">
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          About
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Help Center
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Terms of service
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Privacy Policy
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          {" "}
          Cookie Policy
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Ads info
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Blog
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Status
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Careers
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Brand Resources
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Advertising
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Marketing
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Twitter for Business
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Developers
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Directory
        </a>
        <a className="functionallityNotWorking a-footer-welcome mx-1" href="#">
          Settings
        </a>
        <p id="twitter-inc">&copy;</p>
      </footer>
      <script src="js/registerValidation.js"></script>
    </div>
  );
}

export default Welcome;
