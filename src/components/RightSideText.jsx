import React from "react";

function RightSideText({ text, number }) {
  return (
    <div role="button" className="tendencias-a functionallityNotWorking" href="#">
      <div className="tendencias-hover mt-2 p-2">
        <div className="row tt-uru">
          <div className="col-10">Trending in Uruguay</div>
          <div className="col-2">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <p className="tendencias-a">{text}</p>
        <p className="left-nav-text">{number}K Tweets</p>
      </div>
    </div>
  );
}

export default RightSideText;
