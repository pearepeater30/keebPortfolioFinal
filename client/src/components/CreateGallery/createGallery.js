import { connect } from "react-redux";

const createGallery = (props) => {
  function handleFile(event) {
    const data = new FormData();
    data.append("file", event.target.files[0]);
    console.log(data);
  }

  return (
    <div>
      <form>
        <div className="row">
          <div className="col-5">
            <label htmlFor="board">Board Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Geonworks F1-8X"
              name="board"
              id="board"
            ></input>
          </div>
          <div className="col-2">
            <label htmlFor="switch">Switches</label>
            <input
              type="text"
              className="form-control"
              placeholder="MX Blacks"
              name="switches"
              id="switches"
            ></input>
          </div>
          <div className="col-2">
            <label htmlFor="keycaps">Keycaps</label>
            <input
              type="text"
              className="form-control"
              placeholder="GMK WoB"
              name="keycaps"
              id="keycaps"
            ></input>
          </div>
        </div>
        <div className="row">
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label">
              Upload Image
            </label>
            <input className="form-control" type="file" id="formFile" onChange={handleFile}/>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

function mapDispatchToProps(state) {}

export default createGallery;
