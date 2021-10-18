import React from "react";
import CreateJobFrom from '../pages/components/CreateJobForm'
import styles from '../styles/Home.module.css'

export default function Job_Create_Page() {

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>
            Create New Job
            </h1>
            <CreateJobFrom/>
        </div>
    
    )
}