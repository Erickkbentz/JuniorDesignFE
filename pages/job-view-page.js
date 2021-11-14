import React from 'react'
import PrismaFactory from '../util/PrismaFactory'
import PieChart from './components/PieChart.js';
import dummyDataset from '../util/dummyData.js';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({job}) {
  let job = job
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
      </main>
      
    </div>
  )
}

const styles = {
  container:{
    minHeight: 600,
    padding: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 100,
  },
  main:{},
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