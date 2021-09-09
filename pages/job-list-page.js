import React, { useState} from 'react'

export default function Job_List_Page() {
    const [jobs, setJobs] = useState([
        {jobId: 1, name: "TestJob1", status: "Complete"},
        {jobId: 2, name: "TestJob2", status: "Failed"},
        {jobId: 3, name: "TestJob3", status: "Complete"},
        {jobId: 4, name: "TestJob4", status: "Complete"},
        {jobId: 5, name: "TestJob5", status: "In Progress"}
    ])

    return (
        <div className="container">
            <div className="container-head">
                <h1 className="itemLeft">Inference Jobs</h1>
                <span className="itemRight">
                    <button className="createNewButton">Create New</button> 
                </span>
            </div>

            <div className="table-container">
                <div className="table-responsive fixed-table-body">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Job Name</th>
                                <th>Status</th>
                                <th> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs && jobs.map(job =>
                                <tr key={job.jobId}>
                                    <td>{job.name}</td>
                                    <td>{job.status}</td>
                                    <td className="text-center">
                                        <button className="jobListButton" type="button">View</button>
                                        <button className="jobListButton" type="button">Download</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

