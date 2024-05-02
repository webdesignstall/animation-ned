import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SplitType from 'split-type'
// import { ScrollSmoother } from "gsap-trial/dist/ScrollSmoother";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";

import 'swiper/css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rubik } from "next/font/google";
import {useGSAP} from "@gsap/react";
import HomeTestimonial from "@/components/HomeTestimonial";
import {initializeApollo} from "@/utiles/instance";
import {useRouter} from "next/router";
import Footer from "@/components/Footer";
import {gql} from "@apollo/client";
import Navber from "@/components/Navber";
import MobileNav from "@/components/MobileNav";
import SocialLinks from "@/components/SocialLinks";

import Lenis from 'lenis';


const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});



 function HomePage({data}) {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const categoryImage = useRef(null);
  const categoryImageTrigger = useRef(null);

    gsap.registerPlugin(ScrollTrigger);
     gsap.registerPlugin(ScrollToPlugin)

    const homeTitle = useRef();
    const mobileMenu = useRef();
    const contactRef = useRef(null);



    useGSAP(()=> {

            const sectionWrap = document.querySelectorAll('.scroll-section');

            let totalWidth = 0;

            for (let i = 1; i < sectionWrap.length; i++) {
                const offsetWidthValue = sectionWrap[i].clientWidth;
                // console.log(`Element ${i + 1} offsetWidth: ${offsetWidthValue}`);
                totalWidth += offsetWidthValue;
            }


            /*const scrollTween =   gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    // translateX: "-230vw",
                    ease: "none",
                    duration: 500,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "top top",
                        scrub: 2,
                        pin: true
                    },
                }
            );*/

            const isMobile = window.innerWidth <= 961; // Adjust the breakpoint as needed

            const scrollTween = gsap.fromTo(
                sectionRef.current,
                {
                    translateX: 0,
                },
                {
                    translateX: isMobile ? 0 : `-${totalWidth + 300}`, // Set translateX based on screen width
                    ease: "none",
                    duration: 500,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: isMobile ? 'top top' : `20000 top`,
                        scrub: 1,
                        pin: true
                    },
                }
            );


        const lenis = new Lenis({
            smooth: true
        })

        lenis.on('scroll', (e) => {
            console.log(e)
        })

        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time)=>{
            lenis.raf(time * 1000)
        })

        gsap.ticker.lagSmoothing(0)


            // home page title animation
            const ourText = SplitType.create(homeTitle.current, {types: 'chars'});
            const chars = ourText.chars


            // home page nav link
            const homeNav = SplitType.create('.home-nav-link', {types: 'lines'});
            const navLinkText = homeNav.lines

            gsap.fromTo(
                chars,
                {
                    y: 100,
                    opacity: 0
                },
                {
                    y: -20,
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


            const categoryImageAnimation = (target) => {
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

        }
    )

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

     const [imageSrc, setImageSrc] = useState(data.gallaries[0] || '')

     const homeImages = data?.gallaries || [];

     /*useEffect(() => {
        // Define images to be used


        let currentIndex = 0;

        const changeImage = () => {
            // Update the image source
            // Increment the index for the next image
            currentIndex = (currentIndex + 1) % homeImages.length;
            // imageRef.current.src = homeImages[currentIndex];

            setImageSrc(homeImages[currentIndex])


        };

        // GSAP timeline
        const timeline = gsap.timeline({ repeat: -1});
         const fade = 5; // fade time

        // Add the image change animation to the timeline
        /!*timeline.to(imageRef.current, { opacity: 0.5, duration: 1, delay: 6, scale:1, onComplete: changeImage })
            .to(imageRef.current, { scale: 1, duration: 1, opacity: 1, ease: 'power1' });*!/

      /!*   timeline.to(imageRef.current, { opacity: 0.7, duration: 1, delay: 6, scale: 1, onComplete: changeImage, ease: 'power1.inOut' })
             .set(imageRef.current, { src: () => imageSrc })
             .to(imageRef.current, { opacity: 1, duration: 1, scale: 1, ease: 'power3.inOut' });*!/

         timeline.to(imageRef.current, { autoAlpha: 0, duration: fade, onComplete: changeImage })
             .set(imageRef.current, { src: () => imageSrc })
             .to(imageRef.current, { autoAlpha:1, duration:fade }, 0);


        // Cleanup on component unmount
        return () => {
            timeline.kill(); // Kill the GSAP timeline to prevent memory leaks
        };
    }, []);*/


     useEffect(() => {
         gsap.set('.motiv img',{xPercent:0, yPercent:0})

         const imgs = gsap.utils.toArray("#imgContainer .motiv");
         const next = 6; // time to change
         const fade = 1; // fade time



//only for the first
         gsap.set(imgs[0], {autoAlpha:1})

         /*let split = new SplitText('.motiv01 h1', {type:"chars"}),
             chars = split.chars;
         gsap.from(chars, {autoAlpha:0, x: -10, duration:0.3, ease: 'Power2.in', stagger:0.1, delay:1});*/

// ====================
         function crossfade(){

            /* split = new SplitText(imgs[1], {type:"chars"});
             chars = split.chars;*/

             const action = gsap.timeline()
                 .to(imgs[0], {autoAlpha:0, duration:fade})
                 .to(imgs[1], {autoAlpha:1, duration:fade},0)

               /*  .from(chars, {autoAlpha:0, x: -10, duration:0.3, ease: 'Power2.in', stagger:0.1}, 1);*/

             imgs.push( imgs.shift() );
             // start endless run
             gsap.delayedCall(next, crossfade);
         }

// start the crossfade after next = 3 sec
         gsap.delayedCall(next, crossfade);
     }, []);


    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0,0);
        };
    }, []);

    const menuOpen = ()=> {
        gsap.to(mobileMenu.current, {
            height: '100vh',
            translateY: 0,
            duration: 1,
            opacity: 1,
            ease: 'expo.inOut',
        })

        // home page nav link
        const homeNav = SplitType.create('.menu-nav-link', { types: 'lines' });
        const navLinkText = homeNav.lines

        gsap.fromTo(
            navLinkText,
            {
                y: 800,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                delay: 0.5

            }
        )

    }
    const menuClose = ()=> {
        gsap.to(mobileMenu.current, {
            translateY: -800,
            duration: 1,
            opacity: 1,
            ease: 'expo.inOut',
        })

        // home page nav link
        const homeNav = SplitType.create('.menu-nav-link', { types: 'lines' });
        const navLinkText = homeNav.lines

        gsap.to(
            navLinkText,
            {
                y: 80,
                opacity: 0,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                delay: 0.5

            }
        )
    }


     const scrollToContact = () => {
         /*gsap.to(window, {
             duration: 1,
             scrollTo: { y: contactRef.current.offsetTop, autoKill: false },
             ease: "power2.inOut" // You can change easing as per your preference
         });*/

         const sectionWrap = document.querySelectorAll('.scroll-section');

         let totalWidth = 0;

         for (let i = 1; i < sectionWrap.length; i++) {
             const offsetWidthValue = sectionWrap[i].clientWidth;
             // console.log(`Element ${i + 1} offsetWidth: ${offsetWidthValue}`);
             totalWidth += offsetWidthValue;
         }

         gsap.to(window, {
             scrollTo: {y: totalWidth, autoKill: false }
         })

         console.log(contactRef.current)
     };

     const router = useRouter();
     const { contactSection } = router.query;

     console.log('contactSection', contactSection)


     useEffect(() => {

         if (contactSection !== undefined && contactSection !== '#contact' ){
             const sectionWrap = document.querySelectorAll('.scroll-section');

             let totalWidth = 0;

             for (let i = 1; i < sectionWrap.length; i++) {
                 const offsetWidthValue = sectionWrap[i].clientWidth;
                 // console.log(`Element ${i + 1} offsetWidth: ${offsetWidthValue}`);
                 totalWidth += offsetWidthValue;
             }

             gsap.to(window, {
                 scrollTo: { y: totalWidth, autoKill: false }
             })
         }else if (contactSection === '#contact'){
             window.location.href = '#contact'
         }



     }, [contactSection]);


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

                      <div className="scroll-section relative overflow-hidden bg-section" style={{width: '100vw'}}>

                          {/*<div className='h-[695px] md:h-full md:w-[100vw]'>
                              <Image
                                  src={imageSrc}
                                  alt={'home image'}
                                  ref={imageRef}
                                  height={941}
                                  width={1048}
                                  className="object-cover home1bg h-full w-[100vw]"
                              />
                          </div>*/}

                          {/*
                              {
                                  data.gallaries?.map((image, index) => (

                                          <div className={`h-[695px] md:h-full md:w-[100vw] motiv`}>
                                              <Image
                                                  src={image}
                                                  alt={'home image'}
                                                  ref={imageRef}
                                                  height={941}
                                                  width={1048}
                                                  className="object-cover home1bg h-full w-[100vw]"
                                              />
                                          </div>


                                  ))
                              }*/}

                          <div id="imgContainer">


                              {
                                  data.gallaries?.map((image, index) => (

                                      /*<div className={`h-[695px] md:h-full md:w-[100vw] motiv`}>
                                          <Image
                                              src={image}
                                              alt={'home image'}
                                              ref={imageRef}
                                              height={941}
                                              width={1048}
                                              className="object-cover home1bg h-full w-[100vw]"
                                          />
                                      </div>*/

                                      <div className="motiv motiv01">
                                          {/*<img src={image}/>*/}
                                          <Image
                                              src={image}
                                              alt={'home image'}
                                              ref={imageRef}
                                              height={941}
                                              width={1048}
                                              className="object-cover home1bg"
                                          />
                                      </div>


                                  ))
                              }
                          </div>


                          <div
                              className="absolute inset-0"
                              style={{
                                  background:
                                      "linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%)",
                              }}
                          ></div>
                          <div className="absolute left-6 top-6 md:left-[60px] md:top-[40px]">
                              <Image
                                  alt={'logo'}
                                  src={data?.logo}
                                  height={133}
                                  width={133}
                                  className="md:object-cover block md:hidden"
                              />
                              <Image
                                  alt={'logo'}
                                  src={data?.logo}
                                  height={77}
                                  width={266}
                                  className="object-cover hidden md:block ham"
                              />
                          </div>

                          {/*Responsive Mobile menu*/}

                          {/*<div className="absolute right-6 top-10 block md:hidden" onClick={menuOpen}>
                              <svg width="28" height="9" viewBox="0 0 28 9" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path d="M27.3489 6.54053V8.16986H11.0569V6.54053H27.3489Z" fill="white"/>
                                  <path d="M27.3689 0.817383V2.44671H0.487152V0.817383H27.3689Z" fill="white"/>
                              </svg>
                          </div>*/}

                          {/*<div
                              className="absolute left-0 top-0 z-50 bg-gray-300 w-full text-center py-8 transform -translate-y-60"
                              ref={mobileMenu}>
                              <ul>
                                  {
                                      data?.categories.map((cat, index) => (
                                          <li key={index}>
                                              <Link href={`/${cat?.slug}`}
                                                    className='py-2 inline-block menu-nav-link link-underline2 link-underline-black2'>{cat?.name}</Link>
                                          </li>

                                      ))
                                  }

                                  <li>
                                      <Link href={`#contact`}
                                            className='py-2 block menu-nav-link link-underline2 link-underline-black2'>Contact</Link>
                                  </li>

                              </ul>

                              <div className="ham2 absolute right-6 top-10 block md:hidden" onClick={menuClose}>

                                  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                       viewBox="0,0,256,256">
                                      <g fill="gray" fillRule="nonzero" stroke="none" strokeWidth="1"
                                         strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"
                                         strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                                         fontSize="none" textAnchor="none" style={{
                                          mixBlendMode: 'normal'
                                      }}>
                                          <g transform="scale(4,4)">
                                              <path
                                                  d="M12,8l-4,4l16.66602,20l-16.66602,20l4,4l20,-16.66602l20,16.66602l4,-4l-16.66602,-20l16.66602,-20l-4,-4l-20,16.66602z"></path>
                                          </g>
                                      </g>
                                  </svg>

                              </div>
                          </div>*/}


                          {/*End Responsive Mobile menu*/}


                          {/*Mobile menu*/}

                          {/*<div
                              className="absolute left-0 top-0 z-50 bg-[#EEEEEF] w-full text-center pb-8 transform -translate-y-[800px]"
                              ref={mobileMenu}
                          >

                              <div className='flex flex-col justify-between h-full'>

                                  <div>
                                      <div className='flex justify-between items-center px-5'>

                                          <Link href="/">
                                              <Image
                                                  alt={"logo"}
                                                  src={data?.logo}
                                                  height={200}
                                                  width={200}
                                                  className="py-5"
                                              />
                                          </Link>

                                          <div className="ham2 block md:hidden" onClick={menuClose}>

                                              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30"
                                                   viewBox="0,0,256,256">
                                                  <g fill="gray" fillRule="nonzero" stroke="none" strokeWidth="1"
                                                     strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10"
                                                     strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none"
                                                     fontSize="none" textAnchor="none" style={{
                                                      mixBlendMode: 'normal'
                                                  }}>
                                                      <g transform="scale(4,4)">
                                                          <path
                                                              d="M12,8l-4,4l16.66602,20l-16.66602,20l4,4l20,-16.66602l20,16.66602l4,-4l-16.66602,-20l16.66602,-20l-4,-4l-20,16.66602z"></path>
                                                      </g>
                                                  </g>
                                              </svg>
                                          </div>
                                      </div>


                                      <ul className='ml-8 mt-8' style={{fontSize: '40px', zIndex: 999, fontWeight: '300'}}>
                                          {
                                              data?.mainMenu.items?.map((item) => (
                                                  <li style={{textAlign: 'left!important'}}>
                                                      <Link
                                                          style={{textAlign: 'left!important'}}
                                                          className={` menu-nav-link project-mobile-nav`}
                                                          key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                                                  </li>
                                              ))
                                          }

                                          <li>
                                               <Link href={`#contact`}
                          className='block menu-nav-link link-underline2 link-underline-black2 project-mobile-nav'>Contact</Link>
                                              <p onClick={goToContactSection} className='menu-nav-link text-left'
                                                 style={{cursor: 'pointer'}}>Contact</p>
                                          </li>

                                      </ul>


                                  </div>


                                  <div className='text-left ml-6 '>
                                      <p className='menu-nav-link'>
                                          <a href="tel:010-4523552">010-4523552</a>
                                      </p>
                                      <p className='menu-nav-link'>
                                          <a href="mailto:info@a1-ontwerpgroep.nl">info@a1-ontwerpgroep.nl</a>
                                      </p>

                                      <div className='mt-5 flex ' style={{
                                          fontSize: '18px',
                                          fontWeight: '500',
                                          lineHeight: '24px',
                                          textAlign: 'left',
                                          color: 'rgb(133 133 133)'

                                      }}>
                                          <span className='mr-4 menu-nav-link'>Instagram</span>
                                          <span className='mr-4 menu-nav-link'>Facebook</span>
                                          <span className='menu-nav-link'>Linkedin</span>
                                      </div>


                                  </div>

                              </div>


                          </div>*/}

                          {/*End Mobile menu*/}

                          <MobileNav data={data} isHomeMenu={true} socialLinks={data?.contactSection?.socialMedia}/>


                          <div className="hidden md:block absolute right-[100px] top-[50px]">
                              <ul className="font-light text-[24.94px] leading-8 text-white">
                                  {
                                      data?.mainMenu?.items?.map((item, index) => (
                                          <li key={index}>
                                              <Link href={`${item?.url}`}
                                                    className='home-nav-link inline-block link-underline2 link-underline-black2'>{item?.label}</Link>
                                          </li>
                                      ))

                                  }
                                  {

                                      <li>
                                          <span onClick={scrollToContact}
                                                className='home-nav-link inline-block link-underline2 link-underline-black2 cursor-pointer'>Contact</span>
                                      </li>

                                  }
                              </ul>
                          </div>


                          <div className='flex justify-center -mb-10'>
                              <h2 ref={homeTitle}
                                  className="homeTitle absolute bottom-0
                                 text-[42px] sm:text-[40px]
                                 md:text-[40px] md:leading-[40px]
                                 lg:text-[60px] lg:leading-[30.56px]
                                 xl:text-[70px]  xl:leading-[70.56px]
                                 2xl:text-[102px]
                                 italic text-wrap whitespace-pre-wrap p-4 md:mr-14"
                                  style={{color: '#FFFFFFD9', fontWeight: 300}}
                              >

                                  {data?.slogan}
                              </h2>
                          </div>


                          <div className='hidden md:block'>
                              <div
                                  className="absolute flex w-[59px] h-[100%] bg-[#93AA95] right-0 top-0 items-center justify-center">
                                  <Image
                                      src={"/img/arraw.png"}
                                      height={25}
                                      width={25}
                                      className="object-cover -rotate-90"
                                  />
                              </div>

                          </div>


                      </div>


                      <HomeTestimonial testimonial={data?.testimonial}/>

                      {/*<div className='scroll-section'>
                          <div
                              className='md:grid md:grid-cols-2 lg:flex 2xl:flex gap-5 items-center lg:h-[100vh] xl:h-[100vh]'>
                              {
                                  data?.categories?.map((cat, index) => (

                                      // md:h-[75%] lg-h-[75%] xl-h-[75%] p-4
                                      <div className="md:h-[100%] lg-h-[85%] xl-h-[85%] pt-12 lg:pb-28 px-5"
                                           ref={categoryImageTrigger}>
                                          <div className='overflow-hidden category-image-wrap' style={{height: '100%'}}>
                                              <Link href={`/${cat?.slug}`} className='image-zoom-container'>
                                                  <Image
                                                      ref={categoryImage}
                                                      alt={cat?.name}
                                                      src={cat?.categoryImage?.image?.node?.sourceUrl}
                                                      width={710}
                                                      height={702}
                                                      className="object-cover h-[416px] w-full md:w-[702px] md:h-[100%] category-image1 overflow-hidden zoom-image"
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
                                                  {cat?.name}
                                              </p>
                                              <Link href={`/${cat?.slug}`} className='js-work-link'>
                                                  <span
                                                      className="mt-3 link-underline link-underline-black"
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
                                                  </span>
                                              </Link>
                                          </div>
                                      </div>

                                  ))
                              }


                          </div>
                      </div>*/}


                      <div className='scroll-section'>
                          <div
                              className='flex flex-wrap md:flex-row gap-5 md:h-[100%] lg-h-[85%] xl-h-[85%] pt-10 lg:pb-20 px-5 items-center'>
                              {
                                  data?.categories?.map((cat, index) => (

                                      // md:h-[75%] lg-h-[75%] xl-h-[75%] p-4
                                      <div className="w-full lg:w-[25rem] xl:w-[41rem] xl:min-w-[41rem] h-full"
                                           ref={categoryImageTrigger}>
                                          <div className='overflow-hidden category-image-wrap' style={{height: '100%'}}>
                                              <Link href={`/${cat?.slug}`} className='image-zoom-container'>
                                                  <Image
                                                      ref={categoryImage}
                                                      alt={cat?.name}
                                                      src={cat?.categoryImage?.image?.node?.sourceUrl}
                                                      width={710}
                                                      height={702}
                                                      className="object-cover h-[416px] w-full md:h-[100%] category-image1 overflow-hidden zoom-image"
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
                                                  {cat?.name}
                                              </p>
                                              <Link href={`/${cat?.slug}`} className='js-work-link'>
                                                  <span
                                                      className="mt-3 link-underline link-underline-black"
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
                                                  </span>
                                              </Link>
                                          </div>
                                      </div>

                                  ))
                              }


                          </div>
                      </div>

                      <div className="scroll-section border-t-2 px-6 py-8 lg:flex items-center mt-10 lg:mt-0"
                           ref={contactRef} id='contact'>
                          <div className="md:ml-[100px]">
                              <p
                                  className=" 2xl:mb-[80px] text-[50px] mb-10 md:text-[72px] font-[200] md:font-[250] leading-[39px] md:leading-[102px]"
                              >
                                  {data?.contactSection?.label}
                              </p>

                              {
                                  data.contactSection.contactRow.map((ct, index) => (
                                      <div key={index} className="mb-[50px]">
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
                                              {ct?.label}
                                          </p>

                                          <div
                                              className={`${rubik.className}`}
                                              style={{
                                                  fontSize: "16px",
                                                  fontWeight: 400,
                                                  lineHeight: "24px",
                                                  letterSpacing: "0em",
                                                  textAlign: "left",
                                              }}

                                              dangerouslySetInnerHTML={{__html: ct?.details}}
                                          />


                                      </div>

                                  ))
                              }


                              <div className='mb-[50px]'>
                                  <SocialLinks socialLinks={data?.contactSection?.socialMedia}/>
                              </div>


                          </div>

                          <div className='md:hidden'>
                              <Footer data={data?.generalFields}/>
                          </div>
                      </div>

                  </div>
              </div>


          </section>


      </>
  );
 }

