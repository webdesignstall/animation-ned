
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import {gsap} from "gsap";
import SplitType from "split-type";
import {useRef} from "react";




const Navber=({data, categories}) =>{

  const router = useRouter();

  // Function to handle the click event
  const goToContactSection = () => {
    // Pass state as query parameter
    router.push({
      pathname: '/',
      query: { contactSection: true },
    });
  };


  const pathname = usePathname();


  console.log('pathname', pathname)
  const mobileMenu = useRef();

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

  return (
    <div className="sticky top-0 left-0 bottom-0 bg-[#EEEEEF] border-b-[1.02px]  border-[#00000026] z-50">
      <div className="hidden mx-auto px-16 md:flex justify-between items-center my-5">
        <div className="flex gap-14">
          <Link href="/">
           {/* <h2 className="text-[19px] italic font-[300] leading-[21px]">
              {data?.logoText}
            </h2>*/}

            <Image
                alt={'logo'}
                src={data?.responsiveLogo?.node?.sourceUrl}
                height={133}
                width={133}
                className="object-cover"
            />
          </Link>

          <ul className="flex text-sm gap-5 text-[#4d4c4c]">
            {

                data?.mainMenu.items?.map((item)=>{
                  return <Link  className={`link-underline link-underline-black ${ '/'+ item?.url?.split('/')[item?.url?.split('/')?.length - 1] === pathname ? 'active' : ''}`}
                                   key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                })

            }

          </ul>
        </div>
        <div>
          {/*<Link href={data?.mainMenu?.lastItem?.last_url}>{data?.mainMenu?.lastItem?.last_label}</Link>*/}
          <p onClick={goToContactSection} style={{ cursor: 'pointer' }}>Contact</p>
        </div>
      </div>


      <div className="md:hidden container mx-auto z-30">

        <div className="flex items-center justify-between border-b-[1.02px] border-[#00000026] mx-5">
          <Link href="/">
            <Image
                alt={"logo"}
                src={data?.responsiveLogo?.node?.sourceUrl}
                height={31}
                width={200}
                className="py-5"
            />
          </Link>


          <div className="absolute right-6 top-10 block md:hidden" onClick={menuOpen}>
            <svg width="28" height="9" viewBox="0 0 28 9" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path d="M27.3489 6.54053V8.16986H11.0569V6.54053H27.3489Z" fill="black"/>
              <path d="M27.3689 0.817383V2.44671H0.487152V0.817383H27.3689Z" fill="black"/>
            </svg>
          </div>

          {/*Mobile menu*/}

          <div
              className="absolute left-0 top-0 z-50 bg-[#EEEEEF] w-full text-center py-8 transform -translate-y-[600px]"
              ref={mobileMenu}
          >

            <div className='flex flex-col justify-between h-full'>

              <div>
                <div className='flex justify-between items-center px-5'>

                  <Link href="/">
                    <Image
                        alt={"logo"}
                        src={data?.responsiveLogo?.node?.sourceUrl}
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


                <ul className='ml-8 mt-8' style={{ fontSize: '40px', zIndex: 999, fontWeight: '300' }}>
                  {
                    data?.mainMenu.items?.map((item) => (
                        <li style={{ textAlign: 'left!important' }}>
                          <Link
                              style={{ textAlign: 'left!important' }}
                              className={` menu-nav-link project-mobile-nav ${'/' + item?.url?.split('/')[item?.url?.split('/')?.length - 1] === pathname ? 'italic text-[#556555]' : ''}`}
                              key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                        </li>
                    ))
                  }

                  <li>
                   {/* <Link href={`#contact`}
                          className='block menu-nav-link link-underline2 link-underline-black2 project-mobile-nav'>Contact</Link>*/}
                    <p onClick={goToContactSection} className='menu-nav-link text-left' style={{cursor: 'pointer'}}>Contact</p>
                  </li>

                </ul>


              </div>


              <div className='text-left ml-6 '>
                <p className='menu-nav-link'>
                  <a href="tel:010-4523552">010-4523552</a>
                </p>
                <p className='menu-nav-link'>
                  <a href="mailto:info@a1-ontwerpgroep.nl">info@a1-ontwerpgroep.nl</a>
                </p>

                <div className='mt-5 flex ' style={{
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '24px',
                  textAlign: 'left',
                  color: 'rgb(133 133 133)'

                }}>
                  <span className='mr-4 menu-nav-link'>Instagram</span>
                  <span className='mr-4 menu-nav-link'>Facebook</span>
                  <span className='menu-nav-link'>Linkedin</span>
                </div>


              </div>

            </div>


          </div>

          {/*End Mobile menu*/}

        </div>

        <div>
          <ul className="flex justify-center text-sm gap-5 items-center py-3 text-[#4d4c4c]">

            {
              data?.mainMenu.items?.map((item) => {
                return <Link
                    className={`link-underline link-underline-black ${'/' + item?.url?.split('/')[item?.url?.split('/')?.length - 1] === pathname ? 'active' : ''}`}
                    key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );

}


export default Navber;



