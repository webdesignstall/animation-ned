import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";


function SectionOne() {
  




  return (

    <>       
           <div className="scroll-section relative">
                        <Image src={'/img/home1.jpg'} height={941} width={1920} className="object-cover"/>  
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)' }}></div>   
                        <div className="absolute left-[60px] top-[40px]">
                          <Image src={'/img/logo.png'} height={77} width={266} className="object-cover"/>
                        </div> 

                        <div className="absolute right-[100px] top-[50px]">
                          <ul className="font-light text-[24.94px] leading-8 text-white	">
                            <li>
                                <Link href={'/'}>Luxe villa’s</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Projecten</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Utiliteitsbouw</Link>
                            </li>
                            <li>
                                <Link href={'/'}>Contact</Link>
                            </li>
                          </ul>
                        </div> 
                        <h2 className="absolute bottom-0 leading-[274.56px] text-[100px] text-light italic text-white">A1-ontwerpgroep architecten B.N.A.</h2>
                        <div className="absolute w-[59px] h-[100%] bg-[#93AA95] right-0 top-0 flex items-center justify-center">
                            <Image src={'/img/arraw.png'} height={25} width={25} className="object-cover -rotate-90"/>
                        </div>

                    </div>   
        
    </>

    

    


  );
}

export default SectionOne;