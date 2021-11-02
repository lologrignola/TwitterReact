import React from "react";
import { useState } from "react";

/* Botón follow / unfollow */

function ButtonFlwUnf() {
  const [follow, setFollow] = useState(false);

  const handleUnfollow = (ev) => {
    setFollow(false);
    ev.preventDefault();
  };

  const handleFollow = (ev) => {
    setFollow(true);
    ev.preventDefault();
  };

  return (
    <div>
      {follow === false ? (
        <form class="align-self-center" action="#" method="POST">
          <button
            style={{ backgroundColor: "rgb(204, 204, 204)", color: "black", width: "90px" }}
            type="submit"
            class="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
            onClick={handleFollow}
          >
            Seguir
          </button>
        </form>
      ) : (
        <form class="align-self-center" action="#" method="POST">
          <button
            style={{ backgroundColor: "rgb(204, 204, 204)", color: "black", width: "90px" }}
            type="submit"
            class="align-self-center btn rounded-pill btn-twittear me-3 mb-2"
            onClick={handleUnfollow}
          >
            Siguiendo
          </button>
        </form>
      )}
    </div>
  );
}

export default ButtonFlwUnf;
