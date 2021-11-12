import React from "react"
import styles from '../../styles/Home.module.css'
class CreateJobForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            selectedOption: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

      
    async createJob(event) {
        event.preventDefault()
        try {
            let res =  await fetch('/api/job/create', {
                method: 'POST',
                body: JSON.stringify({
                    jobName: event.target.jobName.value,
                    createTime: currentTime,
                    status: event.target.status.value,
                    inputLocation: event.target.inputLocation.value,
                    outputLocation: event.target.outputLocation.value
                }),
            })

            if (res.status == 200) {
                alert("Submitted Successfully!")
                event.target.jobName.value = ""
                event.target.status.value = ""
                event.target.inputLocation.value = ""
                event.target.outputLocation.value = ""
            } else {
                alert("Unexpected Error: Try again with different arguments.")
            }

        } catch {
            alert("Unexpected Error: Try again with different arguments.")
        }
    }

    handleChange(event) {
        this.setState({
            selectedOption: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        alert(`you chose the ${this.state.selectedOption} .`);
    }

    render() {
        return ( 
            <form onSubmit={this.createJob}>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div className="radio">
                            <label htmlFor="jobType" className = {styles.card}>
                                Job Type
                                <div>
                                    <label>
                                        <input
                                        type="radio"
                                        value="csvFile"
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
                    </form>
                    
                    
                    <label htmlFor="jobName" className = {styles.card}>
                        Job Name
                            <input id="jobName" name="jobName" type="text"/>
                    </label>

                    <label htmlFor="status" className = {styles.card}>
                        Status
                        <input id="status" name="status" type="text"/>
                    </label>
                    <label htmlFor="inputLocation" className = {styles.card}>
                        File Path or URL:
                        <input id="inputLocation" name="inputLocation" type="text"/>
                        {/* <input type="file" ref={this.fileInput} className = {styles.fileInput}/> */}
                    </label>

                    <label htmlFor="outputLocation" className = {styles.card}>
                        Output Location
                        <input id="outputLocation" name="outputLocation" type="text"/>
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