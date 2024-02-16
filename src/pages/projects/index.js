
import Project from "@/components/Project";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";


export default function Projects() {

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
        <Navber/>
          <Project/> 
          <Footer/>  
        </>
       
      );
}
