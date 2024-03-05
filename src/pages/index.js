
import HomePage from "@/components/HomePage";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {initializeApollo} from "@/utiles/instance";
import {gql} from "@apollo/client";

// const query = gql`
//   query {
//     websiteOptions {
//       generalFields {
//         title
//       }
//     }
//   }
// `;
const query = gql`
{
  websiteOptions {
    generalFields{
      title
      logo{
        node{
          sourceUrl
        }
      }
    }
    homePage{
      slogan
      testimonial{
        name
        designation
        info
      }
      contactSection{
        contactRow{
          label
          details
        }
        socialMedia{
          icon{
            node{
              sourceUrl
            }
          }
          link
        }
      }
    gallery{
        item{
          node{
            sourceUrl
          }
        }
      }
  
    }
  }
  categories{
    nodes{
      name
      slug
      categoryImage{
        image{
          node{
            sourceUrl
          }
        }
      }
    }
  }
}

`;


export default function Home({data}) {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     slidesToShow: 1,
    //     // slidesToScroll: 1,
    //     autoplay: false,
    //     speed: 2000,
    //     autoplaySpeed: 2000,
    //     cssEase: "linear"
    //   };

    

      return (
        <>
          <HomePage data={data}/>
        </>
       
      );
}



export const getStaticProps = async () => {
    const apolloClient = initializeApollo(); // initialize apollo client

    // Fetch data using Apollo client
    const { data } = await apolloClient.query({
        query: query,
    });

    // console.log('query', data.websiteOptions.homePage?.gallery)

    return {
        props: {
            data: {
                title: data.websiteOptions.generalFields.title,
                slogan: data.websiteOptions.homePage.slogan,
                logo: data.websiteOptions.generalFields.logo.node.sourceUrl,
                testimonial: data.websiteOptions.homePage.testimonial,
                contactSection: data.websiteOptions.homePage.contactSection,
                categories: data.categories.nodes,
                gallaries: data.websiteOptions.homePage?.gallery?.reduce((acc, curr)=>(
                     [...acc, curr?.item.node?.sourceUrl]
                ), []),

            }

        },
        revalidate: 60
    };
};
