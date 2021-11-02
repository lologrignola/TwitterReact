import React from "react";

function RightSideBar() {
  return (
  <>
  
  <div style="background-color: black" className="sticky-top pb-3">
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
      <input type="submit" style="display: none" />
    </form>
  </div>
</div>

<div className="tendencias rounded">
  <div className="inside-tendencias">
    <div className="row">
      <div className="col-10">Tendencias para ti</div>
      <div className="col-2">
        <a className="tendencias-a functionallityNotWorking" href="#"><i className="fas fa-cog"></i></a>
      </div>
    </div>
    <a className="tendencias-a functionallityNotWorking" href="#"
      ><div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Tendencia en Uruguay</div>
          <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        <p className="tendencias-a">Tabarez</p>
        <p className="left-nav-text">34,7K Tweets</p>
      </div>
    </a>
    <a className="tendencias-a functionallityNotWorking" href="#"
      ><div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Tendencia en Uruguay</div>
          <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        <p className="tendencias-a">AUF</p>
        <p className="left-nav-text">31,6K Tweets</p>
      </div>
    </a>
    <a className="tendencias-a functionallityNotWorking" href="#"
      ><div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Tendencia en Uruguay</div>
          <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        <p className="tendencias-a">DT de Uruguay</p>
        <p className="left-nav-text">26,3K Tweets</p>
      </div>
    </a>
    <a className="tendencias-a functionallityNotWorking" href="#"
      ><div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Tendencia en Uruguay</div>
          <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        <p className="tendencias-a">Diego Aguirre</p>
        <p className="left-nav-text">21,9K Tweets</p>
      </div>
    </a>
    <a className="tendencias-a functionallityNotWorking" href="#"
      ><div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Tendencia en Uruguay</div>
          <div className="col-2"><i className="fas fa-ellipsis-h"></i></div>
        </div>
        <p className="tendencias-a">Complejo Celeste</p>
        <p className="left-nav-text">15,2K Tweets</p>
      </div>
    </a>
    <a href="" className="links-leftSide functionallityNotWorking"
      ><p className="showMore mt-4">Mostrar más</p></a
    >
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
        <a className="tendencias-a" href="">
          <div className="row g-0 justify-content-between tendencias-hover p-2">
            <div className="col-3 d-lg-none d-xl-block">
              <span className="TweetAuthor-avatar">
                <div className="Avatar d-inline-block">
                  <img
                    className="rounded-circle"
                    width="55rem"
                    src="<%=user.avatar %>"
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
                  style="background-color: white; color: black; width: 90px"
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
                  style="background-color: white; color: black; width: 90px"
                  type="submit"
                  className="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
                >
                  Seguir
                </button>
              </form> */}

            </div>
          </div>
        </a>
      </div>

    </div>
  </div>

  <div className="under-navbar mt-4">
    <div className="row">
      <div className="col">
        <a className="a-footer-welcome functionallityNotWorking" href="#">Condiciones de Servicio</a>
      </div>
      <div className="col">
        <a className="a-footer-welcome functionallityNotWorking" href="#">Politica de Privacidad</a>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <a className="a-footer-welcome functionallityNotWorking" href="#">Politica de Cookies</a>
      </div>
      <div className="col">
        <a className="a-footer-welcome functionallityNotWorking" href="#">Info de anuncios</a>
      </div>
    </div>
    <div className="row">
      <div className="col mb-3">
        <a className="a-footer-welcome functionallityNotWorking" href="#">Mas opciones</a>
      </div>
      <div className="col mb-3">
        <p id="a-footer-welcome functionallityNotWorking">
          Twitter, Inc.
        </p>
      </div>
    </div>
  </div>
</div>
  </>
);
}

export default RightSideBar;
