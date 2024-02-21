import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { Rubik } from "next/font/google";
import Slider from "react-slick";
const rubik = Rubik({
    weight: "400",
    subsets: ["latin"],
});
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Index = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true
    };



    return (
        <>
            <Slider {...settings}>
                <div className="w-[710px] h-[740px] overflow-hidden">
                    <Link href="/projects">
                        <Image
                            alt={'luxevil'}
                            src={"/img/luxevil.jpg"}
                            width={710}
                            height={780}
                            className="object-cover w-[710px] h-[92%] category-image1"
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

                <div className="w-[710px] h-[740px] overflow-hidden ">
                    <Link href="/projects">
                        <Image
                            alt={'utilieitsbouw'}
                            src={"/img/Utiliteitsbouw.jpg"}
                            width={710}
                            height={780}
                            className="object-cover w-[710px] h-[92%] category-image2"
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

                <div className="w-[710px] h-[740px] overflow-hidden">
                    <Link href="/projects">
                        <Image
                            alt={'projecten'}
                            src={"/img/projecten.jpg"}
                            width={710}
                            height={780}
                            className="object-cover w-[710px] h-[92%] category-image3"
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

            </Slider>
        </>
    );
};

export default Index;