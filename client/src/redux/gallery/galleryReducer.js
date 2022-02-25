import { FETCH_GALLERY, UPLOAD_NEW_GALLERY, FETCH_GALLERY_FAILURE } from "./galleryTypes";

const initialState = {
  gallery: [],
  error: ''
}

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GALLERY: 
      console.log("Currently Fetching Items...")
      return {
        gallery: action.payload,
        error: "",
      }
    case UPLOAD_NEW_GALLERY:
      console.log("Current Uploading new Items")
      return state
    case FETCH_GALLERY_FAILURE:
      console.log("Failure to Fetch Items...")
      return{
        gallery: [],
        error: action.payload
      }
    default: return state
  }
}

export default galleryReducer;