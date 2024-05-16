
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {usePathname} from "next/navigation";
import {gsap} from "gsap";
import SplitType from "split-type";
import {useRef} from "react";
import MobileNav from "@/components/MobileNav";




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


  return (
    <div className="sticky top-0 left-0 bottom-0 bg-[#EEEEEF]  z-50 w-[100%]">
      <div className="hidden mx-auto px-16 md:flex justify-between items-center my-5">
        <div className="flex gap-14">
          <Link href="/">

            <Image
                alt={'logo'}
                src={data?.generalFields?.responsiveLogo?.node?.sourceUrl}
                height={133}
                width={133}
                className="object-cover"
            />
          </Link>

          {/*<ul className="flex text-sm gap-5 text-[#4d4c4c]">
            {

                data?.generalFields?.mainMenu?.items?.map((item)=>{
                  return <Link  className={`sm:mt-0 lg:mt-3 link-underline link-underline-black ${ '/'+ item?.url?.split('/')[item?.url?.split('/')?.length - 1] === pathname ? 'active' : ''}`}
                                   key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                })

            }

          </ul>*/}

          <ul className="flex text-sm gap-5 text-[#4d4c4c] ">
              <Link className={`sm:mt-0 lg:mt-3 link-underline link-underline-black ${ '/luxe-villas' === pathname ? 'active' : ''}`} href='/luxe-villas'>luxe-villas</Link>
              <Link className={`sm:mt-0 lg:mt-3 link-underline link-underline-black ${ '/projecten' === pathname ? 'active' : ''}`} href='/projecten'>projecten</Link>
              <Link className={`sm:mt-0 lg:mt-3 link-underline link-underline-black ${ '/utiliteitsbouw' === pathname ? 'active' : ''}`} href='/utiliteitsbouw'>utiliteitsbouw</Link>
          </ul>
        </div>
        <div>
          {/*<Link href={data?.mainMenu?.lastItem?.last_url}>{data?.mainMenu?.lastItem?.last_label}</Link>*/}
          <p onClick={goToContactSection} style={{ cursor: 'pointer' }}>Contact</p>
        </div>
      </div>


      <div className="md:hidden container mx-auto z-30">

        <MobileNav data={data} socialLinks={data?.contactSection?.socialMedia}/>

        <div>
          <ul className="flex justify-center text-sm gap-5 items-center py-3 text-[#4d4c4c] border-b-[1.02px]  border-[#00000026]">

            {
              data?.generalFields?.mainMenu?.items?.map((item) => {
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



