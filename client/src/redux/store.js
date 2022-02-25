import { createStore, applyMiddleware } from "redux";
import galleryReducer from "./gallery/galleryReducer";
import logger from "redux-logger";

const store = createStore(galleryReducer, applyMiddleware(logger));

export default store;
