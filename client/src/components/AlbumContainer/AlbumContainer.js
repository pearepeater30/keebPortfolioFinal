import React from "react";
import AlbumComponent from "../AlbumComponent/AlbumComponent";
import { connect } from "react-redux";
import {
  fetchGallery,
  fetchGalleryFailure,
} from "../../redux/gallery/galleryActions";
import MainHeader from "../MainHeader/MainHeader";
import axios from "axios";

class AlbumContainer extends React.Component {
  componentDidMount() {
    this.props.displayGallery();
  }

  render() {
    return (
      <div className="AlbumContainer">
        <MainHeader></MainHeader>
        <div className="py-5 text-center container-fluid">
          <h1>Hello There!</h1>
          <div className="mx-auto py-3 container-fluid">
            <div className="row align-items-start">
              <div className="col"></div>
              <div className="col">
                <p1>
                  This website is part of my portfolio where I show off
                  mechanical keyboards that I have built. Each of these will
                  either be a mix of client (haha) and personal builds.
                </p1>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {this.props.gallery.map((item) => (
          <AlbumComponent key={item._id} item={item}></AlbumComponent>
        ))}
      </div>
      </div>
    );
  }
}

//props are stored here. State retrieved from the combineReducer
const mapStateToProps = (state) => {
  //pass the information from the state to this page
  return { gallery: state.gallery };
};

const mapDispatchToProps = (dispatch) => {
  return {
    displayGallery: () => {
      console.log("Dispatching...");
      const url = "http://localhost:5000/";
      axios
        .get(`${url}gallery`)
        .then((response) => {
          const gallery = response.data;
          dispatch(fetchGallery(gallery));
        })
        .catch((error) => {
          console.log(error.message);
          dispatch(fetchGalleryFailure(error.message));
        });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumContainer);
