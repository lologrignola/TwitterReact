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
          <SideButtons text="Inicio" link="/" icon="icons-left fas fa-home" />
          <SideButtons
            text="Explorar"
            link={window.location.pathname}
            icon="icons-left fas fa-hashtag"
          />
          <SideButtons
            text="Notificaciones"
            link={window.location.pathname}
            icon="icons-left fas fa-bell"
          />
          <SideButtons
            text="Mensajes"
            link={window.location.pathname}
            icon="icons-left fas fa-envelope"
          />
          <SideButtons
            text="Guardados"
            link={window.location.pathname}
            icon="icons-left far fa-bookmark"
          />
          <SideButtons text="About Us" link="/about-us" icon="icons-left far fa-list-alt" />
          <SideButtons text="Perfil" link="/profile" icon="icons-left far fa-user" />
          <SideButtons
            text="Más Opciones"
            link={window.location.pathname}
            icon="icons-left fas fa-ellipsis-h"
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
            className="btn btn-danger rounded-pill"
            onClick={() => dispatch({ type: "REMOVE_TOKEN" })}
          >
            Logout
          </button>
        </div>
        <div id="smallLogout">
          <i
            className="fas fa-times-circle pointer"
            onClick={() => dispatch({ type: "REMOVE_TOKEN" })}
          ></i>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
