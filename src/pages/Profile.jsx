import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import ModalEditUser from "../components/ModalEditUser";
import RightSideBar from "../components/RightSideBar";

function Profile() {
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
            <div className="w-100 h-20 bg-image bg-black m-0 d-flex align-items-end">
              <div id="" className="profile_pic bg-black rounded-circle p-1 ms-3">
                <img
                  className="rounded-circle"
                  src="https://i.pinimg.com/originals/0d/36/e7/0d36e7a476b06333d9fe9960572b66b9.jpg"
                  alt=""
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
            <div
              className="profile_desc col-lg-12 d-flex justify-content-between"
              style={{ color: "white" }}
            >
              <div className="profile_info">
                <p className="w-100 mb-0">fullname</p>
                <p className="w-100 mb-0 twitterGrey">username</p>
                <p className="w-100 mb-0 twitterGrey">Joined October 2021</p>
                <p className="w-100 mb-0" style={{ color: "black" }}></p>

                <div className="d-flex">
                  <div style={{ marginRight: "20px" }}>
                    <div className="text-decoration-none twitterGrey">
                      <span>5</span>
                      <span> Following</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-decoration-none twitterGrey">
                      <span>5</span>
                      <span> Followers</span>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-pill btn-profile px-3 lh-4 sign-up-a-nohover"
                style={{ height: "2rem" }}
                data-bs-toggle="modal"
                data-bs-target="#editUserModal"
              >
                {/* <span className="mx-auto">Set up profile</span> */}
                <ModalEditUser />
              </div>
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
                  <div className="list-group-item list-group-item-action ms-0 d-flex flex-row border-0 ">
                    <div className="rounded-circle me-3">
                      {/* <img src="img/img.jpg" alt="ovacion" width="50px" className="rounded-circle" /> */}
                    </div>
                    <div>
                      <div className="w-100">
                        <h5 className="mb-0">fullname</h5>
                        <small className="">username</small>
                      </div>
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet consectetur, Praesentium hic fugit incidunt, eum
                        eos tempore labore vel aliquam nm anim
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action ms-0 d-flex flex-row border-0">
                    <div className="rounded-circle me-3">
                      {/* <img src="img/img.jpg" alt="ovacion" width="50px" className="rounded-circle" /> */}
                    </div>
                    <div>
                      <div className="w-100">
                        <h5 className="mb-0">fullname</h5>
                        <small className="">username</small>
                      </div>
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet consectetur, Praesentium hic fugit incidunt, eum
                        eos tempore labore vel aliquam nm anim
                      </p>
                    </div>
                  </div>
                  <div className="list-group-item list-group-item-action ms-0 d-flex flex-row border-0">
                    <div className="rounded-circle me-3">
                      {/* <img src="img/img.jpg" alt="ovacion" width="50px" className="rounded-circle" /> */}
                    </div>
                    <div>
                      <div className="w-100">
                        <h5 className="mb-0">fullname</h5>
                        <small className="">username</small>
                      </div>
                      <p className="mb-1">
                        Lorem ipsum dolor sit amet consectetur, Praesentium hic fugit incidunt, eum
                        eos tempore labore vel aliquam nm anim
                      </p>
                    </div>
                  </div>
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

export default Profile;
