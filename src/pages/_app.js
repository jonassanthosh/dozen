import '@/styles/globals.css'
import Layout from '../components/Layout'
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }) {
  return (
    <div className='grid m-20 place-content-center'>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* <h1>Hello, {user.username}!</h1> */}
            <Layout>
              <Component {...pageProps} />
              <button onClick={signOut}>Sign out</button>
            </Layout>
          </main>
        )}
      </Authenticator>
    </div>
  )
}
