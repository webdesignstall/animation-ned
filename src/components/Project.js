import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel,  EffectCoverflow,  } from 'swiper/modules';
import Link from "next/link";
import Image from "next/image";


gsap.registerPlugin(ScrollTrigger);

function HomePage() {
  const swiperRef = useRef(null);

  useEffect(() => {
  
  }, []);

  const settings = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    spaceBetween: 0,
    slidesPerView: 3,
    coverflowEffect: {
      rotate: 0,
      stretch: -500,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    mousewheel: true,
    modules: [EffectCoverflow, Mousewheel],
    className: "mySwiper",
  };

  return (
    <Swiper
    {...settings} ref={swiperRef}
  
  >

    <SwiperSlide>
          <div className="flex items-center h-[90vh]">
            <div className="h-[60vh]">
            <Image
                  src={"/img/project/slider.jpg"}
                  width={900}
                  height={780}
                
                  className="w-[100%] h-[100%]"
                />

              <div className="mt-4 flex w-full justify-center">
                <div>
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
                  <Link href="/">
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
    </SwiperSlide>

    <SwiperSlide>
          <div className="flex gap-5 items-center h-[90vh]">
            <div className="h-[60vh] mr-10">
            <Image
                  src={"/img/project/slider.jpg"}
                  width={710}
                  height={780}
                  className="w-[100%] h-[100%]"
                />
              <div className="mt-4 flex w-full justify-center">
                <div>
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
                  <Link href="/">
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
    </SwiperSlide>

    <SwiperSlide>
          <div className="flex gap-5 items-center h-[90vh]">
            <div className="h-[60vh] mr-10">
            <Image
                  src={"/img/project/slider.jpg"}
                  width={710}
                  height={780}
                  className="w-[100%] h-[100%]"
                />

              <div className="mt-4 flex w-full justify-center">
                <div>
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
                  <Link href="/">
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
    </SwiperSlide>    

    <SwiperSlide>
          <div className="flex gap-5 items-center h-[90vh]">
            <div className="h-[60vh] mr-10">
            <Image
                  src={"/img/project/slider.jpg"}
                  width={710}
                  height={780}
                  className="w-[100%] h-[100%]"
                />

              <div className="mt-4 flex w-full justify-center">
                <div>
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
                  <Link href="/">
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
    </SwiperSlide>  
    
  </Swiper>
  );
}

export default HomePage;


