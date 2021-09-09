import "../styles/globals.css"
import "../styles/jobs-page.css"
import 'bootstrap/dist/css/bootstrap.css'

import { Amplify } from "aws-amplify"
import { AmplifyAuthenticator } from "@aws-amplify/ui-react"
import awsExports from "../aws-exports"
Amplify.configure({ ...awsExports, ssr: true })

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyAuthenticator>
      <Component {...pageProps} />
    </AmplifyAuthenticator>
  )
}

export default MyApp