import React from "react";
import { Link, Outlet } from "react-router-dom";

const AlbumComponent = (props) => {
  return (
 
    <div className="col">
      <div className="card shadow-sm py-2 mx-auto">
        <img
          className="rounded img-thumbnail mx-auto"
          src={"https://keeb-portfolio.herokuapp.com/" + props.item.imageUrl}
          alt=""
        ></img>
        <div className="card-body">
          <div className ="col text-center">
            <h3>{props.item.board}</h3>
            <Link type="button" className="btn btn-primary" state={{ item: props.item }} to={`/${props.item._id}`}>
              Read More
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
    
  );
};

export default AlbumComponent;
