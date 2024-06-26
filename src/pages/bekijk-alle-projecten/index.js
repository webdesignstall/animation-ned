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
                   projects{
                        nodes{
                          id,
                          title,
                           slug
                          categories{
                            nodes{
                              id
                              slug
                              name
                            }
                          }
                          featuredImage {
                            node {
                              sourceUrl
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


            <div className='category-page flex flex-wrap justify-stretch lg:flex lg:flex-wrap lg:justify-between h-[100vh]'>

                <Navber data={data} categories={data?.categories}/>

                <div className='overflow-hidden flex justify-center items-center w-[100%]'>
                    <div>

                        <Project data={data}/>
                    </div>
                </div>

                <div className='self-end w-[100%] border-t-[1.02px] border-[#00000026]'>
                    <Footer data={data?.generalFields}/>
                </div>


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
                projects: data?.projects?.nodes || [],
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
