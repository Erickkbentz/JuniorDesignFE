import React from "react";
import { ReactDOM } from "react";
import DBClient from '../../util/DBClient.js'
import { GetServerSideProps } from '../addJob.js';

// const prisma = DBClient.getPrismaInstance()

class URLInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.URLInput = React.createRef();  }
    handleSubmit(event) {
      event.preventDefault();
      // main();
      this.createJob();

      // event.preventDefault();
      // getServerSideProps();
      // alert(
      //   `URL - ${this.URLInput}`    );

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




// export const getServerSideProps = async ({ req }) => {
//   const prisma = DBClient.getPrismaInstance()

//   const job = await prisma.job.create({
//     data: {
//       id: '20',
//       jobName : 'idk',
//       createTime : 'sdf',
//       status : 'sfsd',
//       inputLocation : 'sdf',
//       outputLocation : 'sdf',
//       author: '1',
//       authorID: '1',
//     },
//   })

  // const job = prisma.createJob({
  //   id: '20',
  //   jobName : 'idk',
  //   createTime : 'sdf',
  //   status : 'sfsd',
  //   inputLocation : 'sdf',
  //   outputLocation : 'sdf',
  //   author: '1',
  //   authorID: '1',
  // })
  // return { props: {job} }
// }
  
export default URLInput;  
