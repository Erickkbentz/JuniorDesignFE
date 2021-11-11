import React from "react";
import { ReactDOM } from "react";
import CreateJobForm from './CreateJobForm'

// change based on this.state.selectedOption from CreateJobForm.js

class URLInput extends React.Component {

    render() {
      return (
        <div className="container">
            <div className="col-lg-10">      </div>
            <div className="col-lg-20">  
                <form onSubmit={this.handleSubmit}>
                <label>
                Upload Subreddit URL:
                <input type="url" ref={this.URLInput} />        </label>
                {/* <br />
                <button type="submit">Submit</button> */}
                </form>
            </div>
        </div>

      );
    }
  }
  
export default URLInput;  