export default HomePage;


const queryFunc = (params)=>{

    const query = gql`
                {
                   projects{
                        nodes{
                          id,
                          title,
                           slug
                          categories{
                            nodes{
                              id
                              slug
                              name
                            }
                          }
                          featuredImage {
                            node {
                              sourceUrl
                            }
                          }
        
                        }
                      }
                    websiteOptions {
                        generalFields {
                          logoText                                
                          responsiveLogo{
                                node{
                                  sourceUrl
                                }
                              }
                          mainMenu{
                                items{
                                  label
                                  url
                                  
                                }
                                lastItem{
                                  last_label
                                  last_url
                                }
                              }
                          copyRight {
                            leftText
                            rightText
                            linkText
                            link
                          }
                          categories{
                            category{
                              nodes{
                                slug
                                name
                              }
                            }
                          }
                        }
                      }
                }
                `;
    return query;
}


export const getServerSideProps = async () => {
    const apolloClient = initializeApollo(); // initialize apollo client

    // Fetch data using Apollo client
    const {data} = await apolloClient.query({
        query: queryFunc('hello'),
    });

    console.log('query', data)

    return {
        props: {
            data: {
                title: data.websiteOptions.generalFields.title,
                generalFields: data?.websiteOptions?.generalFields || {},
            }

        }
    };
};

