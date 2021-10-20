import React, { useState} from 'react'
import Link from 'next/link'
import DBClient from '../util/DBClient.js'

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_List_Page({jobs}) {

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
                                {jobs && jobs.map(job =>
                                    <tr key={job.id}>
                                        <td>{job.jobName}</td>
                                        <td>{job.status}</td>
                                        <td className="text-center">
                                            <button className="tableButton" type="button">View</button>
                                            <button className="tableButton" type="button">Download</button>
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


export const getServerSideProps = async ({ req }) => {
    const userId = 1 //use authentication to get dynamic userID

    const prisma = DBClient.getPrismaInstance()

    const jobs = await prisma.job.findMany({
        where: {
            author: {id: userId}
        }
    })
    return { props: { jobs } }
  }