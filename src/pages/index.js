
import ScrollSection from "@/components/ScrollSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Home() {

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
        <ScrollSection/>   
        {/* <div className="slider-container">
          <Slider {...settings}>            
              <ScrollSection/>           
          </Slider>
        </div> */}
        </>
       
      );
}
