import "../styles/globals.css"
import "../styles/jobs-page.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar'


  
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';



function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <MainNavbar/>
      <Component {...pageProps} />

    </UserProvider>
  )
}

export default MyApp