import React from "react";
import { ReactDOM } from "react";

// export const getStaticProps = async () => {
//   // const feed = [
//   //   {
//   //     id: 1,
//   //     title: "Prisma is the perfect ORM for Next.js",
//   //     content: "[Prisma](https://github.com/prisma/prisma) and Next.js go _great_ together!",
//   //     published: false,
//   //     author: {
//   //       name: "Nikolas Burk",
//   //       email: "burk@prisma.io",
//   //     },
//   //   },
//   // ]
//   const prisma = new PrismaClient({})
//   const job = await prisma.job.create({
//         data: {
//             id: '20',
//             jobName : 'idk',
//             createTime : 'sdf',
//             status : 'sfsd',
//             inputLocation : 'sdf',
//             outputLocation : 'sdf',
//             author: '1',
//             authorID: '1',
//         }
//     })
//   return { props: { job } }
// }

// // type Props = {
// //   job: PostProps[]
// // }

// const FileInput = (props) => {
//   return (
//     <Layout>
//     <div className="container">
//     <div className="col-lg-10">  
//     <div className="col-lg-20">  
//     <form onSubmit={this.handleSubmit}>
//       <label>
//         Upload file:
//         <input type="file" ref={this.fileInput} />        </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//     </div>
//     </div>
//     </div>
//     </Layout>
//   );
// }


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