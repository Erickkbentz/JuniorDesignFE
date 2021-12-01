import React from 'react'
import PrismaFactory from '../util/PrismaFactory'
import PieChart from './components/PieChart.js';
import dummyDataset from '../util/dummyData.js';
import Link from 'next/link'
import html2canvas from 'html2canvas'



/**
 * 
 * @param {Job} job the job which the user has selected
 * @returns the react component of the Job_view Page
 */

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({job}) {
  // let index = 0;
  // console.log(job)
  let sentences = dummyDataset[job.jobName].sentences;

  let listItems = sentences.map((sentence, index) =>  <li key={index}>{sentence}</li>);

  return (
    <div className="pageBody">
          <div className="jobs-container-head-grid">
              <span className="jobs-grid-item-left">
                  <Link href="/job-list-page" styles={{ textDecoration: 'none' }} passHref>
                      <button className="backButton">Back</button>
                  </Link>
              </span>
              <h1 className="jobs-grid-item-center">
                Job View of {job.jobName}
              </h1>
              <span className="jobs-grid-item-right">
                {/* just a placeholder for now - add download button logic here */}
                  {/* <Link href="/job-list-page" styles={{ textDecoration: 'none' }} passHref> */}
                      <button className="backButton" onClick={() => {

                        html2canvas(document.getElementById('capture')).then(canvas => {
                          var dataURL = canvas.toDataURL("image/jpeg", 1.0)
                          downloadImage(dataURL, job.jobName + '.jpeg');
                        })

                      }}>
                        Share
                      </button>
                  {/* </Link> */}
            </span>
          </div>

        <main>
          <div id='capture' style={{display:"flex", flexDirection: "column",justifyContent: "center"}}>
            <h3>
              Ethos, Logos, and Pathos Percentage:
            </h3>
            <PieChart data={dummyDataset[job.jobName].elp} labels = {["Ethos","Logos","Pathos"]}/>
            <h3>
              Persuasive vs Normal Sentences:
            </h3>
            <PieChart data={dummyDataset[job.jobName].persuasion} labels = {["Persuasive Sentence", "Normal Sentence"]}/>
            <p className={styles.description}>
              Sentences Analyzed:
            </p>
            <ul>{listItems}</ul>
          </div>
        </main>
    </div>
  )}
const styles = {
  container:{
    minHeight: 1600,
    padding: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: 100,
  },
  main:{
    minHeight: 800,
    padding: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title:{},
  description:{}
}

function downloadImage(data, filename = 'untitled.jpeg') {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
}

/**
 * Finds the job which the user has selected.
 * 
 * @param {*} context 
 * @returns a json object of the Job
 */
export async function getServerSideProps( context ) {
  const userId = 1 //use authentication to get dynamic userID

  const { id } = context.query
  console.log("prams:" + JSON.stringify(context.query))

  const idInt = parseInt(id)
  const prisma = PrismaFactory.getPrismaInstance()

  const job = await prisma.job.findUnique({
      where: {
          id: idInt,
      }
  })
  
  return { props: { job } }
}

