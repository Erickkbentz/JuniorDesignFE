// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function CreateJob() {
  return (
    <main className={styles.main}>
        <h1 className={styles.title}>
        GTRI Analysis of Extremist Behavior Dashboard
        </h1>
        <div>
          <table>
            <tr>
                <h2>Option 1 - Input a CSV or Excel file</h2>
            </tr>
            <tr>
                <h2>Option 2 - Input a Reddit URL</h2>
            </tr>
            <tr>
                <h2>Option 3 - Input plain text</h2>
            </tr>
          </table>
      </div>
    </main>
  )
}
