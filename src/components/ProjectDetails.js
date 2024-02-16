import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

function HomePage() {
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
      {
        /* A return function for killing the animation on component unmount */
      }
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
            <div className="scroll-section">
              <div className="flex gap-5 h-[100vh justify-center items-center w-[710px]">
                {/* <div className="w-[710px] h-[740px]">
                   <Link href="/">
                    <Image
                      src={"/img/luxevil.jpg"}
                      width={710}
                      height={780}
                      className="object-cover w-[710px] h-[100%]"
                    />
                  </Link>

                </div> */}
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
            <div className="scroll-section mr-32">
              <div className="flex gap-5">
                <div className="w-[710px] h-[740px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/22420_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[710px] h-[100%]"
                    />
                  </Link>

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
            <div className="scroll-section mr-2">
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

                  <div className="mt-4 flex flex-col justify-center">
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
                        className="mt-3 "
                        style={{
                          position: "relative",

                          fontSize: "30px",
                          fontWeight: 300,
                          lineHeight: "15px",
                          letterSpacing: "-0.3499999940395355px",
                          textAlign: "center",
                        }}
                      >
                        bekijk project
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-section  mr-32">
              <div className="flex gap-5 items-center justify-center">
                <div className="w-[410px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/22428_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-full h-[40vh]"
                    />
                  </Link>

                  <div className="mt-4 flex flex-col justify-center">
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
                        className="mt-3 "
                        style={{
                          position: "relative",

                          fontSize: "30px",
                          fontWeight: 300,
                          lineHeight: "15px",
                          letterSpacing: "-0.3499999940395355px",
                          textAlign: "center",
                        }}
                      >
                        bekijk project
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="scroll-section mr-32">
              <div className="flex gap-5">
                <div className="w-[820px] h-[740px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/220410_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[820px] h-[100%]"
                    />
                  </Link>

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
            <div className="scroll-section mr-10">
              <div className="flex gap-5">
                <div className="w-[700px] h-[740px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/22418_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[700px] h-[100%]"
                    />
                  </Link>

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
            <div className="scroll-section mr-20">
              <div className="flex gap-5 items-center justify-center">
                <div className="w-[710px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/22419_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[710px] h-[70vh]"
                    />
                  </Link>

                  <div className="mt-4 flex flex-col justify-center">
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
                        className="mt-3 "
                        style={{
                          position: "relative",

                          fontSize: "30px",
                          fontWeight: 300,
                          lineHeight: "15px",
                          letterSpacing: "-0.3499999940395355px",
                          textAlign: "center",
                        }}
                      >
                        bekijk project
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="scroll-section mr-20">
              <div className="flex gap-5">
                <div className="w-[800px] h-[740px]">
                  <Link href="/">
                    <Image
                      src={"/img/project/22418_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[800px] h-[100%]"
                    />
                  </Link>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
