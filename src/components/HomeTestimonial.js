import Link from "next/link";
import {useGSAP} from "@gsap/react";
import SplitType from "split-type";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HomeTestimonial = ({testimonial}) => {

    gsap.registerPlugin(ScrollTrigger);

  /*  useGSAP(()=> {

        const testimonialWrap = document.querySelector('.testimonial-wrap')
        const testimonialInfo = document.querySelector('.testimornial-info')

        // home page title animation
        const ourText = SplitType.create(testimonialInfo, {types: 'words'});
        const words = ourText.words

        gsap.fromTo(
            words,
            {
                x: 100,
                opacity: 0
            },
            {
                scrollTrigger: {
                    trigger: testimonialWrap,
                    start: 'left center',
                    end: 'left top',
                    scrub: true
                },
                x: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 2,
                ease: 'power2',
                delay: 1

            }
        )




    })*/

    return (


            <div
                className="block md:flex flex-col items-center justify-around md:h-[100vh] md:w-[1263px] text-wrap px-5 py-[120px] testimonial-wrap" style={{width: '100%'}}>

                <div className='text-center flex flex-col justify-between h-[100%] gap-14 lg:gap-0'>

                    <p
                        className="text-[16px] font-[500] leading-[15px] text-center"
                    >
                        {testimonial?.name}

                    </p>
                    <p
                        className='text-[26px] md:text-[33px] italic leading-[32px] md:leading-[46px] md:w-[689px] whitespace-pre-wrap text-wrap tracking-tighter testimornial-info'
                        style={{overflowWrap: '-moz-initial', fontWeight: '200'}}
                    >
                        {
                            testimonial?.info
                        }

                    </p>

                    <div className='text-center'>
                        <Link href={`/bekijk-alle-projecten`}
                              className='link-underline link-underline-black'
                              style={{
                                  position: "relative",
                                  fontSize: "13px",
                                  fontStyle: "italic",
                                  fontWeight: 300,
                                  lineHeight: "15px",
                                  letterSpacing: "-0.3499999940395355px",
                                  textAlign: "center",
                              }}
                        >
                            {testimonial?.designation}

                        </Link>
                    </div>

                </div>


            </div>


    );
};

export default HomeTestimonial;

