import React from "react";
import { useLocation } from "react-router-dom";
import MainHeader from "../MainHeader/MainHeader";
import "./IndividualGallery.css";

const IndividualGallery = (props) => {
  const location = useLocation();
  const { item } = location.state;

  return (
    <div className="IndividualGallery">
      <MainHeader />
      <div className="gap"></div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <h1 className="display-1">{item.board}</h1>
        </div>
        <div class="col-4"></div>
      </div>
      <div className="row"></div>
      <div className="gap"></div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <img
            src={"http://localhost:5000/" + item.imageUrl}
            class="img-fluid"
            alt=""
          ></img>
        </div>
        <div class="col-4"></div>
      </div>
      <div className="gap"></div>
      <div className="row"></div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-8">
          <ul>
            <li>Board: {item.board}</li>
            <li>Keycaps: {item.keycaps}</li>
            <li>Swwitches: {item.switches}</li>
          </ul>
        </div>
        <div class="col-4"></div>
      </div>
      <div className="row"></div>
    </div>
    
  );
};

export default IndividualGallery;
