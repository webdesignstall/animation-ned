import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import { Rubik } from "next/font/google";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
// import {ScrollSmoother} from "gsap-trial/dist/ScrollSmoother";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

function ProjectDetails({params, data}) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const marginLeft = useRef(null);
  const marginLeft2 = useRef(null);
  const section10MarginLeft = useRef(null);

  gsap.registerPlugin(ScrollTrigger);



  useGSAP(() => {

    const sectionWrap = document.querySelectorAll('.section');

    let totalWidth = 0;

    for (let i = 1; i < sectionWrap.length; i++) {
      const offsetWidthValue = sectionWrap[i].clientWidth;

      totalWidth += offsetWidthValue;
    }


    const scrollTween = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${totalWidth}`,
        ease: "none",
        duration: 500,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "8000 top",
          scrub: 1,
          pin: true,
        },
      }
    );

      const lenis = new Lenis({
          smooth: true
      })

      lenis.on('scroll', (e) => {
      })

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time)=>{
          lenis.raf(time * 1000)
      })

      gsap.ticker.lagSmoothing(0)

    gsap.fromTo(
      ".section-one",
      {
        y: 200,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.inOut",
        stagger: 1,
        duration: 1.5,
      }
    );

    gsap.to(marginLeft.current, {
      marginLeft: -150,
      duration: 2,
      scrollTrigger: {
        trigger: marginLeft.current,
        containerAnimation: scrollTween,
        toggleActions: "restart none reverse none",
        scrub: 1,
      },
    });

    gsap.to(marginLeft2.current, {
      marginLeft: -150,
      duration: 2,
      scrollTrigger: {
        trigger: marginLeft2.current,
        containerAnimation: scrollTween,
        toggleActions: "restart none reverse none",
        scrub: 1,
      },
    });
    gsap.to(section10MarginLeft.current, {
      marginLeft: -150,
      duration: 2,
      scrollTrigger: {
        trigger: section10MarginLeft.current,
        containerAnimation: scrollTween,
        toggleActions: "restart none reverse none",
        scrub: 1,
      },
    });
  });


  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);


  return (
    <>
      <section
        className="hidden md:block scroll-section-outer bg-[#EEEEEF]"
        ref={containerRef}
      >
        <div ref={triggerRef}>
          <div
            style={{
              display: "flex",
            }}
          >
            <div>
              <Link
                href={`/${params?.category}`}
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  lineHeight: "24px",
                  letterSpacing: " 0em",
                  textAlign: "left",
                  color: "#202020",
                }}
                className="fixed left-[80px] top-[30px] z-50 font-black flex items-center gap-5"
              >
                <svg
                  width="20"
                  height="12"
                  viewBox="0 0 20 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.01578 12.0001L6.69684 11.3523L1.89427 6.78472H19.9942V5.86871H1.81723L6.69684 1.22783L6.01578 0.580078L0.69312 5.64234L0.686929 5.63644L0.00585938 6.28418L0.0120506 6.29008L0.00585938 6.29596L0.686929 6.94372L0.69312 6.93782L6.01578 12.0001Z"
                    fill="#202020"
                  />
                </svg>
                Terug
              </Link>
            </div>
          </div>

          <div ref={sectionRef} className="scroll-section-inner">
            <div className="section scroll-section flex items-center h-full">
              <div className="flex gap-5 h-[100vh justify-center items-center w-[915px]">
                <div className="mt-4 section-one">
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "16.71px",
                      textAlign: "center",
                    }}
                  >
                    {params?.category || data?.categories?.nodes[0]?.name}

                  </p>
                    <div style={{maxWidth: '700px', overflow: "hidden"}}>


                    <p
                      className="mt-10 text-[#202020] title"
                      style={{

                        fontSize: "109.87px",
                        fontWeight: 200,
                        lineHeight: "130px",
                        textAlign: "center",
                        textWrap: 'wrap'
                      }}
                    >
                      {data?.projectDetail?.title}
                    </p>
                    </div>

                </div>
              </div>
            </div>

            {
              data?.projectImages[0] && (
                    <div className="mr-32 section">
                      <div className="h-[100vh] w-[900px]">

                        <Image
                            src={data?.projectImages[0]}
                            width={710}
                            height={780}
                            className="object-cover w-full h-full"
                        />

                      </div>
                    </div>

                )
            }
            {
                data?.projectImages[1] && (
                    <div className="scroll-section mr-16 flex items-center h-full section">
                      <div className="flex gap-5 items-center justify-center">
                        <div className="w-[710px]">

                          <Image
                              src={data?.projectImages[1]}
                              width={710}
                              height={780}
                              className="object-cover w-[710px] h-[70vh]"
                          />

                        </div>
                      </div>
                    </div>

                )
            }
            {
                data?.projectImages[2] && (
                    <div className="scroll-section mr-32 flex items-center h-full section">
                      <div className="flex gap-5 items-center justify-center">
                        <div className="w-[410px]" ref={marginLeft}>
                            <Image
                                alt={"image4"}
                                src={data?.projectImages[2]}
                                width={710}
                                height={780}
                                className="object-cover w-[250px] h-[40vh]"
                            />
                        </div>
                      </div>
                    </div>

                )
            }
            {
                data?.projectImages[3] && (
                    <div className="mr-[20rem] section">
                      <div className="w-[1793px] h-[100vh]">
                          <Image
                              src={data?.projectImages[3]}
                              width={710}
                              height={780}
                              className="object-cover w-full h-fit"
                          />
                      </div>
                    </div>

                )

            }
            {
                data?.projectImages[4] && (
                    <div className="section">
                      <div className="h-[100vh] w-[1428px]">
                          <Image
                              src={data?.projectImages[4]}
                              width={710}
                              height={780}
                              className="object-cover w-full h-full"
                          />
                      </div>
                    </div>
                )
            }
            {
                data?.projectImages[5] && (
                    <div className="mr-2 section">
                      <div className="flex items-center h-full w-[775px]">
                        <div className="" ref={marginLeft2}>

                            <Image
                                src={data?.projectImages[5]}
                                width={710}
                                height={780}
                                className="object-cover w-full h-fit"
                            />

                        </div>
                      </div>
                    </div>

                )
            }

            {
                data?.projectImages[6] && (
                    <div className="mr-20 section">
                      <div className="h-[100vh] w-[1793px]">

                          <Image
                              src={data?.projectImages[6]}
                              width={710}
                              height={780}
                              className="object-cover w-full h-full"
                          />

                      </div>
                    </div>

                )
            }
            {
                data?.projectImages[7] && (
                    <div className="scroll-section flex items-center h-full ml-[200px] mr-1 section">
                      <div className="flex gap-5 items-center justify-center">
                        <div className="w-[755.34px]">
                            <Image
                                src={data?.projectImages[7]}
                                width={710}
                                height={780}
                                className="object-cover w-[710px] h-[70vh]"
                            />
                        </div>
                      </div>
                    </div>
                )
            }

            {
                data?.projectImages[8] && (
                    <div className="scroll-section flex items-center h-full mr-32 section">
                      <div className="flex gap-5 items-center justify-center">
                        <div
                            className="w-[558.92px] h-[373px]"
                            ref={section10MarginLeft}
                        >

                            <Image
                                alt={"image4"}
                                src={data?.projectImages[8]}
                                width={710}
                                height={780}
                                className="object-cover w-full h-full"
                            />

                        </div>
                      </div>
                    </div>
                )
            }


            {
                data?.projectImages[9] && (
                    <div className="mr-32 section">
                      <div className="h-[100vh] w-[1441px]">

                          <Image
                              src={data?.projectImages[9]}
                              width={710}
                              height={780}
                              className="object-cover w-full h-full"
                          />

                      </div>
                    </div>
                )
            }



            <div className="section scroll-section flex items-center h-full">
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
                    {params?.category}
                  </p>
                    <div style={{maxWidth: '500px', overflow: "hidden"}}>


                    <p
                      className="mt-10 text-[#202020]"
                      style={{
                        position: "relative",

                        fontSize: "40px",
                        fontWeight: 500,
                        lineHeight: "1.2em",
                        letterSpacing: "-0.3499999940395355px",
                        textAlign: "center",
                      }}
                    >
                      {data?.projectDetail?.title}
                    </p>

                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<section className="block md:hidden">*/}
      {/*  <Link*/}
      {/*    href="/projects"*/}
      {/*    style={{*/}
      {/*      fontSize: "16px",*/}
      {/*      fontWeight: 500,*/}
      {/*      lineHeight: "24px",*/}
      {/*      letterSpacing: " 0em",*/}
      {/*      textAlign: "left",*/}
      {/*      color: "#202020",*/}
      {/*    }}*/}
      {/*    className="fixed flex items-center gap-5 bg-[#eeeeef] w-full px-10 py-5"*/}
      {/*  >*/}
      {/*    <svg*/}
      {/*      width="20"*/}
      {/*      height="12"*/}
      {/*      viewBox="0 0 20 12"*/}
      {/*      fill="none"*/}
      {/*      xmlns="http://www.w3.org/2000/svg"*/}
      {/*    >*/}
      {/*      <path*/}
      {/*        d="M6.01578 12.0001L6.69684 11.3523L1.89427 6.78472H19.9942V5.86871H1.81723L6.69684 1.22783L6.01578 0.580078L0.69312 5.64234L0.686929 5.63644L0.00585938 6.28418L0.0120506 6.29008L0.00585938 6.29596L0.686929 6.94372L0.69312 6.93782L6.01578 12.0001Z"*/}
      {/*        fill="#202020"*/}
      {/*      />*/}
      {/*    </svg>*/}
      {/*    Terug*/}
      {/*  </Link>*/}
      {/*  <div className="w-10/12 mx-auto">*/}
      {/*    <Link href="/">*/}
      {/*      <Image*/}
      {/*        src={"/img/project/22420_frame.png"}*/}
      {/*        width={710}*/}
      {/*        height={610}*/}
      {/*      />*/}
      {/*    </Link>*/}
      {/*    <div className="mt-5">*/}
      {/*      <Link href="/" className="mt-5">*/}
      {/*        <Image*/}
      {/*          src={"/img/project/22420_frame.png"}*/}
      {/*          width={710}*/}
      {/*          height={710}*/}
      {/*        />*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
}

export default ProjectDetails;
