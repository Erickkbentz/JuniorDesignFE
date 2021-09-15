import React, { useState} from 'react'
import MainNavbar from './components/MainNavbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Job_List_Page() {
    const [jobs, setJobs] = useState([
        {jobId: 1, name: "TestJob1", status: "Complete"},
        {jobId: 2, name: "TestJob2", status: "Failed"},
        {jobId: 3, name: "TestJob3", status: "Complete"},
        {jobId: 4, name: "TestJob4", status: "Complete"},
        {jobId: 5, name: "TestJob5", status: "In Progress"}
    ])

    return (
        <div className={styles.container}>
         <MainNavbar/> 
            {/*container to have page header and button in-line; in jobs-page.css*/}
            <div className="container-head">
                <h1 className="itemLeft">Inference Jobs</h1>
                <span className="itemRight">
                    <Link href="/job-create-page">
                        <button className="createNewButton">Create New</button> 
                    </Link>
                </span>
            </div>

            {/* containter to have border around table; in jobs-page.css*/}
            <div className="table-container">

                {/* using bootstrap table stuff similar to here: https://jasonwatmore.com/post/2020/09/13/react-display-a-list-of-items*/}
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

