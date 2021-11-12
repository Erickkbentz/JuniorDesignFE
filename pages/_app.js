import "../styles/globals.css"
import "../styles/jobs-page.css"
import '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar'
<<<<<<< HEAD
  
=======
>>>>>>> 64532f04c93e1fa37811c6243623100a13d7940c
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import {SSRProvider} from '@react-aria/ssr';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <SSRProvider>
        <MainNavbar/>
        <Component {...pageProps} />
      </SSRProvider>
    </UserProvider>
  )
}


export default MyApp