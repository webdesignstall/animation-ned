import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, EffectCoverflow } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {useParams} from "next/navigation";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Project({data}) {
  const swiperRef = useRef(null);

  const params = useParams();


  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=> {
      gsap.to(swiperRef.current, {
          scrollTrigger: {
              trigger: swiperRef.current,
              scrub: 2,
              start: "top top",
              end: 'top top',
              pin: true
          }
      })
  })

  /*useEffect(() => {
    // Initialize the Swiper instance
    const swiper = swiperRef.current.swiper;

    // Function to animate the active slide with GSAP
    const activeSlide = (activeSlideElement) => {
      gsap.fromTo(
        activeSlideElement,
        {
          scale: 0,
          opacity: 0,
        },
        {
          opacity: 1,
          // duration: 1,
          display: "flex",
          // scale: 1.1,
          // ease: "expo.inOut",
        }
      );
    };

    const activeSlideImage = (activeSlideElement) => {
      gsap.to(activeSlideElement, {
        // duration: 2.5,

        // ease: "expo.inOut",
      });
    };
    const slideImage = (slideImage) => {
      gsap.to(slideImage, {
        // duration: 2.5,
        // ease: "expo.out",
      });
    };

    const previousSlide = (activeSlideElement) => {
      gsap.to(activeSlideElement, {
        display: "none",
        opacity: 0,
        // ease: "expo.inOut",
      });
    };

    // Attach the event handler to the Swiper instance
    swiper.on("slideChange", (element) => {
      const activeSlideIndex = swiper.realIndex;
      const previousSlideIndex = swiper.previousIndex;
      const nextSlideIndex = activeSlideIndex + 1;

      const activeSlideElement = swiper.slides[activeSlideIndex];
      const previousSlideElement = swiper.slides[previousSlideIndex];
      const nextSlideElement = swiper.slides[nextSlideIndex];

      const activeTitle = activeSlideElement?.querySelector(".title");
      const previousTitle = previousSlideElement?.querySelector(".title");

      const previousImage = previousSlideElement?.querySelector(".slide-image");
      const activeImage = activeSlideElement?.querySelector(".slide-image");

      activeSlideImage(activeImage);

      activeSlide(activeTitle);
      previousSlide(previousTitle);

      slideImage(previousImage);

      if (nextSlideElement) {
        const nextTitle = nextSlideElement?.querySelector(".title");
        const nextImage = nextSlideElement?.querySelector(".slide-image");
        slideImage(nextImage);
      }
    });

    const activeIndex = swiper.activeIndex;
    const activeSlideElement = swiper.slides[activeIndex];
    const activeTitle = activeSlideElement?.querySelector(".title");
    if(!activeTitle){
      return activeSlideElement
    }
    activeTitle.style.display = "flex";

    // Cleanup the event listener when the component unmounts
    return () => {
      swiper.off("slideChange", activeSlide);
    };
  }, []);*/

 /* const settings = {
    initialSlide: 2,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: -40,
      depth: 0,
      modifier: 10,
      slideShadows: false,

    },
    speed: 800,
    mousewheel: true,
    modules: [EffectCoverflow, Mousewheel],
    className: "mySwiper",
  };
*/

    const initialSlideIndex = Math.round( data?.projects?.length / 2 ) - 1

  const settings = {
    initialSlide: initialSlideIndex,
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 100,
    slidesPerView: 'auto',
    speed: 1300,
    // duration: 100,
    mousewheel: true,
    modules: [Mousewheel],
    className: "mySwiper",

  };

  return (

    <>

      <div className="hidden lg:block">
        <Swiper {...settings} ref={swiperRef} className='is-projet-galerie'>

            {/*{
                data?.projects?.map((project )=>(
                    <SwiperSlide key={project?.id}>
                        <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                            <div className="h-[437px]">
                                <div className="h-full">
                                    <div className="h-full">
                                        <Link href={`/${params?.category}/${project?.slug}`}>
                                            <Image
                                                alt={project?.title}
                                                src={project?.featuredImage?.node?.sourceUrl}
                                                width={900}
                                                height={780}
                                                className="w-[100%] h-[100%] slide-image"
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="hide mt-6 w-full justify-center title "
                                style={{display: "none"}}
                            >
                                <div>
                                  <Link href={`/${params?.category}/${project?.slug}`}>
                                        <p
                                            style={{
                                                fontSize: "45.47px",
                                                fontWeight: 200,
                                                lineHeight: "46.58px",
                                                letterSpacing: "0em",
                                                textAlign: "center",
                                            }}
                                        >
                                            {project?.title}
                                        </p>
                                    </Link>

                                    <p
                                        style={{
                                            position: "relative",
                                            fontSize: "13px",
                                            fontWeight: 400,
                                            lineHeight: "42.47px",
                                            textAlign: "center",
                                        }}
                                    >
                                        bekijk project
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }*/}

            {
                data?.projects?.map((project )=>(
                    <SwiperSlide role='group' className='is-galerie-projet'  key={project?.id}>
                        <div style={{marginRight: '150px'}} className='slide-wrapp'>
                            <Link href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`}
                                  className='projet-img-holder w-inline-block'>
                                <Image
                                    alt={project?.title}
                                    src={project?.featuredImage?.node?.sourceUrl}
                                    width={900}
                                    height={780}
                                    className="absolute-image slide-image"
                                />
                            </Link>

                            <div
                                className="mt-6 w-full flex justify-center w-inline-block category-title"
                            >
                                <div className=''>
                                    <Link className=''
                                          href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`}>

                                        <p
                                            className=''
                                            style={{
                                                fontSize: "45.47px",
                                                fontWeight: 200,
                                                lineHeight: "46.58px",
                                                letterSpacing: "0em",
                                                textAlign: "center",
                                            }}
                                        >
                                            {project?.title}
                                        </p>
                                    </Link>

                                    <p
                                        className=' project-link'
                                        style={{
                                            fontSize: "13px",
                                            fontWeight: 400,
                                            lineHeight: "42.47px",
                                            textAlign: "center",
                                            cursor: 'pointer'
                                        }}
                                    >
                                        bekijk project
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
      </div>

        {/*For mobile */}
        <section className="block lg:hidden bg-[#eeeeef]">

            {
                data?.projects?.map((project) => (
                    <div key={project?.id} className="w-full mt-4">
                        <div className="w-10/12 mx-auto">
                            <Link href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`}
                                  className='projet-img-holder w-inline-block'>
                            <Image
                              alt={project?.title}
                              src={project?.featuredImage?.node?.sourceUrl}
                                  width={900}
                                  height={780}
                                  className="w-[100%] slide-image"
                              />
                          </Link>
                      </div>
                      <div className="mt-6 w-10/12 mx-auto justify-center">
                          <div>
                              <Link href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`} className='w-inline-block'>
                                  <p
                                      style={{
                                          fontSize: "30px",
                                          fontWeight: 200,
                                          lineHeight: "46.58px",
                                          letterSpacing: "0em",
                                          textAlign: "center",
                                      }}
                                  >
                                    {project?.title}
                                  </p>
                              </Link>

                              <p
                                  style={{
                                      position: "relative",
                                      fontSize: "13px",
                                      fontWeight: 400,
                                      lineHeight: "42.47px",
                                      textAlign: "center",
                                  }}
                              >
                                  bekijk project
                              </p>
                          </div>
                      </div>
                      <div className="w-full border-b-[1.02px] border-[#00000026]"></div>
                  </div>

              ))
          }


      </section>
    </>
  );
}

export default Project;
