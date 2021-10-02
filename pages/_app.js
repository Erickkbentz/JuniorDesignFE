import "../styles/globals.css"
import "../styles/jobs-page.css"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import MainNavbar from './components/MainNavbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <MainNavbar/>
      <Component {...pageProps} />
    </>
  )
  
}

export default MyApp