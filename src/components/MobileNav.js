import React, {useRef} from 'react';
import Link from "next/link";
import Image from "next/image";
import {gsap} from "gsap";
import SplitType from "split-type";
import {usePathname} from "next/navigation";
import {useRouter} from "next/router";
import SocialLinks from "@/components/SocialLinks";

const MobileNav = ({data, isHomeMenu = false, socialLinks}) => {

    const mobileMenu = useRef();
    const pathname = usePathname();
    const router = useRouter();

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
                y: 900,
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
            translateY: -900,
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
                y: 100,
                opacity: 0,
                stagger: 0.05,
                duration: 2,
                ease: 'power4.out',
                delay: 0.5

            }
        )
    }


    const goToContactSection = () => {
        // Pass state as query parameter
        router.push({
            pathname: '/',
            query: { contactSection: '#contact' },
        });
    };

    return (
        <>
            <div className="flex items-center justify-between border-b-[1.02px] border-[#00000026] mx-5">

                {
                    !isHomeMenu && <Link href="/">
                        <Image
                            alt={"logo"}
                            src={data?.generalFields?.responsiveLogo?.node?.sourceUrl}
                            height={31}
                            width={200}
                            className="py-5"
                        />
                    </Link>
                }



                <div className="absolute right-6 top-10 block md:hidden cursor-pointer" onClick={menuOpen}>
                    <svg width="28" height="9" viewBox="0 0 28 9" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.3489 6.54053V8.16986H11.0569V6.54053H27.3489Z" fill={isHomeMenu ? 'white': 'black'}/>
                        <path d="M27.3689 0.817383V2.44671H0.487152V0.817383H27.3689Z" fill={isHomeMenu ? 'white': 'black'}/>
                    </svg>
                </div>

                {/*Mobile menu*/}

                <div
                    className="absolute left-0 top-0 z-50 bg-[#EEEEEF] w-full text-center py-8 transform -translate-y-[800px]"
                    ref={mobileMenu}
                >

                    <div className='flex flex-col justify-between h-full'>

                        <div>
                            <div className='flex justify-between items-center px-5'>

                                <Link href="/">
                                    <Image
                                        alt={"logo"}
                                        src={data?.generalFields?.responsiveLogo?.node?.sourceUrl}
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
                                    data?.generalFields?.mainMenu?.items?.map((item) => (
                                        <li style={{textAlign: 'left!important'}}>
                                            <Link
                                                style={{textAlign: 'left!important'}}
                                                className={` menu-nav-link project-mobile-nav ${'/' + item?.url?.split('/')[item?.url?.split('/')?.length - 1] === pathname ? 'italic text-[#556555]' : ''}`}
                                                key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                                        </li>
                                    ))
                                }

                                <li>
                                    {
                                        isHomeMenu ? <Link href={`#contact`}
                                                           className='menu-nav-link text-left'>Contact</Link>
                                            : <p onClick={goToContactSection} className='menu-nav-link text-left'
                                                 style={{cursor: 'pointer'}}>Contact</p>
                                    }


                                </li>

                            </ul>


                        </div>


                        <div className='text-left ml-6 '>

                            {
                                data?.contactSection?.contactRow?.length && <div className='mb-5'
                                                                                 dangerouslySetInnerHTML={{__html: data?.contactSection?.contactRow[0]?.details}}/>
                            }


                            {/*<div className='mt-5 flex ' style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                lineHeight: '24px',
                                textAlign: 'left',
                                color: 'rgb(133 133 133)'

                            }}>
                                <span className='mr-4 menu-nav-link'>Instagram</span>
                                <span className='mr-4 menu-nav-link'>Facebook</span>
                                <span className='menu-nav-link'>Linkedin</span>
                            </div>*/}

                            <SocialLinks socialLinks={socialLinks}/>

                        </div>

                    </div>


                </div>

                {/*End Mobile menu*/}

            </div>
        </>
    );
};

export default MobileNav;