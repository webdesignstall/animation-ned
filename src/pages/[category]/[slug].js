import ProjectDetails from "@/components/ProjectDetails";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveProjectDetails from "@/components/ResponsiveProjectDetails";
import {initializeApollo} from "@/utiles/instance";
import {gql} from "@apollo/client";
import {useParams} from "next/navigation";

const queryFunc = (params)=>{

    const query = gql`
                {
                  projectBy(uri: "${params?.slug}") {
                    id,
                    title,
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
                `;
    return query;
}

const  ProjectDetail =({data})=> {
    const params = useParams();
  return (
    <>
      <div className="hidden lg:block ">
        <ProjectDetails params={params} data={data} />
      </div>
      <div className="block lg:hidden">
        <ResponsiveProjectDetails params={params} data={data} />
      </div>
    </>
  );
}

export default ProjectDetail;


export const getServerSideProps = async ({params}) => {
    const apolloClient = initializeApollo(); // initialize apollo client

    // Fetch data using Apollo client
    const { data } = await apolloClient.query({
        query: queryFunc(params),
    });

    return {
        props: {
           data: {
                projectDetail: data?.projectBy || []
           }

        }
    };
};
