import React from "react";

class TextInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.textInput = React.createRef();  }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `URL - ${this.textInput}`    );
    }
  
    render() {
      return (
        <div className="container">
            <div className="col-lg-10">      </div>
            <div className="col-lg-20">  
                <form onSubmit={this.handleSubmit}>
                <label>
                Upload Plain Text:
                <input type="text" ref={this.textInput} size = '100' style={{ height: 100 }}/>        </label>
                <br />
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>

      );
    }
  }
  
export default TextInput;  