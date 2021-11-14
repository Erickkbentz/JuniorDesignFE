import React from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import PrismaFactory from '../util/PrismaFactory'
import PieChart from './components/PieChart.js';
import dummyDataset from './components/dummyData.js';

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({jobs}) {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id) - 1;
  let job = jobs[index];
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


export const getServerSideProps = async ({ req }) => {
  const userId = 1 //use authentication to get dynamic userID

  const prisma = PrismaFactory.getPrismaInstance()

  const jobs = await prisma.job.findMany({
      where: {
          author: {id: userId}
      }
  })
  return { props: { jobs } }
}