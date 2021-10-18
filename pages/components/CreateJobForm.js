import React from "react"
import styles from '../../styles/Home.module.css'


class CreateJobForm extends React.Component {
    constructor(props) {
        super(props)
    }
      
    createJob(event) {
        event.preventDefault()

        var d = new Date()
        var currentTime = d.toLocaleString
        
        const res = fetch('/api/job/create', {
            method: 'POST',
            body: JSON.stringify({
                jobName: event.target.jobName.value,
                createTime: currentTime,
                status: event.target.status.value,
                inputLocation: event.target.inputLocation.value,
                outputLocation: event.target.outputLocation.value
            }),
        })
            
    }

    render(){
        return ( 
            <form onSubmit={this.createJob}>
                <label htmlFor="jobName" className = {styles.card}>
                    Job Name
                    <input id="jobName" name="jobName" type="text"/>
                </label>

                <label htmlFor="status" className = {styles.card}>
                    Status
                    <input id="status" name="status" type="text"/>
                </label>

                <label htmlFor="inputLocation" className = {styles.card}>
                    File Path or URL
                    <input id="inputLocation" name="inputLocation" type="text"/>
                </label>

                <label htmlFor="outputLocation" className = {styles.card}>
                    Output Location
                    <input id="outputLocation" name="outputLocation" type="text"/>
                </label>
                <button type="submit" >Submit</button>
            </form>
        
        )
    }
}

export default CreateJobForm