import React from "react";
import { ReactDOM } from "react";
import DBClient from '../../util/DBClient.js'

class URLInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.URLInput = React.createRef();  }
    handleSubmit(event) {
      event.preventDefault();
      alert(
        `URL - ${this.URLInput}`    );

    }
  
    render() {
      return (
        <div className="container">
            <div className="col-lg-10">      </div>
            <div className="col-lg-20">  
                <form onSubmit={this.handleSubmit}>
                <label>
                Upload Subreddit URL:
                <input type="url" ref={this.URLInput} />        </label>
                <br />
                <button type="submit">Submit</button>
                </form>
            </div>
        </div>

      );
    }

    async createJob() {
      const prisma = DBClient.getPrismaInstance()
      const job = await prisma.job.create({
            data: {
                id: '20',
                jobName : 'idk',
                createTime : 'sdf',
                status : 'sfsd',
                inputLocation : 'sdf',
                outputLocation : 'sdf',
                author: '1',
                authorID: '1',
            }
        })
    }

  }

  
export default URLInput;  
