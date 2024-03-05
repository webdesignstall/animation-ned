import Project from "@/components/Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import {gql} from "@apollo/client";
import {initializeApollo} from "@/utiles/instance";
import {useParams} from "next/navigation";



const queryFunc = (params)=>{

    const query = gql`
                {
                  categories(where: { slug: "${params?.category}" }) {
                    
                    nodes {
                      projects {
                        nodes {
                          id
                          title
                          slug
                          featuredImage {
                            node {
                              sourceUrl
                            }
                          }
                          projectFields{
                            images{
                             item{
                              node{
                                sourceUrl
                              }
                            }
                            }
                          }
                          
                        }
                      }
                    }
                  }
                }
                `;
    return query;
}

export default function Projects({data}) {
        const params = useParams();
      return (
        <div className='h-[100vh]'>

          <Navber/>

            <div className='pt-14 md:h-[83vh] overflow-hidden flex justify-center'>
                <div className='md:w-[90vw]'>
                    <Project data={data} />
                </div>
            </div>
          <Footer/>  
        </div>
       
      );
}



export const getServerSideProps = async ({params}) => {
    const apolloClient = initializeApollo(); // initialize apollo client

    // Fetch data using Apollo client
    const { data } = await apolloClient.query({
        query: queryFunc(params),
    });


    return {
        props: {
            data: {
                projects: data?.categories?.nodes[0]?.projects?.nodes || [],

            }

        }
    };
};
