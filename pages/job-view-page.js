
import React from 'react'
import styles from '../styles/Home.module.css'
import DBClient from '../util/DBClient.js'
import { useRouter } from 'next/router'

/** @param {import('next').InferGetServerSidePropsType<typeof getServerSideProps> } props */
export default function Job_View_Page({jobs}) {
  const router = useRouter();
  const { id } = router.query;
  const index = parseInt(id) - 1;
  let job = jobs[index];
  
  return (
    <div className={styles.container}>
    
    <main className={styles.main}>
        <h1 className={styles.title}>
         Job view of {job.jobName}
        </h1>
        <p className={styles.description}>
          Test
        </p>
      </main>
      
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