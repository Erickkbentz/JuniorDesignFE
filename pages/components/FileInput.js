import React from "react";
import { ReactDOM } from "react";


class FileInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();  }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `Selected file - ${this.fileInput.current.files[0].name}`    );
    }
  
    render() {
      return (
        <div className="container">
        <div className="col-lg-10">  
        <div className="col-lg-20">  
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file:
            <input type="file" ref={this.fileInput} />        </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        </div>
        </div>
        </div>
      );
    }
  }
  
export default FileInput;  