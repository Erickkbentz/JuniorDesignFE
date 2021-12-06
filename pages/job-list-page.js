import React, { useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PrismaFactory from '../util/PrismaFactory'
import { saveAs } from 'file-saver'

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_List_Page({jobs}) {
    const router = useRouter()

    const downloadFile = async (jobId) => {
        const res = await fetch("/api/job/download", {
            method: 'POST',
            body: JSON.stringify({
                jobId: jobId
            })
        })
        console.log("downloading file")
        return res
    }

    const saveFile = (jobName) => {
        let jsonFile = require('../../UserFiles/1/outputFiles/' + jobName + '-output.json')
        let cleanJson = JSON.stringify(jsonFile)

        let blob = new Blob([cleanJson], {type: "application/json"});

        saveAs(
            blob,
            jobName + "-output.json"
        )
    }
    return (
        <div>
         <div className="pageBody">
                {/*container to have page header and button in-line; in jobs-page.css*/}
                <div className="jobs-container-head-grid">
                    <h1 className="jobs-grid-item-left">Inference Jobs</h1>
                    <span className="jobs-grid-item-right">
                        <Link href="/job-create-page" styles={{ textDecoration: 'none' }} passHref>
                            <button className="createButton">Create New</button> 
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
                                {/* Iterate over all jobs and display data */}
                                {jobs && jobs.map(job =>
                                    <tr key={job.id}>
                                        <td>{job.jobName}</td>
                                        <td>{job.status}</td>
                                        <td className="text-center">
                                            {/* Make buttons conditional - only if status COMPLETED */}
                                            <button className="tableButton" type="button" onClick={() => {
                                                job.status != "COMPLETED" ? 
                                                alert("Sorry, your job is in status FAILED or IN_PROGRESS jobs.") : 
                                                router.push('/job-view-page?id=' + job.id)
                                            }}>
                                                View
                                            </button>
                                            <button className="tableButton" type="button" onClick={() => {
                                                job.status != "COMPLETED" ? 
                                                alert("Sorry, your job is in status FAILED or IN_PROGRESS jobs.") :
                                                saveFile(job.jobName)
                                            }}>
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}


export async function getServerSideProps( context ) {
    const userId = 1 //use authentication to get dynamic userID

    const prisma = PrismaFactory.getPrismaInstance()

    const jobs = await prisma.job.findMany({
        where: {
            author: {id: userId}
        }
    })
    return { props: { jobs } }
}
