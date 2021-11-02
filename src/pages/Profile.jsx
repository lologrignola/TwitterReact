import React from "react";

function Profile() {
  return <div>
    <div className="container vh-100 vw-100 p-0 m-0 mx-auto">
      <div className="row w-100">
        {/* <!--Left sidebar--> */}
        <div className="col col-lg-2 me-0"></div>
        {/* <!--Navbar + main content--> */}
        <div id="colorInvert" className="col col-lg-6 min-vh-100 profile_main mx-auto px-0 ms-0">
          {/* <%- include ("./partials/navbarProfile") %> */}
          {/* <!--main content down here--> */}
          <div className="w-100 h-20 bg-image m-0 d-flex align-items-end">
            <div id="colorInvert" className="profile_pic rounded-circle p-1 ms-3">
              <img
                className="rounded-circle"
                src="<%=userProfile.avatar%> "
                alt=""
                style={{width: '100%', height: '100%'}}
              />
            </div>
          </div>
          <div className="profile_desc col-lg-12 d-flex justify-content-between">
            <div className="profile_info">
              <p className="w-100 mb-0">fullname</p>
              <p className="w-100 mb-0">username</p>
              <p className="w-100 mb-0">
                <span style={{height: '1.25em'}}
                  ><svg
                    style={{height: '1.25em'}}
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="
                      r-14j79pv
                      r-4qtqp9
                      r-yyyyoo
                      r-1xvli5t
                      r-1d4mawv
                      r-dnmrzs
                      r-bnwqim
                      r-1plcrui
                      r-lrvibr
                    "
                  >
                    <g>
                      <path
                        d="M19.708 2H4.292C3.028 2 2 3.028 2 4.292v15.416C2 20.972 3.028 22 4.292 22h15.416C20.972 22 22 20.972 22 19.708V4.292C22 3.028 20.972 2 19.708 2zm.792 17.708c0 .437-.355.792-.792.792H4.292c-.437 0-.792-.355-.792-.792V6.418c0-.437.354-.79.79-.792h15.42c.436 0 .79.355.79.79V19.71z"
                      ></path>
                      <circle cx="7.032" cy="8.75" r="1.285"></circle>
                      <circle cx="7.032" cy="13.156" r="1.285"></circle>
                      <circle cx="16.968" cy="8.75" r="1.285"></circle>
                      <circle cx="16.968" cy="13.156" r="1.285"></circle>
                      <circle cx="12" cy="8.75" r="1.285"></circle>
                      <circle cx="12" cy="13.156" r="1.285"></circle>
                      <circle cx="7.032" cy="17.486" r="1.285"></circle>
                      <circle cx="12" cy="17.486" r="1.285"></circle>
                    </g>
                  </svg>
                </span>
                Joined October 2021
              </p>
              <p className="w-100 mb-0" style={{color: "black"}}></p>

              <div className="d-flex">
                <div style={{marginRight: '20px'}}>
                  <a href="#" className="text-decoration-none">
                    <span>5</span>
                    <span>Following</span>
                  </a>
                </div>
                <div>
                  <a href="#" className="text-decoration-none">
                    <span>5</span>
                    <span>Followers</span>
                  </a>
                </div>
              </div>
            </div>

            <a
              className="rounded-pill btn-profile px-3 lh-4 sign-up-a-nohover"
              style={{height: "2rem"}}
              data-bs-toggle="modal"
              data-bs-target="#editUserModal"
            >
              <span className="mx-auto">Set up profile</span>
            </a>
          </div>

          {/* <!-- Parte de abajo  --> */}
          <div>
            <nav className="navbar navbar-expand-lg navbar-light p-0 mt-1">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nab navbar_profile">
                <li className="nav-item">
                  <div>
                    <a href="#">
                      <div className="text-decoration-none">Tweets</div>
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <a href="#">
                      <div className="text-decoration-none">Tweets & replies</div>
                    </a>
                  </div>
                </li>
                <li className="nav-item" className="text-decoration-none">
                  <div>
                    <a href="#">
                      <div>Media</div>
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <a href="#">
                      <div>Likes</div>
                    </a>
                  </div>
                </li>
              </ul>
            </nav>

            <div className="container m-0 mb-0 ms-0 w-100 p-0 who-to-follow">
              <h4 className="row container text-dark">Who to follow</h4>
              <div className="list-group w-100 m-0">
                {/* <% for(user of randomUsers) { %>
                <a
                  href="#"
                  className="list-group-item list-group-item-action ms-0 d-flex flex-row border-0"
                >
                  <div className="rounded-circle me-3">
                    <img src="img/img.jpg" alt="ovacion" width="50px" className="rounded-circle" />
                  </div>
                  <div>
                    <div className="w-100">
                      <h5 className="mb-0"><%= user.fullname %></h5>
                      <small className="text-muted">@<%=user.username%></small>
                    </div>
                    <p className="mb-1"><%=user.bio %></p>
                  </div>
                </a>
                <% } %> */}
                <a
                  href="#"
                  className="
                    list-group-item list-group-item-action
                    mt-0
                    d-flex
                    flex-row
                    border-0 border-end
                  "
                >
                  <div className="ms-2 w-100 h-100">
                    <h7 className="mb-0">Show more</h7>
                  </div>
                </a>
                <a
                  href="#"
                  className="list-group-item list-group-item-action mt-0 d-flex flex-row border-end"
                >
                  <div className="ms-2 w-100 h-100">
                    <h5 className="mb-0">Topics to follow</h5>
                    <p>Tweets about the Topics you follow show up in your Home timeline</p>
                  </div>
                </a>
                <div className="container w-100"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="rightSidebarContainer" className="col col-lg-4">
          {/* <%- include ("./partials/sidebarRight") %> */}
        </div>
      </div>
    </div>
  </div>;
}

export default Profile;
