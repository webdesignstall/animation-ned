
import Project from "@/components/Project";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navber from "@/components/Navber";
import Footer from "@/components/Footer";
import { useEffect } from "react";


export default function Projects() {

   useEffect(()=>{

   }, [])
    

      return (
        <div className='h-[100vh]'>
          <Navber/>
            <div className='pt-14 h-[83vh] overflow-hidden flex justify-center'>
                <div className='w-[90vw]'>
                    <Project/>
                </div>

            </div>
          <Footer/>  
        </div>
       
      );
}
