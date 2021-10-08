import React from "react";
import { PrismaClient } from '@prisma/client'
import styles from '../../styles/Home.module.css'

import { Field, Formik, Form } from 'formik';

const DataUpload = ({jobs}) => (
  <div className={styles.main}>
    <h1 className={styles.title}>
      Create New Job
    </h1>
    <p className={styles.description}>
          Get started by inputting a{' '}
          <code className={styles.code}>file or URL</code>
          {/* . */}
          of the data you want to analyze
        </p>
    {/* {jobs.map((job) => (
      <div key={job.id}>
        <p>ID: {job.id}</p>
        <p>Job Name: {job.jobName}</p>
        <p>Creation Time: {job.createTime}</p>
        <p>Status: {job.status}</p>
        <p>Input Location: {job.inputLocation}</p>
        <p>Output Location: {job.outputLocation}</p>
        <p>Author: {job.author}</p>
        <p>Author ID: {job.authorId}</p>
      </div>
    ))} */}

    <Formik
      initialValues={{
        id: '',
        jobName: '',
        createTime: '',
        status: '',
        inputLocation: '',
        outputLocation: '',
        author: '',
        authorID: '',
      }}
      onSubmit={(values) => {
        fetch('https://localhost:3000/api/job/create', {
          method: 'POST',
          body: console.log(JSON.stringify({ ...values, id: Number(values.id), authorID: Number(values.authorID) })),
        });
      }}
    >
      <Form>
        <label className = {styles.card}>
          Job Name
          <Field name="jobName" type="text"></Field>
        </label>
        <label className = {styles.card}>
          File Type
          <Field name="fileType" type="text"></Field>
        </label>
        {/* <label className = {styles.card}>
          Creation Time
          <Field name="createTime" type="text"></Field>
        </label> */}
        <label className = {styles.card}>
          File Path or URL
          <Field name="input" type="text"></Field>
        </label>
        <label className = {styles.card}>
          Status
          <Field name="status" type="text"></Field>
        </label>
        {/* <label className = {styles.card}>
          Input Location
          <Field name="inputLocation" type="text"></Field>
        </label> */}
        <label className = {styles.card}>
          Output Location
          <Field name="outputLocation" className = {styles} type="text"></Field>
        </label>
        {/* <label className = {styles.card}>
          Author
          <Field name="author" type="text"></Field>
        </label>
        <label className = {styles.card}>
          Author ID
          <Field name="authorID" type="text"></Field>
        </label> */}
        <button type="submit" >Submit</button>
      </Form>
    </Formik>
  </div>

);

// Home component cut for brevity
export const getServerSideProps = async () => {
  const prisma = new PrismaClient();
  const jobs = await prisma.job.findMany();
  console.log(jobs);
  return { props: { jobs } };
};  

export default DataUpload;


// export default Home;

{/* const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

function DataUpload() {
  return (
    <div className={styles.dataUpload}>
      <div className="container">
        <div className="row align-items-center my-5">
            <ColoredLine color="black" />
            <div className="col-lg-10">
                <h1 className="font-weight-light">Data Upload: Create a new Analysis Job</h1>
                //<h2 class="font-weight-light">Create a new Analysis Job</h2>
                <p>
                Upload new data here to be passed into our persuasion detection
                algorithm. The source of the data must be either a CSV file, a link
                to a Reddit subreddit or a plain text file.
                </p>
            </div>
            <div>
                <h2 className = {styles.uploadTitle}>
                  - Option 1 - Upload CSV or Text File
                </h2>
                    <FileInput/>
                <h2 className = {styles.uploadTitle}>
                  - Option 2 - Upload a Reddit Page&apos;s URL
                </h2>
                    <URLInput/>
                <h2 className = {styles.uploadTitle}>
                  - Option 3 - Upload Plain Text
                </h2>
                    <TextInput/>
            </div>

        </div>
      </div>
    </div>
  );
} */}

// export default DataUpload;
