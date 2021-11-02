import React from "react";
import RightSideText from "./RightSideText";

function RightSideBar() {
  return (
    <>
      <div style={{ backgroundColor: "black" }} className="sticky-top pb-3">
        <div className="pt-3">
          <form action="/search-one" method="POST">
            <input
              type="text"
              className="form-control rounded-pill"
              name="username"
              placeholder="Buscar en Twitter"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>

      <div className="tendencias rounded">
        <div className="inside-tendencias">
          <div className="row">
            <div className="col-10">Tendencias para ti</div>
            <div className="col-2">
              <div role="button" className="tendencias-a functionallityNotWorking" href="#">
                <i className="fas fa-cog"></i>
              </div>
            </div>
          </div>
          <RightSideText text="Tabarez" />
          <RightSideText text="AUF" />
          <RightSideText text="DT de Uruguay" />
          <RightSideText text="Diego Aguirre" />
          <RightSideText text="Complejo Celeste" />
          <div role="button" href="" className="links-leftSide functionallityNotWorking">
            <p className="showMore mt-4">Mostrar más</p>
          </div>
        </div>
      </div>
      <div id="stickyTopDiv">
        <div className="mt-3 tendencias rounded">
          <div className="inside-tendencias">
            <div className="d-flex justify-content-between">
              <div className="mt-2">A quién seguir</div>
              <form action="/search" method="GET">
                <button
                  type="submit"
                  className="align-self-end btn rounded-pill btn-twittear me-3 mb-2"
                  data-bs-toggle="modal"
                  data-bs-target="#searchToFollowModal"
                >
                  Buscador
                </button>
              </form>
            </div>
            <hr />
            {/*  <% for(user of randomUsers) { %> */}
            <div className="mt-3">
              <div role="button" className="tendencias-a" href="">
                <div className="row g-0 justify-content-between tendencias-hover p-2">
                  <div className="col-3 d-lg-none d-xl-block">
                    <span className="TweetAuthor-avatar">
                      <div className="Avatar d-inline-block">
                        <img
                          className="rounded-circle"
                          width="55rem"
                          /* src="<%=user.avatar %>" */
                          alt="testUserAvatar"
                        />
                      </div>
                    </span>
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <p>{/* <%=user.fullname %> */}</p>
                    <p className="userName">{/* @<%=user.username %> */}</p>
                  </div>
                  <div className="col-6 col-xl-3 align-self-center">
                    {/*  IF ELSE CON LOS FORMS DE ABAJO CON ( ownUserFollowings.includes(user.id ) ADENTRO  */}
                    <form
                      id="btn-seguir-siguiendo"
                      className="align-self-center d-flex justify-content-end"
                      action="/unFollow/<%-user._id%>"
                      method="POST"
                    >
                      <button
                        style={{ backgroundColor: "white", color: "black", width: "90px" }}
                        type="submit"
                        className="
                    align-self-center
                    btn
                    rounded-pill
                    btn-twittear
                    me-3
                    mb-2
                    justify-content-end
                  "
                      >
                        Siguiendo
                      </button>
                    </form>

                    {/* <form
                id="btn-seguir-siguiendo"
                className="align-self-center d-flex justify-content-end"
                action="/follow/<%-user._id%>"
                method="POST"
              >
                <button
                  style={{backgroundColor: "white", color: "black", width: "90px"}}
                  type="submit"
                  className="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
                >
                  Seguir
                </button>
              </form> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="under-navbar mt-2">
          <div className="row">
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Condiciones de Servicio
              </div>
            </div>
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Politica de Privacidad
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Politica de Cookies
              </div>
            </div>
            <div className="col">
              <div role="button" className="a-footer-welcome functionallityNotWorking m-0" href="#">
                Info de anuncios
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
                Mas opciones
              </div>
            </div>
            <div className="col mb-3">
              <p id="a-footer-welcome functionallityNotWorking">Twitter, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RightSideBar;
