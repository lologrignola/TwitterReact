import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useStore } from "react-redux";
import ButtonFlwUnf from "../components/BtnFlwUnf";
import LeftSideBar from "../components/LeftSideBar";
import ModalEditUser from "../components/ModalEditUser";
import RightSideBar from "../components/RightSideBar";
import Spinner from "react-bootstrap/Spinner";
import TopNavbar from "../components/TopNavbar";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function ProfileUsers() {
  const params = useParams();
  const token = useSelector((state) => state.user.token);
  const userId = useSelector((state) => state.user.id);

  const [user, setUser] = useState({});

  const [randomUsers, setRandomUsers] = useState([]);
  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const fetchRandomUsers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/users/random-users`,
          {
            headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          },
        );

        const user = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/user/${params.id}`, {
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        });

        const date = new Date(user.data.createdAt);
        const month = months[date.getMonth() - 1];
        const year = date.getFullYear();

        user.data.createdAt = `Joined ${month} ${year}`;
        setUser(user.data);

        setRandomUsers([...response.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRandomUsers();
  }, [token, userId, params.id]);

  return (
    <div>
      <div className="container vh-100 vw-100 p-0 m-0 mx-auto" style={{ color: "white" }}>
        <div className="row w-100 " style={{ color: "inherit" }}>
          <div className="col col-lg-2 me-0">
            <LeftSideBar />
          </div>

          <div
            id=""
            className="col bg-black col-lg-6 min-vh-100 profile_main mx-auto ms-0"
            style={{ color: "white" }}
          >
            <TopNavbar text="Profile" />
            <div className="w-100 h-20 bg-image bg-black m-0 d-flex align-items-end">
              <div id="" className="profile_pic bg-black rounded-circle p-1 ms-3">
                {user.avatar == null ? (
                  <Spinner animation="grow" variant="light" />
                ) : (
                  <img
                    className="rounded-circle"
                    src={`${user.avatar}`}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                )}
              </div>
            </div>
            <div
              className="profile_desc col-lg-12 d-flex justify-content-between"
              style={{ color: "white" }}
            >
              <div className="profile_info">
                <p className="w-100 mb-0">{user.fullname}</p>
                <p className="w-100 mb-0 twitterGrey">{user.username}</p>
                <p className="w-100 mb-0 twitterGrey">{user.createdAt}</p>
                <p className="w-100 mb-0" style={{ color: "black" }}></p>

                <div className="d-flex">
                  <div style={{ marginRight: "20px" }}>
                    <div className="text-decoration-none twitterGrey">
                      <span>{user.following && user.following.length}</span>
                      <span> Following</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-decoration-none twitterGrey">
                      <span>{user.followers && user.followers.length}</span>
                      <span> Followers</span>
                    </div>
                  </div>
                </div>
              </div>

              <ButtonFlwUnf userId={params.id} />
            </div>

            {/* <!-- Parte de abajo  --> */}
            <div>
              <div className="row text-center mt-4 mb-4">
                <div className="col-lg-3 col-md-3 col-sm-6 pointer under-list twitterGrey pt-2 pb-2">
                  Tweets
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 pointer under-list twitterGrey pt-2 pb-2">
                  Tweets & Replies
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 pointer under-list twitterGrey pt-2 pb-2">
                  Media
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 pointer under-list twitterGrey pt-2 pb-2">
                  Likes
                </div>
              </div>
            </div>

            {/* <!-- Parte de abajo  --> */}
            <div>
              <div className="container m-0 mb-0 ms-0 w-100 p-0 who-to-follow">
                <h4 className="row container">Who to follow</h4>
                <div className="list-group w-100 m-0 ">
                  {randomUsers.map((randomUser) => (
                    <div
                      key={randomUser._id}
                      className="list-group-item list-group-item-action ms-0 d-flex flex-row border-0 justify-content-between "
                    >
                      <div className="d-flex">
                        {" "}
                        <div className="rounded-circle me-3">
                          <Link
                            to={
                              randomUser._id === user.id ? "/profile" : `/profile/${randomUser._id}`
                            }
                          >
                            <img
                              src={randomUser.avatar}
                              alt={`foto de ${randomUser.fullname}`}
                              width="50px"
                              className="rounded-circle"
                            />
                          </Link>
                        </div>
                        <div>
                          <div className="w-100">
                            <Link className="links-rightSidebar" to={`/profile/${randomUser._id}`}>
                              <h5 className="mb-0">{randomUser.fullname}</h5>
                              <small className="">{randomUser.username}</small>
                            </Link>
                          </div>
                          <p className="mb-1">{randomUser.bio}</p>
                        </div>
                      </div>
                      <ButtonFlwUnf userId={randomUser._id} />
                    </div>
                  ))}

                  <div
                    href="#"
                    className="
                    list-group-item list-group-item-action
                    mt-0
                    d-flex
                    flex-row
                    border-0
                  "
                  >
                    <div className="ms-2 w-100 h-100">
                      <h7 className="mb-0">Show more</h7>
                    </div>
                  </div>
                  <div
                    href="#"
                    className="list-group-item list-group-item-action mt-0 d-flex flex-row "
                  >
                    <div className="ms-2 w-100 h-100">
                      <h5 className="mb-0">Topics to follow</h5>
                      <p>Tweets about the Topics you follow show up in your Home timeline</p>
                    </div>
                  </div>
                  <div className="container w-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div id="rightSidebarContainer" className="col">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUsers;
