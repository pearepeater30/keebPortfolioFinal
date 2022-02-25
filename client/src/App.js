import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import AlbumContainer from "./components/AlbumContainer/AlbumContainer";
import CreateGallery from "./components/CreateGallery/createGallery";
import IndividualGallery from "./components/IndividualGallery/IndividualGallery";
import About from "./components/About/About";
import Error from "./components/404/Error";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route path="/" element={<AlbumContainer />}>
            {" "}
          </Route>
          <Route path="/:id" element={<IndividualGallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>

        {/* <CreateGallery></CreateGallery> */}
      </div>
    </Provider>
  );
}

export default App;
