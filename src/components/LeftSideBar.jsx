import { Link } from "react-router-dom";
import SideButtons from "./SideButtons";
import { useDispatch } from "react-redux";
import ModalTweet from "./ModalTweet";

function LeftSideBar() {
  const dispatch = useDispatch();
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-between sticky-top"
    >
      <div className="pt-3">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div role="button" className="links-leftSide">
            <i className="fab fa-twitter" style={{ fontSize: "30px" }}></i>
          </div>
        </Link>
        <ul id="left-sidebar-list" className="nav flex-column mt-3">
          <SideButtons text="Home" link="/" icon="icons-left fas fa-home" working="" />
          <SideButtons
            text="Explore"
            link={window.location.pathname}
            icon="icons-left fas fa-hashtag"
            working="functionallityNotWorking"
          />
          <SideButtons
            text="Notifications"
            link={window.location.pathname}
            icon="icons-left fas fa-bell"
            working="functionallityNotWorking"
          />
          <SideButtons
            text="Messages"
            link={window.location.pathname}
            icon="icons-left fas fa-envelope"
            working="functionallityNotWorking"
          />
          <SideButtons
            text="Bookmarks"
            link={window.location.pathname}
            icon="icons-left far fa-bookmark"
            working="functionallityNotWorking"
          />
          <SideButtons
            text="About Us"
            link="/about-us"
            icon="icons-left far fa-list-alt"
            working=""
          />
          <SideButtons text="Perfil" link="/profile" icon="icons-left far fa-user" working="" />
          <SideButtons
            text="More"
            link={window.location.pathname}
            icon="icons-left fas fa-ellipsis-h"
            working="functionallityNotWorking"
          />
          <li className="nav-item mt-4">
            <ModalTweet />
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <div id="bigLogout">
          <button
            type="button"
            style={{ backgroundColor: "rgb(235, 235, 235)", color: "black", width: "90px" }}
            className="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
            onClick={() => dispatch({ type: "REMOVE_TOKEN" })}
          >
            Logout
          </button>
        </div>
        <div id="smallLogout">
          <i
            style={{ backgroundColor: "black", color: "rgb(235, 235, 235)" }}
            className="fas fa-times-circle pointer"
            onClick={() => dispatch({ type: "REMOVE_TOKEN" })}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
