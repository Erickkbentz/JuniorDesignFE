import React from "react";
import CreateJobFrom from '../pages/components/CreateJobForm'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Job_Create_Page() {

    return (
        <div className="pageBody">
            <div className="jobs-container-head-grid">
                <span className="jobs-grid-item-left">
                    <Link href="/job-list-page" styles={{ textDecoration: 'none' }} passHref>
                        <button className="backButton">Back</button>
                    </Link>
                </span>
                <h1 className="jobs-grid-item-center">
                    Create New Job
                </h1>
            </div>
        <CreateJobFrom/>
        </div>
    )
}