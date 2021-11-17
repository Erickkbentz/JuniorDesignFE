import React from 'react'
import PrismaFactory from '../util/PrismaFactory'
import PieChart from './components/PieChart.js';
import dummyDataset from '../util/dummyData.js';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({job}) {
  // let index = 0;
  // console.log(job)
  let sentences = dummyDataset[job.jobName].sentences;

  let listItems = sentences.map((sentence) =>  <li>{sentence}</li>);
  return (
    <div style={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
            Job view of {job.jobName}
        </h1>
        <div style={{display:"flex", flexDirection: "column",justifyContent: "center"}}>
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
  )
}

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