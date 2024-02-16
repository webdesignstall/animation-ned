import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";

import { Rubik } from "next/font/google";
import Navber from "./Navber";
import Footer from "./Footer";

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
              <div className="flex gap-5 items-center h-[90vh]">
                <div className="w-[80vh] h-[60vh] mr-10">
                  <Link href="/projects/one">
                    <Image
                      src={"/img/luxevil.jpg"}
                      width={710}
                      height={780}
                      className="object-cover w-[100$] h-[100%]"
                    />
                  </Link>

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
            </div>
            <div className="scroll-section">
              <div className="flex gap-5 items-center h-[90vh]">
                <div className="w-[80vh] h-[60vh] mr-10">
                  <Link href="/projects/one">
                    <Image
                      src={"/img/project/div.h2d-746885aa.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[100%] h-[100%]"
                    />
                  </Link>

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
            </div>
            <div className="scroll-section">
              <div className="flex gap-5 items-center h-[90vh]">
                <div className="w-[80vh] h-[60vh] mr-10">
                  <Link href="/projects/one">
                    <Image
                      src={"/img/project/21393_frame.png"}
                      width={710}
                      height={780}
                      className="object-cover w-[100%] h-[100%]"
                    />
                  </Link>

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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
