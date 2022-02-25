import { FETCH_GALLERY, FETCH_GALLERY_FAILURE } from "./galleryTypes";

export const fetchGallery = (gallery) => {
  return{
    type: FETCH_GALLERY,
    payload: gallery
  }
}

export const fetchGalleryFailure = (error) => {
  return{
    type: FETCH_GALLERY_FAILURE,
    payload: error
  }
}