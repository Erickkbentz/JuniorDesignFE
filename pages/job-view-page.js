
import React from 'react'

import DBClient from '../util/DBClient.js'
import { useRouter } from 'next/router'
import PieChart from './components/PieChart.js';
import dummyDataset from './components/dummyData.js';
/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({jobs}) {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id) - 1;
  let job = jobs[index];

  const sentences = dummyDataset.sentences[index];
  const listItems = sentences.map((sentence) =>  <li>{sentence}</li>);
  return (
    <div style={styles.container}>
      
      <main className={styles.main}>
        <h1 className={styles.title}>
         Job view of {job.jobName}
        </h1>
        <p className={styles.description}>
          Test
        </p>
        <PieChart elpData={dummyDataset.elp[index]}/>

        <text>
          Sentences analyzed:
        </text>
        <ul>{listItems}</ul>
      </main>
      
    </div>
  )
}

const styles = {
  container:{
    marginTop: 25,
    minHeight: 800,
    padding: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  main: {
    padding: 5,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title:{},
  description:{}
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