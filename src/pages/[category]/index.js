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
                        }
                      }
                    }
                  }
                    websiteOptions {
                        generalFields {
                          logoText
                            responsiveLogo{
                                node{
                                  sourceUrl
                                }
                              }
                           mainMenu{
                                items{
                                  label
                                  url
                                  
                                }
                                lastItem{
                                  last_label
                                  last_url
                                }
                              }
                          copyRight {
                            leftText
                            rightText
                            linkText
                            link
                          }
                          categories{
                            category{
                              nodes{
                                slug
                                name
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
       <>

           <Navber data={data?.generalFields} categories={data?.categories}/>

           <div className='md:h-[83vh] overflow-hidden flex justify-center items-center'>
               <div className='md:w-[90vw]'>
                   <Project data={data} />
               </div>
           </div>

           {/*<Project data={data} />*/}
           <Footer data={data?.generalFields}/>
       </>
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
                generalFields: data?.websiteOptions?.generalFields || {},
                categories: data.websiteOptions?.generalFields?.categories?.reduce((acc, curr) => {
                    const { slug, name } = curr.category.nodes[0];
                    acc.push({ slug, name });
                    return acc;
                }, []) || []

            }

        }
    };
};
