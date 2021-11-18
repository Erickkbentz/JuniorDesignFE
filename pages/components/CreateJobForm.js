import React from "react"
import styles from '../../styles/Home.module.css'
import URLInput from './URLInput'
import fileInput from './FileInput'
import Input from "./Input"
import { console } from "globalthis/implementation"

// GLOBAL VAR
var darkMode = false;

class CreateJobForm extends React.Component {
    constructor(props) {
        super(props)

        // this.state = {
        //     selectedOption: ''
        // }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    async createJob(event) {
        event.preventDefault()
    
        var d = new Date()
        var currentTime = d.toLocaleString


        try {
            let res =  await fetch('/api/job/create', {
                method: 'POST',
                body: JSON.stringify({
                    jobName: event.target.jobName.value,
                    createTime: currentTime,
                    fileLocation: event.target.fileLocation.value,
                    url: event.target.url.value,
                }),
            })

            if (res.status == 200) {
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

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value
            // change variable here
        });
        // console.log(this.state.selectedOption);

    }

    handleSubmit(event) {
        event.preventDefault();
        // switch dark mode
        // if (darkMode) {
        //     darkMode = false;
        // } else {
        //     darkMode = true;
        // }
        // console.log(darkMode);
        alert(`you chose the ${this.state.selectedOption} .`);
        console.log(this.state.selectedOption);
    }

    render() {
        return ( 
            <form onSubmit={this.createJob}>
                <div>
                    {/* <form onSubmit={this.handleSubmit}>
                        <div className="radio">
                            <label htmlFor="jobType" className = {styles.card}>
                                Job Type
                                <div>
                                    <label>
                                        <input
                                        type="radio"
                                        value="csvFile"
                                        id="csvFile"
                                        checked={this.state.selectedOption === 'csvFile'}
                                        onChange={this.handleChange}/>
                                        CSV File
                                    </label>
                                </div>
                                <div> 
                                    <label>
                                        <input
                                        type = "radio"
                                        id="urlInput"
                                        value="urlInput"
                                        checked={this.state.selectedOption === 'urlInput'}
                                        onChange={this.handleChange}/>
                                        Reddit URL
                                    </label>
                                </div>
                                
                            </label>

                        </div>
                    </form> */}
                    
                    
                    <label htmlFor="jobName" className = {styles.card}>
                        Job Name
                            <input id="jobName" name="jobName" type="text"/>
                    </label>
{/* 
                    <label htmlFor="status" className = {styles.card}>
                        Status
                        <input id="status" name="status" type="text"/>
                    </label> */}
                    {/* add a line to seperate logic for file input type */}
                    <hr  style={{
                        color: '#000000',
                        backgroundColor: '#000000',
                        height: .5,
                        borderColor : '#000000'
                    }}/>
                    {/* <div>
                        Please input a CSV file or a URL to a Reddit page to be analyzed:
                    </div> */}
                    <h3 className="jobs-grid-item-center">
                        Please input a file or a Reddit page's URL to be analyzed:
                    </h3>

                    <label htmlFor="inputLocation" className = {styles.card}>
                        File:
                        {/* saves in db with C:\fakepath\fileName.csv */}
                        <input id = "fileLocation" type="file" ref={this.fileInput} className = {styles.fileInput}/>
                    </label>

                        OR

                    <label htmlFor="inputLocation" className = {styles.card}>
                        URL:
                        <input id = "url" type="url" ref={this.URLInput} />
                    </label>

                    {/* <label htmlFor="outputLocation" className = {styles.card}>
                        Output Location
                        <input id="outputLocation" name="outputLocation" type="text"/>
                    </label> */}
                 </div>
                <div>
                    <button type="submit" >Submit</button>
                </div>
            </form>
        
        )
    }
}

export default CreateJobForm