import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";


function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };

  return (

    <>       
            <section className="scroll-section-outer">    
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                    <div className="scroll-section relative">
                        <Image src={'/img/home1.jpg'} height={941} width={1920} className="object-cover"/>  
                        <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)' }}></div>   
                        <div className="absolute left-[100px] top-[50px]">
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
                        <div className="absolute w-[59px] h-[100%] bg-[#93AA95] right-3 top-0 flex items-center justify-center">
                            <Image src={'/img/arraw.png'} height={25} width={25} className="object-cover -rotate-90"/>
                        </div>

                    </div>
                    <div className="scroll-section">
                        <h3>Section 2</h3>
                    </div>
                    <div className="scroll-section">
                        <h3>Section 3</h3>
                    </div>
                    <div className="scroll-section">
                        <h3>Section 4</h3>
                    </div>
                    </div>
                </div>
            </section>    
        
    </>

    

    


  );
}

export default ScrollSection;