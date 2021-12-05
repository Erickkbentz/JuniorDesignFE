import React, { useState } from "react"
import styles from '../../styles/Home.module.css'
import { console, document, FormData } from "globalthis/implementation"
import UiFileInputButton from "./UiFileInputButton";


class CreateJobForm extends React.Component {
    constructor(props) {
        super(props)
    }
    
    // calls createJob function from api/job/create.js
    async createJob(event) {
        event.preventDefault()
        
        try {

            
            // console.log(event.target.fileLocation.value);
            // creates a response code
                // attempts to POST to database through the API with data in body            
            let res =  await fetch('/api/job/create2', {
                method: 'POST',
                body: JSON.stringify({
                    jobName: event.target.jobName.value,
                    fileLocation: event.target.fileLocation.value,
                    url: event.target.url.value,
                })
            })

            // console.log(event.target);

            if (res.status == 201) {
                alert("Submitted Successfully!")
                event.target.jobName.value = ""
                event.target.fileLocation.value = ""
                event.target.url.value = ""
            } 
            else {
                alert("Unexpected Error in CreateJobForm: Try again with different arguments.")
            }

        } catch {
            alert("Unexpected Error in CreateJobForm2: Try again with different arguments.")
        }
    }

    async onChange(formData) {
        console.log(formData);
    // const onChange = async (formData) => {
        const config = {
          headers: { 'content-type': 'multipart/form-data' },
          onUploadProgress: (event) => {
            console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
          },
        };
        // const response = await axios.post('/api/uploads', formData, config);
            // what is '/api/uploads' meant to be?
        const response = await axios.post('../api/job/create2', formData, config);

        console.log('response', response.data);
    };

    // renders the react component for this page
    render() {

        // async onChange(formData) {
        //     console.log(formData);
        // // const onChange = async (formData) => {
        //     const config = {
        //       headers: { 'content-type': 'multipart/form-data' },
        //       onUploadProgress: (event) => {
        //         console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
        //       },
        //     };
        //     // const response = await axios.post('/api/uploads', formData, config);
        //         // what is '/api/uploads' meant to be?
        //     const response = await axios.post('../api/job/create2', formData, config);
    
        //     console.log('response', response.data);
        // };

        return ( 

            <form onSubmit={this.createJob}>
                <div>
                    {/* retrieves name of job from user */}
                    <label htmlFor="jobName" className = {styles.card}>
                    Job Name
                    <input id="jobName" name="jobName" type="text"/>
                    </label>

                    {/* add a line to seperate logic for file input type */}
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                    <h3 className="jobs-grid-item-center">
                        {"Please input a file or a Reddit page's URL to be analyzed:"}
                    </h3>
                    {/* retrieves name of file from user */}
                    <label htmlFor="fileLocation" className = {styles.card}>
                        File:
                        {/* <input
                            id = "fileLocation"
                            type="file"
                            ref={this.fileInput}
                            // onChange={this.onChange}
                            // className = {styles.fileInput}
                            // value={selectedFile}
                            // onChange={(e) => setSelectedFile(e.target.files[0])}
                        /> */}
                        <UiFileInputButton
                            label="Upload Single File"
                            uploadFileName="theFile"
                            onChange={this.onChange}
                            id = "fileLocation"
                        />
                       
                    </label>

                        OR
                    {/* retrieves URL from user */}
                    <label htmlFor="url" className = {styles.card}>
                        URL:
                        <input id = "url" type="url" ref={this.URLInput} />
                    </label>
                 </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        
        )
    }
}

export default CreateJobForm