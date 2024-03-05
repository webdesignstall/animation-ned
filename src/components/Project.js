import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, EffectCoverflow } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const swiperRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
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
          scale: 1.2,
          ease: "expo.inOut",
        }
      );
    };

    const activeSlideImage = (activeSlideElement) => {
      gsap.to(activeSlideElement, {
        // duration: 2.5,
        scale: 1,
        ease: "expo.inOut",
      });
    };
    const slideImage = (slideImage) => {
      gsap.to(slideImage, {
        // duration: 2.5,
        scale: 1,
        ease: "expo.out",
      });
    };

    const previousSlide = (activeSlideElement) => {
      gsap.to(activeSlideElement, {
        display: "none",
        opacity: 0,
        scale: 1,
        ease: "expo.inOut",
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
    console.log('activeTitle', activeTitle);
    if(!activeTitle){
      return activeSlideElement
    }
    activeTitle.style.display = "flex";

    // Cleanup the event listener when the component unmounts
    return () => {
      swiper.off("slideChange", activeSlide);
    };
  }, []);

  const settings = {
    initialSlide: 2,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: -80,
      depth: 100,
      modifier: 10,
      slideShadows: false,
    },
    speed: 800,
    mousewheel: true,
    modules: [EffectCoverflow, Mousewheel],
    className: "mySwiper",
  };


  return (

    <>

      <div className="hidden xl:block">
        <Swiper {...settings} ref={swiperRef}>
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
            <SwiperSlide>
                <div className='w-[728px] xl:ml-[-175px] 2xl:ml-[-60px]'>
                    <div className="h-[437px]">
                        <div className="h-full">
                            <div className="h-full">
                                <Link href={`/projects/slug`}>
                                    <Image
                                        alt={"project name"}
                                        src={"/img/slider/slider-1.jpeg"}
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
                            <Link href={`/projects/slug`}>
                                <p
                                    style={{
                                        fontSize: "45.47px",
                                        fontWeight: 200,
                                        lineHeight: "46.58px",
                                        letterSpacing: "0em",
                                        textAlign: "center",
                                    }}
                                >
                                    Luxe villa’s
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
        </Swiper>
      </div>

        {/*For mobile */}
      <section className="block xl:hidden bg-[#eeeeef]">
            <div className="w-full">
                <div className="w-10/12 mx-auto">
                    <Link href={`/projects/slug`}>
                        <Image
                            alt={"project name"}
                            src={"/img/slider/slider-1.jpeg"}
                            width={900}
                            height={780}
                            className="w-[100%] slide-image"
                        />
                    </Link>
                </div>
                <div className="mt-6 w-10/12 mx-auto justify-center title ">
                    <div>
                        <Link href={`/projects/slug`}>
                            <p
                                style={{
                                    fontSize: "30px",
                                    fontWeight: 200,
                                    lineHeight: "46.58px",
                                    letterSpacing: "0em",
                                    textAlign: "center",
                                }}
                            >
                                Luxe villa’s
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
                <div className="w-full border-b-2 border-[#c5c5c5]"></div>
            </div>
            <div className="w-full my-10">
                <div className="w-10/12 mx-auto">
                    <Link href={`/projects/slug`}>
                        <Image
                            alt={"project name"}
                            src={"/img/slider/slider-1.jpeg"}
                            width={900}
                            height={780}
                            className="w-[100%] h-[100%] slide-image"
                        />
                    </Link>
                </div>
                <div className="mt-6 hide  w-10/12 mx-auto justify-center title ">
                    <div>
                        <Link href={`/projects/slug`}>
                            <p
                                style={{
                                    fontSize: "30px",
                                    fontWeight: 200,
                                    lineHeight: "46.58px",
                                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Villa aan de IJssel
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
                IJssel
              </p>
            </div>
          </div>
          <div className="w-full border-b-2 border-[#c5c5c5]"></div>
        </div>
            <div className="w-full my-10">
          <div className="w-10/12 mx-auto">
            <Link href={`/projects/slug`}>
              <Image
                alt={"project name"}
                src={"/img/slider/slider-1.jpeg"}
                width={900}
                height={780}
                className="w-[100%] h-[100%] slide-image"
              />
            </Link>
          </div>
          <div className="mt-6 hide w-10/12 mx-auto justify-center title ">
            <div>
              <Link href={`/projects/slug`}>
                <p
                  style={{
                    fontSize: "30px",
                    fontWeight: 200,
                    lineHeight: "46.58px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  Villa aan de IJssel
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
                IJssel
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
