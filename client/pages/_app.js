import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from '../components/Nav'
import Head from 'next/head'
// import { Head } from 'next/document'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from '../context'
import 'react-toastify/dist/ReactToastify.css'
import 'antd/dist/reset.css'

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Head>
                <link rel='stylesheet' href='/css/styles.css' />
            </Head>
            <Nav />
            <ToastContainer position='top-center' />
            <Component {...pageProps} />
        </UserProvider>
    )
}

export default MyApp
