import "@/styles/globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import {gql} from "@apollo/client";
import {initializeApollo} from "@/utiles/instance";


export default function App({ Component, pageProps }) {
    return (


    <main className={inter.className}>
        <Component {...pageProps} />
    </main>



)
}



