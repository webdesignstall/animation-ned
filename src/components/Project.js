import React, {useEffect, useRef, useState} from "react";
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

    const [projects, setProjects] = useState([]);

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


    const handleResize = () => {
        const element = document.querySelector('.swiper-wrapper');
        const elementImg = document.querySelectorAll('.swiper-wrapper img');
        console.log('innerHeight', window.innerHeight);
        if (window.innerHeight <= 768) {
            element.style.scale = .9;
            elementImg.forEach(img => {
                img.style.height = '310px';
            });

        }
        if (window.innerHeight <= 600) {
            element.style.scale = .95;
            elementImg.forEach(img => {
                img.style.height = '220px';
            });

        }

        if (window.innerHeight >= 769) {
            element.style.scale = 1;
        }
    };


    useEffect(() => {
            handleResize();
    }, []);





    return (

    <>

        <div className="hidden lg:block" style={{height: '100%!important'}}>


            <Swiper {...settings} ref={swiperRef} className='is-projet-galerie' style={{height: '100%!important'}}>

                {
                   data?.projects?.map((project, index) => (
                        <SwiperSlide role='group' className='is-galerie-projet py-4' style={{height: '100%!important'}} key={index}>
                            <div style={{marginRight: '150px', height: '100%!important'}} className='slide-wrapp'>
                                <Link
                                    href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`}
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
                                    <div className='flex flex-col items-center'>
                                        <Link className='block'
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

                                        <Link
                                            className='project-link'
                                            href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`}>
                                            <p
                                                className=' inline-block '
                                                style={{
                                                    fontSize: "14px",
                                                    fontWeight: 400,
                                                    // lineHeight: "42.47px",
                                                    textAlign: "center",
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                bekijk project
                                            </p>
                                        </Link>
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
                data?.projects?.map((project, index) => (
                    <div className='' key={project?.id}>
                        <div className="w-full mt-4">
                            <div className="w-10/12 mx-auto">
                                <Link href={`/${params?.category || project?.categories?.nodes[0]?.slug}/${project?.slug}`} className='projet-img-holder w-inline-block'>
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
                            {index !== data.projects.length - 1 && (
                                <div className="w-full border-b-[1.02px] border-[#00000026]"></div>
                            )}
                        </div>
                    </div>
                ))
            }



        </section>
    </>
  );
}

export default Project;
