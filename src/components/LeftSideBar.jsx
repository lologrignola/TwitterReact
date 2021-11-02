import { Link } from "react-router-dom";

function LeftSideBar() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-between sticky-top"
    >
      <div className="pt-3">
        <Link to="/home">
          <a href="" className="links-leftSide">
            <i className="fab fa-twitter" style={{ fontSize: "30px" }}></i>
          </a>
        </Link>
        <ul id="left-sidebar-list" className="nav flex-column mt-3">
          <li className="nav-item mt-2">
            <Link to="/home">
              <a href="" className="links-leftSide">
                <div className="row">
                  <div className="col-2">
                    <i className="icons-left fas fa-home"></i>
                  </div>
                  <div className="col-10 collapsable-sidebarleft">Inicio</div>
                </div>
              </a>
            </Link>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-2">
                  <i className="icons-left fas fa-hashtag"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Explorar</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-2">
                  <i className="icons-left fas fa-bell"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Notificaciones</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-2">
                  <i className="icons-left fas fa-envelope"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Mensajes</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-2">
                  <i className="icons-left far fa-bookmark"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Guardados</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-2">
                  <i className="icons-left far fa-list-alt"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Listas</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-2">
            <Link to="/profile">
              <a href="/profile" className="links-leftSide">
                <div className="row">
                  <div className="col-2">
                    <i className="icons-left far fa-user"></i>
                  </div>
                  <div className="col-10 collapsable-sidebarleft">Perfil</div>
                </div>
              </a>
            </Link>
          </li>
          <li className="nav-item mt-2">
            <a href="" className="links-leftSide functionallityNotWorking">
              <div className="row">
                <div className="col-12 col-lg-2">
                  <i className="icons-left fas fa-ellipsis-h"></i>
                </div>
                <div className="col-10 collapsable-sidebarleft">Más Opciones</div>
              </div>
            </a>
          </li>
          <li className="nav-item mt-4">
            <a
              id="bigButtonTwittear"
              href=""
              className="fs-5"
              data-bs-toggle="modal"
              data-bs-target="#twittearModal"
            >
              <button
                type="submit"
                className="align-self-end btn rounded-pill btn-twittear py-2 px-4 me-3 mb-2"
              >
                Tweettear
              </button>
            </a>
            <a
              id="smallButtonTweettear"
              href=""
              className="fs-5"
              data-bs-toggle="modal"
              data-bs-target="#twittearModal"
            >
              <button
                type="submit"
                className="align-self-end btn rounded-circle btn-twittear p-2 mt-3"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="white"
                  width="30"
                  height="30"
                  className="
                r-jwli3a r-4qtqp9 r-yyyyoo r-1472mwg r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp
              "
                >
                  <g>
                    <path d="M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z"></path>
                  </g>
                </svg>
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className="mb-3">
        <a id="bigLogout" href="/logout">
          <button type="button" className="btn btn-danger rounded-pill">
            Logout
          </button>
        </a>
        <a id="smallLogout" href="/logout">
          <i className="fas fa-times-circle"></i>
        </a>
      </div>
    </div>
  );
}

export default LeftSideBar;
