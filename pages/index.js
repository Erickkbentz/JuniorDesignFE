import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import MainNavbar from './components/MainNavbar'
import { useUser } from '@auth0/nextjs-auth0';


export default function Home() {
  const user = useUser();
  
  if (!user.user ) {
    return (
      <div className={styles.container}>
        <a href="/api/auth/login">Login</a>
      </div>
    );
  }
  console.log (user);
  return (
    <div className={styles.container}>
      <MainNavbar/>
      <a href="/api/auth/logout">Logout</a>
      <Head>
        <title>Analysis Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          GTRI Analysis of Extremist Behavior Dashboard
        </h1>
        <p className={styles.description}>
          Get started by inputting a{' '}
          <code className={styles.code}>file</code>
          {/* . */}
        </p>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export { default as DataUpload } from "./components/DataUpload";
