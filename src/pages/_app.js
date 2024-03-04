import "@/styles/globals.css";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


import '../styles/globals.css'

// import '../styles/locomotive-css.css'



export default function App({ Component, pageProps }) {
  return (


        <main className={inter.className}>
            {/*<ApolloProvider client={wpClient}>*/}

                <Component {...pageProps} />
            {/*</ApolloProvider>*/}
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