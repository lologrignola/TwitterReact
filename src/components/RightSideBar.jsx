import { useEffect, useState } from "react";
import RightSideText from "./RightSideText";
import axios from "axios";
import { useSelector } from "react-redux";
import ButtonFlwUnf from "./BtnFlwUnf";
import SearchModal from "./SearchModal";

function RightSideBar() {
  const token = useSelector((state) => state.user.token);
  const [randomUsers, setRandomUsers] = useState([]);
  useEffect(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/users/random-users`, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      });
      console.log(response);
      setRandomUsers([...response.data]);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <SearchModal />
      <div className="tendencias rounded">
        <div className="inside-tendencias">
          <div className="row">
            <div className="col-10">Trends for you</div>
            <div className="col-2">
              <div role="button" className="tendencias-a functionallityNotWorking" href="#">
                <i className="fas fa-cog"></i>
              </div>
            </div>
          </div>
          <RightSideText text="Tabarez" number="70" />
          <RightSideText text="AUF" number="33" />
          <RightSideText text="DT de Uruguay" number="30" />
          <RightSideText text="Diego Aguirre" number="25" />
          <RightSideText text="Complejo Celeste" number="15" />
          <div role="button" href="" className="links-leftSide functionallityNotWorking">
            <p className="showMore mt-4">Show more</p>
          </div>
        </div>
      </div>
      <div id="stickyTopDiv">
        <div className="mt-3 tendencias rounded">
          <div className="inside-tendencias">
            <div className="d-flex justify-content-between">
              <div className="mt-2">Who to follow</div>
              <form action="/search" method="GET">
                <button
                  type="submit"
                  className="align-self-end btn rounded-pill btn-twittear me-3 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchToFollowModal"
                >
                  Search
                </button>
              </form>
            </div>
            <hr />
            {/*  <% for(user of randomUsers) { %> */}
            {randomUsers.map((randomUser) => (
              <div key={randomUser._id} className="mt-3">
                <div role="button" className="tendencias-a" href="">
                  <div className="row g-0 justify-content-between tendencias-hover p-2">
                    <div className="col-3 d-lg-none d-xl-block">
                      <span className="TweetAuthor-avatar">
                        <div className="Avatar d-inline-block">
                          <img
                            className="rounded-circle"
                            width="55rem"
                            src={randomUser.avatar}
                            alt="testUserAvatar"
                          />
                        </div>
                      </span>
                    </div>
                    <div className="col-6 d-flex flex-column">
                      <p>{randomUser.fullname}</p>
                      <p className="userName">@{randomUser.username}</p>
                    </div>
                    <div className="col-6 col-xl-3 align-self-center">
                      <ButtonFlwUnf userId={randomUser._id} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="under-navbar mt-2">
          <div className="row">
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Terms of Service
              </div>
            </div>
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Privacy Policy
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Cookie Policy
              </div>
            </div>
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Ads Info
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <div
                role="button"
                className="a-footer-welcome functionallityNotWorking mt-0"
                href="#"
              >
                More...
              </div>
            </div>
            <div className="col mb-3">
              <p id="a-footer-welcome functionallityNotWorking">
                &copy; {new Date().getFullYear()} Twitter, Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
