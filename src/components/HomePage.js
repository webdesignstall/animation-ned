import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SplitType from 'split-type'
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";

import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Rubik } from "next/font/google";
import {useGSAP} from "@gsap/react";


const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

function HomePage() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const categoryImage = useRef(null);
  const categoryImageTrigger = useRef(null);

  gsap.registerPlugin(ScrollTrigger);


  /*  useEffect(() => {
        let smoother = ScrollSmoother.create({
            content: '.scroll-section-outer',
            smooth: 1,
            speed: 0.2,
            normalizeScroll: true
        });

    }, []);*/



    const homeTitle = useRef();

    useGSAP(()=> {

        const scrollTween =   gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-230vw",
                ease: "none",
                duration: 500,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 2,
                    pin: true
                },
            }
        );


        // home page title animation
        const ourText = SplitType.create(homeTitle.current, { types: 'chars' });
        const chars = ourText.chars


        // home page nav link
        const homeNav = SplitType.create('.home-nav-link', { types: 'lines' });
        const navLinkText = homeNav.lines

        gsap.fromTo(
            chars,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power2',
                delay: 1

            }
        )

        gsap.fromTo(
            navLinkText,
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                delay: 1.5

            }
        )

        /*gsap.to('.loader1', {
            y: '-100%',
            duration: 4,
            ease: 'power4.inOut',
            onStart: ()=>{
                gsap.fromTo(
                    chars,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.05,
                        duration: 2,
                        ease: 'power2',
                        delay: 1

                    }
                )
            }
        });
        gsap.to('.loader2', {
            y: '-100%',
            duration: 4,
            ease: 'power4.inOut',
            delay: 0.2

        });
        gsap.to('.loader3', {
            y: '-100%',
            duration: 4,
            ease: 'power4.inOut',
            delay: 0.3,
            onStart: ()=>{
                gsap.fromTo(
                    navLinkText,
                    {
                        y: 100,
                        opacity: 0
                    },
                    {
                        y: 0,
                        opacity: 1,
                        stagger: 0.05,
                        duration: 2,
                        ease: 'power4.out',
                        delay: 2.2

                    }
                )
            }

        });*/



        // home page background animation
        gsap.fromTo('.home1bg', {
            scale: 1.5
        }, {
            scale: 1,
            duration: 2,
            delay: 1,
            ease: 'power2.inOut',

        })

        gsap.fromTo('.home1bg', {
            x: 0
        }, {
            x: 300, // Adjust the value based on your desired parallax effect
            ease: 'none',
            overflow: 'hidden',
            width: '100%',
            duration: 1,
            scrollTrigger: {
                trigger: '.bg-section',
                scrub: 1,
                pin: true,
                containerAnimation: scrollTween,
                toggleActions: 'restart none reverse none'
            }
        });




        const categoryImageAnimation = (target)=> {
            gsap.fromTo(target, {
                scale: 1.5,
            }, {
                scale: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: target,
                    containerAnimation: scrollTween,
                },
                ease: "power4.inOut"
            });
        }

        categoryImageAnimation('.category-image1')
        categoryImageAnimation('.category-image2')
        categoryImageAnimation('.category-image3')

    })

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };


    const imageRef = useRef(null);

    const [imageSrc, setImageSrc] = useState('/img/home/home1.jpg')

    const homeImages = [
        "/img/home/home1.jpg",
        "/img/home/home2.jpeg",
        "/img/home/home3.jpeg",
        "/img/home/home4.jpeg",
        "/img/home/home5.jpeg",
        "/img/home/home6.jpeg"
    ]; // Add more images if needed

    useEffect(() => {
        // Define images to be used


        let currentIndex = 0;

        const changeImage = () => {
            // Update the image source


            // Increment the index for the next image
            currentIndex = (currentIndex + 1) % homeImages.length;
            // imageRef.current.src = homeImages[currentIndex];

            setImageSrc(homeImages[currentIndex])

            console.log(currentIndex)
        };

        // GSAP timeline
        const timeline = gsap.timeline({ repeat: -1, delay: 6 });

        // Add the image change animation to the timeline
        timeline.to(imageRef.current, { opacity: 0, duration: 0.5, delay: 6, scale:1, onComplete: changeImage })
            .to(imageRef.current,  { scale: 1, opacity: 1, duration: 0.5, ease: 'sine' });


        // Cleanup on component unmount
        return () => {
            timeline.kill(); // Kill the GSAP timeline to prevent memory leaks
        };
    }, []);


    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0,0);
        };
    }, []);

  return (
    <>

       {/* <div className='loader1 fixed left-0 top-0 w-[33.33%] h-[100%] bg-orange-600 z-50'>

        </div>
        <div className='loader2 fixed left-[33.33%] top-0 w-[33.33%] h-[100%] bg-orange-600 z-50'>

        </div>
        <div className='loader3 fixed left-[66.66%] top-0 w-[33%] h-[100%] bg-orange-600 z-50'>

        </div>
*/}

        <section className="scroll-section-outer">
            <div ref={triggerRef} className='scroll-wrap'>
               <div ref={sectionRef} className="scroll-section-inner">

                        <div className="scroll-section relative overflow-hidden bg-section">

                            <div className='w-[100vw]'>
                                <Image
                                    src={imageSrc}
                                    alt={'home image'}
                                    ref={imageRef}
                                    height={941}
                                    width={1920}
                                    className="object-cover home1bg h-full w-[100vw]"
                                />
                            </div>


                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)",
                                }}
                            ></div>
                            <div className="absolute left-[60px] top-[40px]">
                                <Image
                                    alt={'logo'}
                                    src={"/img/logo.png"}
                                    height={77}
                                    width={266}
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute right-[100px] top-[50px]">
                                <ul className="font-light text-[24.94px] leading-8 text-white">
                                    <li>
                                        <Link href={"/projects"} className='home-nav-link'>Luxe villa’s</Link>
                                    </li>
                                    <li>
                                        <Link href={"/projects"} className='home-nav-link'>Projecten</Link>
                                    </li>
                                    <li>
                                        <Link href={"/projects"} className='home-nav-link'>Utiliteitsbouw</Link>
                                    </li>
                                    <li>
                                        <Link href={"/projects"} className='home-nav-link'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <h2 ref={homeTitle}
                                className="homeTitle absolute bottom-0 leading-[274.56px] text-[100px] text-light italic text-white">
                                A1-ontwerpgroep architecten B.N.A.
                            </h2>
                            <div
                                className="absolute w-[59px] h-[100%] bg-[#93AA95] right-0 top-0 flex items-center justify-center">
                                <Image
                                    src={"/img/arraw.png"}
                                    height={25}
                                    width={25}
                                    className="object-cover -rotate-90"
                                />
                            </div>




                       </div>


                   <div className="scroll-section w-[1463px]">

                       <div className="flex flex-col items-center justify-around h-[100vh] w-[1263px] text-wrap">
                           <p
                               className=""
                               style={{
                                   fontSize: "13px",
                                   fontWeight: "500",
                                   lineHeight: "15px",
                                   letterSpacing: "0em",
                                   textAlign: "left",
                               }}
                           >
                               A1-ontwerpgroep
                           </p>
                           <div>
                               <p
                                   style={{
                                       fontSize: "33px",
                                       fontStyle: "italic",
                                       fontWeight: 200,
                                       lineHeight: "46px",
                                       letterSpacing: "-1.0499999523162842px",
                                       textAlign: "center",
                                       width: "689px",
                                   }}
                               >
                                   Als Architect weten wij uw droom te realiseren. Met inzet
                                   van onze professie en ervaring kunnen we tot in detail op uw
                                   wensen inspelen. Van luxe villa’s tot project of
                                   utiliteitsbouw. Van idee tot werkelijkheid. Dit doen wij al
                                   meer dan 35 jaar met plezier.
                               </p>
                           </div>
                           <p
                               style={{
                                   position: "relative",

                                   fontSize: "13px",
                                   fontStyle: "italic",
                                   fontWeight: 300,
                                   lineHeight: "15px",
                                   letterSpacing: "-0.3499999940395355px",
                                   textAlign: "left",
                               }}
                           >
                               Bekijk Alle projecten
                               <span
                                   className={`
                              block h-[1px] bg-black absolute bottom-0 left-0 w-full
                            `}
                                   style={{
                                       content: "''",
                                   }}
                               />
                           </p>
                       </div>

                   </div>

                   <div className='scroll-section'>
                       <div className='flex gap-5 items-center h-[100vh]'>

                           <div className="h-[75%]" ref={categoryImageTrigger}>
                               <div className='overflow-hidden' style={{height: '100%'}}>
                                   <Link href="/projects">
                                       <Image
                                           ref={categoryImage}
                                      alt={'luxevil'}
                                      src={"/img/luxevil.jpg"}
                                      width={710}
                                      height={780}
                                      className="object-cover w-[710px] h-[100%] category-image1 overflow-hidden"
                                  />
                              </Link>
                          </div>


                          <div className="mt-4">
                              <p
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: 500,
                                      lineHeight: "15px",
                                      letterSpacing: "0em",
                                      textAlign: "left",
                                  }}
                              >
                                  Luxe villa’s
                              </p>
                              <Link href="/projects">
                                  <p
                                      className="mt-3 underline"
                                      style={{
                                          position: "relative",

                                          fontSize: "13px",
                                          fontStyle: "italic",
                                          fontWeight: 300,
                                          lineHeight: "15px",
                                          letterSpacing: "-0.3499999940395355px",
                                          textAlign: "left",
                                      }}
                                  >
                                      bekijk project
                                  </p>
                              </Link>
                          </div>
                      </div>

                      <div className="h-[75%]" ref={categoryImageTrigger}>
                          <div className='overflow-hidden' style={{height: '100%'}}>
                              <Link href="/projects">
                                  <Image
                                      ref={categoryImage}
                                      alt={'luxevil'}
                                      src={"/img/utiliteitsbouw.jpg"}
                                      width={710}
                                      height={780}
                                      className="object-cover w-[710px] h-[100%] category-image2 overflow-hidden"
                                  />
                              </Link>
                          </div>


                          <div className="mt-4">
                              <p
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: 500,
                                      lineHeight: "15px",
                                      letterSpacing: "0em",
                                      textAlign: "left",
                                  }}
                              >
                                  Utiliteitsbouw
                              </p>
                              <Link href="/projects">
                                  <p
                                      className="mt-3 underline"
                                      style={{
                                          position: "relative",

                                          fontSize: "13px",
                                          fontStyle: "italic",
                                          fontWeight: 300,
                                          lineHeight: "15px",
                                          letterSpacing: "-0.3499999940395355px",
                                          textAlign: "left",
                                      }}
                                  >
                                      bekijk project
                                  </p>
                              </Link>
                          </div>
                      </div>

                      <div className="h-[75%]" ref={categoryImageTrigger}>
                          <div className='overflow-hidden' style={{height: '100%'}}>
                              <Link href="/projects">
                                  <Image
                                      ref={categoryImage}
                                      alt={'luxevil'}
                                      src={"/img/projecten.jpg"}
                                      width={710}
                                      height={780}
                                      className="object-cover w-[710px] h-[100%] category-image3 overflow-hidden"
                                  />
                              </Link>
                          </div>


                          <div className="mt-4">
                              <p
                                  style={{
                                      fontSize: "14px",
                                      fontWeight: 500,
                                      lineHeight: "15px",
                                      letterSpacing: "0em",
                                      textAlign: "left",
                                  }}
                              >
                                  Projecten
                              </p>
                              <Link href="/projects">
                                  <p
                                      className="mt-3 underline"
                                      style={{
                                          position: "relative",

                                          fontSize: "13px",
                                          fontStyle: "italic",
                                          fontWeight: 300,
                                          lineHeight: "15px",
                                          letterSpacing: "-0.3499999940395355px",
                                          textAlign: "left",
                                      }}
                                  >
                                      bekijk project
                                  </p>
                              </Link>
                          </div>
                      </div>
                  </div>


              </div>

              <div className="scroll-section">
                  <div className="ml-[200px]">
                      <p
                          className="mb-[80px]"
                          style={{
                              fontSize: "72px",
                              fontWeight: 250,
                              lineHeight: "102px",
                              letterSpacing: "0em",
                              textAlign: "left",
                          }}
                      >
                          Contact
                      </p>

                      <div className="mb-[50px]">
                          <p
                              className={`${rubik.className} uppercase mb-4`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                                  color: "#93AA95",
                              }}
                          >
                              contact
                          </p>

                          <p
                              className={`${rubik.className}`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                              }}
                          >
                              010-4523552
                          </p>

                          <p
                              className={`${rubik.className}`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                              }}
                          >
                          info@a1-ontwerpgroep.nl
                          </p>
                      </div>

                      <div className="mb-[50px]">
                          <p
                              className={`${rubik.className} uppercase mb-4`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                                  color: "#93AA95",
                              }}
                          >
                              adres
                          </p>

                          <p
                              className={`${rubik.className}`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                              }}
                          >
                              Hendrik Wachterstraat 13 <br/> 3065 LD Rotterdam <br/>{" "}
                              Nederland
                          </p>
                      </div>

                      <div className="mb-[50px]">
                          <p
                              className={`${rubik.className} uppercase mb-4`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                                  color: "#93AA95",
                              }}
                          >
                              gegevens
                          </p>

                          <p
                              className={`${rubik.className}`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                              }}
                          >
                              KVK-nummer: 52685063
                          </p>

                          <p
                              className={`${rubik.className}`}
                              style={{
                                  fontSize: "16px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  letterSpacing: "0em",
                                  textAlign: "left",
                              }}
                          >
                              BTW-nummer: NL001470939B85
                          </p>
                      </div>

                      <div className="mb-[50px]">
                          <div className="flex gap-5">
                              <Link href="/">
                                  <svg
                                      width="20"
                                      height="20"
                                      viewBox="0 0 20 20"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M20 3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.31607 17.7956 0 17 0L3 0C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.31607 1.44129 0 2.20435 0 3L0 17C0 17.7956 0.31607 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H8C8.13261 20 8.25979 19.9473 8.35355 19.8536C8.44732 19.7598 8.5 19.6326 8.5 19.5V13.5C8.5 13.3674 8.44732 13.2402 8.35355 13.1464C8.25979 13.0527 8.13261 13 8 13H7C6.60218 13 6.22064 12.842 5.93934 12.5607C5.65804 12.2794 5.5 11.8978 5.5 11.5C5.5 11.1022 5.65804 10.7206 5.93934 10.4393C6.22064 10.158 6.60218 10 7 10H8C8.13261 10 8.25979 9.94732 8.35355 9.85355C8.44732 9.75979 8.5 9.63261 8.5 9.5V7C8.50106 6.07207 8.87015 5.18244 9.5263 4.5263C10.1824 3.87015 11.0721 3.50106 12 3.5H14.5C14.8978 3.5 15.2794 3.65804 15.5607 3.93934C15.842 4.22064 16 4.60218 16 5C16 5.39782 15.842 5.77936 15.5607 6.06066C15.2794 6.34196 14.8978 6.5 14.5 6.5H12C11.8674 6.5 11.7402 6.55268 11.6464 6.64645C11.5527 6.74021 11.5 6.86739 11.5 7V9.5C11.5 9.63261 11.5527 9.75979 11.6464 9.85355C11.7402 9.94732 11.8674 10 12 10H13C13.3978 10 13.7794 10.158 14.0607 10.4393C14.342 10.7206 14.5 11.1022 14.5 11.5C14.5 11.8978 14.342 12.2794 14.0607 12.5607C13.7794 12.842 13.3978 13 13 13H12C11.8674 13 11.7402 13.0527 11.6464 13.1464C11.5527 13.2402 11.5 13.3674 11.5 13.5V19.5C11.5 19.6326 11.5527 19.7598 11.6464 19.8536C11.7402 19.9473 11.8674 20 12 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V3Z"
                          fill="#93AA95"
                        />
                      </svg>
                    </Link>
                    <Link href="/">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.583 0H5.417C3.98097 0.00211609 2.60437 0.573514 1.58894 1.58894C0.573514 2.60437 0.00211609 3.98097 0 5.417L0 14.583C0.00211609 16.019 0.573514 17.3956 1.58894 18.4111C2.60437 19.4265 3.98097 19.9979 5.417 20H14.583C16.019 19.9979 17.3956 19.4265 18.4111 18.4111C19.4265 17.3956 19.9979 16.019 20 14.583V5.417C19.9979 3.98097 19.4265 2.60437 18.4111 1.58894C17.3956 0.573514 16.019 0.00211609 14.583 0ZM10 14.583C8.78451 14.583 7.61881 14.1001 6.75933 13.2407C5.89985 12.3812 5.417 11.2155 5.417 10C5.417 8.78451 5.89985 7.61881 6.75933 6.75933C7.61881 5.89985 8.78451 5.417 10 5.417C11.2155 5.417 12.3812 5.89985 13.2407 6.75933C14.1001 7.61881 14.583 8.78451 14.583 10C14.583 11.2155 14.1001 12.3812 13.2407 13.2407C12.3812 14.1001 11.2155 14.583 10 14.583ZM15.417 5.417C15.2528 5.417 15.0903 5.38467 14.9386 5.32185C14.787 5.25903 14.6492 5.16696 14.5331 5.05088C14.417 4.93481 14.325 4.79701 14.2622 4.64535C14.1993 4.4937 14.167 4.33115 14.167 4.167C14.167 4.00285 14.1993 3.8403 14.2622 3.68865C14.325 3.53699 14.417 3.39919 14.5331 3.28312C14.6492 3.16704 14.787 3.07497 14.9386 3.01215C15.0903 2.94933 15.2528 2.917 15.417 2.917C15.7485 2.917 16.0665 3.0487 16.3009 3.28312C16.5353 3.51754 16.667 3.83548 16.667 4.167C16.667 4.49852 16.5353 4.81646 16.3009 5.05088C16.0665 5.2853 15.7485 5.417 15.417 5.417Z"
                          fill="#93AA95"
                        />
                      </svg>
                    </Link>

                    <Link href="/">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.1782 0C2.58694 0.00984222 2.02197 0.246059 1.59967 0.659994C1.17736 1.07393 0.929881 1.63406 0.908203 2.225C0.917033 2.82898 1.15751 3.40651 1.57996 3.83826C2.00241 4.27001 2.57455 4.52302 3.1782 4.545C3.48042 4.54265 3.7792 4.48075 4.05748 4.36286C4.33576 4.24497 4.58808 4.07339 4.80001 3.85793C5.01194 3.64247 5.17933 3.38735 5.29261 3.10717C5.40589 2.82698 5.46284 2.52721 5.4602 2.225C5.43889 1.63185 5.18989 1.06971 4.76493 0.65536C4.33996 0.24101 3.7717 0.00630353 3.1782 0ZM3.5202 6.36H2.8432C2.60275 6.31614 2.35593 6.32116 2.11746 6.37476C1.87899 6.42837 1.65376 6.52946 1.4552 6.672C1.33288 6.80946 1.24005 6.97054 1.18243 7.14529C1.12481 7.32004 1.10363 7.50474 1.1202 7.688V18.685C1.10181 18.8651 1.1215 19.047 1.17801 19.2189C1.23452 19.3908 1.32658 19.549 1.4482 19.683C1.7212 19.904 2.0712 20.007 2.4202 19.969C2.5272 19.969 2.6302 19.965 2.7402 19.961C2.9582 19.954 3.2092 19.946 3.5962 19.961C4.0562 20.05 4.5332 19.947 4.9152 19.675C5.1602 19.403 5.2782 19.04 5.2422 18.676V7.688C5.25891 7.50481 5.23789 7.32015 5.18044 7.1454C5.123 6.97066 5.03034 6.80954 4.9082 6.672C4.70994 6.52889 4.48472 6.42746 4.24616 6.37383C4.0076 6.3202 3.76064 6.3155 3.5202 6.36ZM11.4232 7.122C12.2769 6.47067 13.3379 6.15123 14.4092 6.223C15.0728 6.18083 15.7378 6.27943 16.3605 6.51233C16.9833 6.74522 17.5499 7.10716 18.0229 7.57438C18.496 8.04161 18.865 8.60357 19.1056 9.22341C19.3462 9.84325 19.4531 10.507 19.4192 11.171V18.685C19.4562 19.049 19.3382 19.411 19.0942 19.683C18.7112 19.954 18.2342 20.057 17.7742 19.969C17.4983 19.959 17.2221 19.959 16.9462 19.969C16.7186 20.0132 16.4844 20.0106 16.2578 19.9614C16.0312 19.9123 15.817 19.8175 15.6282 19.683C15.5074 19.5485 15.4159 19.3903 15.3598 19.2184C15.3037 19.0466 15.284 18.8649 15.3022 18.685V12.82C15.3326 12.5625 15.3062 12.3015 15.2249 12.0553C15.1435 11.8091 15.0093 11.5838 14.8315 11.395C14.6537 11.2063 14.4368 11.0588 14.1959 10.9629C13.955 10.867 13.696 10.8251 13.4372 10.84C13.1825 10.8331 12.9294 10.8809 12.6948 10.9802C12.4602 11.0796 12.2496 11.2281 12.0774 11.4158C11.9051 11.6035 11.7752 11.826 11.6963 12.0683C11.6174 12.3105 11.5915 12.5669 11.6202 12.82V18.693C11.6381 18.8732 11.6182 19.0551 11.5617 19.2271C11.5052 19.3992 11.4134 19.5575 11.2922 19.692C11.1567 19.8014 11.0009 19.8829 10.8337 19.9318C10.6665 19.9808 10.4913 19.9961 10.3182 19.977C10.1962 19.977 10.0942 19.973 9.9872 19.969C9.70701 19.9567 9.4264 19.9567 9.1462 19.969C8.91811 20.013 8.68347 20.0103 8.45643 19.9612C8.2294 19.912 8.01467 19.8174 7.8252 19.683C7.70485 19.5482 7.61381 19.3899 7.55786 19.2181C7.50191 19.0463 7.48228 18.8648 7.5002 18.685V7.682C7.5002 6.939 7.7882 6.518 8.3812 6.399C9.0932 6.339 9.8072 6.325 10.5212 6.356C10.6402 6.35183 10.7589 6.37223 10.8697 6.41593C10.9805 6.45963 11.0811 6.5257 11.1652 6.61C11.2982 6.753 11.3872 6.93 11.4232 7.122Z"
                          fill="#93AA95"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
