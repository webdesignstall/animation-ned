import React, {useRef, useEffect, useState} from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import SplitType from 'split-type'
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
    const contactRef = useRef(null);


     useEffect(() => {

         if (window.innerHeight > 768){


             const lenis = new Lenis({
                 smooth: true
             })

             lenis.on('scroll', ScrollTrigger.update)

             gsap.ticker.add((time)=>{
                 lenis.raf(time * 1000)
             })

             gsap.ticker.lagSmoothing(0)
         }
     }, []);


    useGSAP(()=> {

            const sectionWrap = document.querySelectorAll('.scroll-section');

            let totalWidth = 0;

            for (let i = 1; i < sectionWrap.length; i++) {
                const offsetWidthValue = sectionWrap[i].clientWidth;
                totalWidth += offsetWidthValue;
            }

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
                        end: isMobile ? 'top top' : `${data?.generalFields?.homePageScrollSpeed || 9000} top`,
                        scrub: 1,
                        pin: true
                    },
                }
            );





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




     const imageRef = useRef(null);


     useEffect(() => {
         gsap.set('.motiv img',{xPercent:0, yPercent:0})

         const imgs = gsap.utils.toArray("#imgContainer .motiv");
         const next = 6; // time to change
         const fade = 1; // fade time



        //only for the first
         gsap.set(imgs[0], {autoAlpha:1})



       // ====================
         function crossfade(){

             const action = gsap.timeline()
                 .to(imgs[0], {autoAlpha:0, duration:fade})
                 .to(imgs[1], {autoAlpha:1, duration:fade},0)



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


     const scrollToContact = () => {

        /* const sectionWrap = document.querySelectorAll('.scroll-section');

         let totalWidth = 0;

         for (let i = 0; i < sectionWrap.length; i++) {
             // debugger
             const offsetWidthValue = sectionWrap[i].clientWidth;
             totalWidth += offsetWidthValue;
         }*/

         gsap.to(window, {
             scrollTo: {y: 9000, autoKill: false }
         })
     };

     const router = useRouter();
     const { contactSection } = router.query;


     useEffect(() => {

         if (contactSection !== undefined && contactSection !== '#contact' ){
             const sectionWrap = document.querySelectorAll('.scroll-section');

             let totalWidth = 0;

             for (let i = 1; i < sectionWrap.length; i++) {
                 const offsetWidthValue = sectionWrap[i].clientWidth;
                 totalWidth += offsetWidthValue;
             }

             gsap.to(window, {
                 scrollTo: { y: `${data?.generalFields?.homePageScrollSpeed || totalWidth}` , autoKill: false }
             })
         }else if (contactSection === '#contact'){
             window.location.href = '#contact'
         }



     }, [contactSection]);


  return (
      <>

          <MobileNav data={data} isHomeMenu={true} socialLinks={data?.contactSection?.socialMedia}/>

          <section className="scroll-section-outer">
              <div ref={triggerRef} className='scroll-wrap'>
                  <div ref={sectionRef} className="scroll-section-inner">

                      <div className="scroll-section relative overflow-hidden bg-section" style={{width: '100vw'}}>

                          <div id="imgContainer">


                              {
                                  data.gallaries?.map((image, index) => (

                                      <div className="motiv motiv01">
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

                      <div className="scroll-section md:w-[1400px] md:flex justify-center border-b-2"
                           style={{zIndex: 999, background: '#eeeeef'}}>
                          <HomeTestimonial testimonial={data?.testimonial}/>
                      </div>


                      <div className='scroll-section'>
                          <div
                              className='flex flex-wrap md:flex-row gap-5 md:h-[100%] lg-h-[85%] xl-h-[85%] pt-10 lg:pb-20 px-5 items-center'>
                              {
                                  data?.categories?.map((cat, index) => (

                                      // md:h-[75%] lg-h-[75%] xl-h-[75%] p-4
                                      <div className="w-[35rem] lg:w-[25rem] xl:w-[38rem] xl:min-w-[41rem] h-full"
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

                      <div
                          className="scroll-section flex flex-col justify-center h-[100%] md:ml-[100px] md:pb-[150px]  md:pt-0 border-t-[2px] md:border-t-0 mt-10 border-[#00000026]"
                          ref={contactRef} id='contact'>
                          <div className="flex mx-[2rem] md:mx-0 mt-[4.2rem] md:mt-0 flex-col justify-center gap-[3rem] md:gap-0">
                              <p
                                  className='text-[31px] md:text-[71px] mb-[2.4rem] min-[1600px]:mb-[5.6rem]'
                                  style={{fontWeight: '200'}}
                              >
                                  {data?.contactSection?.label}
                              </p>

                              <div className={'flex flex-col justify-center gap-[3.1rem] md:gap-[1.9rem] min-[1600px]:gap-[3.43rem]'}>


                                  {
                                      data.contactSection?.contactRow?.map((ct, index) => (
                                          <div key={index}>
                                              <p
                                                  className={`${rubik.className} uppercase mb-[.4rem] min-[1600px]:mb-[1.125rem]`}
                                                  style={{
                                                      fontSize: "16px",
                                                      fontWeight: 400,
                                                      lineHeight: "1.3em",
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
                                                      fontSize: "14px",
                                                      fontWeight: 400,
                                                      lineHeight: "1.5rem",
                                                      letterSpacing: "0em",
                                                      textAlign: "left",
                                                  }}

                                                  dangerouslySetInnerHTML={{__html: ct?.homePageContactDetails}}
                                              />


                                          </div>

                                      ))
                                  }
                              </div>
                              <div className='my-[3.38rem] md:mt-[2.9rem] min-[1600px]:mt-[6.25rem]'>
                                  <SocialLinks socialLinks={data?.contactSection?.socialMedia}/>
                              </div>

                          </div>


                      </div>

                  </div>

              </div>



              <Footer homeDeskop={true} data={data?.generalFields}/>
          </section>


      </>
  );
 }

export default HomePage;


const queryFunc = (params) => {

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
    return {
        props: {
            data: {
                title: data.websiteOptions.generalFields.title,
                generalFields: data?.websiteOptions?.generalFields || {},
            }

        }
    };
};

