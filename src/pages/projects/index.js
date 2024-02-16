
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
        <>
          <Navber/>
          <Project/> 
          <Footer/>  
        </>
       
      );
}
