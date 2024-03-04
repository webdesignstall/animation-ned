import "@/styles/globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


import '../styles/globals.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

// import '../styles/locomotive-css.css'

const wpClient = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_ENDPOINT,
    cache: new InMemoryCache()
});


export default function App({ Component, pageProps }) {
  return (


        <main className={inter.className}>
             <Component {...pageProps} />
        </main>



  )
}


// export const getStaticProps = async () => {
//     const apolloClient = initializeApollo(); // initialize apollo client
//
//     // Fetch data using Apollo client
//     const { data } = await apolloClient.query({
//         query: query,
//     });
//
//     return {
//         props: {
//             title: data.websiteOptions.generalFields.title,
//         },
//         revalidate: 60, // re-generate page every 60 seconds
//     };
// };