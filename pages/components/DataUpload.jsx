import React from "react";
import styles from '../../styles/Home.module.css'

import FileInput from './FileInput'
import URLInput from './URLInput'
import TextInput from './TextInput'

const ColoredLine = ({ color }) => (
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
                {/* <h2 class="font-weight-light">Create a new Analysis Job</h2> */}
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
}

export default DataUpload;