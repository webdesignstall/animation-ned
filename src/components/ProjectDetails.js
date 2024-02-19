import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Image from "next/image";
import Link from "next/link";

import { Rubik } from "next/font/google";
import {useGSAP} from "@gsap/react";


const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});



function ProjectDetails() {


      const sectionRef = useRef(null);
      const triggerRef = useRef(null);
    const containerRef = useRef(null)
    const marginLeft = useRef(null)
    const marginLeft2 = useRef(null)

    gsap.registerPlugin(ScrollTrigger);


    useGSAP(()=>{
        let sections = gsap.utils.toArray('.scroll-section');

        const scrollTween = gsap.fromTo(
            sectionRef.current,
            {
                xPercent: 0,
            },
            {
                translateX: `-${sectionRef.current.offsetWidth}`,
                ease: "none",
                duration: 300,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 1,
                    pin: true
                },
            }
        );


        gsap.to(marginLeft.current, {
            marginLeft: -150,
            duration: 2,
            scrollTrigger: {
                trigger: marginLeft.current,
                containerAnimation: scrollTween,
                toggleActions: 'restart none reverse none',
                scrub: 1
            }
        })

        gsap.to(marginLeft2.current, {
            marginLeft: -150,
            duration: 2,
            scrollTrigger: {
                trigger: marginLeft2.current,
                containerAnimation: scrollTween,
                toggleActions: 'restart none reverse none',
                scrub: 1
            }
        })

    })

   /* useEffect(() => {





     const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 300,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 1,
          pin: true
        },
      }
    );
    return () => {
      {
        /!* A return function for killing the animation on component unmount *!/
      }
      pin.kill();
      // scroll.destroy();
    };
  }, []);*/



    return (
        <>
            <section className="scroll-section-outer bg-[#EEEEEF]" ref={containerRef}>
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="scroll-section">
                            <div className="flex gap-5 h-[100vh justify-center items-center w-[710px]">
                                <div className="mt-4">
                                    <p
                                        style={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            lineHeight: "15px",
                                            letterSpacing: "0em",
                                            textAlign: "center",
                                        }}
                                    >
                                        Luxe villa’s
                                    </p>
                                    <Link href="/">
                                        <p
                                            className="mt-10 text-[#202020]"
                                            style={{
                                                position: "relative",

                                                fontSize: "40px",
                                                fontWeight: 500,
                                                lineHeight: "15px",
                                                letterSpacing: "-0.3499999940395355px",
                                                textAlign: "center",
                                            }}
                                        >
                                            project
                                        </p>
                                        <p
                                            className="mt-10 text-[#202020]"
                                            style={{
                                                position: "relative",

                                                fontSize: "40px",
                                                fontWeight: 500,
                                                lineHeight: "15px",
                                                letterSpacing: "-0.3499999940395355px",
                                                textAlign: "center",
                                            }}
                                        >
                                            Rotterdam
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div  className="mr-32">
                            <div className="h-[100vh] w-[900px]">
                                <Link href="/">
                                    <Image
                                        src={"/img/project/22420_frame.png"}
                                        width={710}
                                        height={780}
                                        className="object-cover w-full h-full"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="scroll-section mr-16">
                            <div className="flex gap-5 items-center justify-center">
                                <div className="w-[710px]">
                                    <Link href="/">
                                        <Image
                                            src={"/img/project/22424_frame.png"}
                                            width={710}
                                            height={780}
                                            className="object-cover w-[710px] h-[70vh]"
                                        />
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="scroll-section mr-32">
                            <div className="flex gap-5 items-center justify-center">
                                <div className="w-[410px]" ref={marginLeft}>
                                    <Link href="/">
                                        <Image
                                            alt={'image4'}
                                            src={"/img/project/22428_frame.png"}
                                            width={710}
                                            height={780}
                                            className="object-cover w-[250px] h-[40vh]"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div  className="mr-[20rem]">
                            <div className="w-[1793px] h-[100vh]">
                                <Link href="/">
                                    <Image
                                        src={"/img/project/220410_frame.png"}
                                        width={710}
                                        height={780}
                                        className="object-cover w-full h-fit"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <div className="h-[100vh] w-[1428px]">
                                <Link href="/">
                                    <Image
                                        src={"/img/project/22418_frame.png"}
                                        width={710}
                                        height={780}
                                        className="object-cover w-full h-full"
                                    />
                                </Link>

                            </div>
                        </div>
                        <div  className="mr-2">
                            <div className="flex items-center h-full w-[1150px]">
                                <div className="" ref={marginLeft2}>
                                    <Link href="/">
                                        <Image
                                            src={"/img/project/22419_frame.png"}
                                            width={710}
                                            height={780}
                                            className="object-cover w-full h-fit"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="mr-20">
                            <div className="h-[100vh] w-[1793px]">
                                <Link href="/">
                                    <Image
                                        src={"/img/projectDetail/section7.jpeg"}
                                        width={710}
                                        height={780}
                                        className="object-cover w-full h-full"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default ProjectDetails;
