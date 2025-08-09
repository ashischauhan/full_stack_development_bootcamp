import React from "react";
import Avatar from "./Avatar";
import Info from "./Info";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p className="name">{props.name}</p>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Info tel={props.tel} email={props.email} />
      </div>
    </div>
  );
}

export default Card;
