
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";




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
                  return <Link className="link-underline link-underline-black"
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

        <div className="flex items-center justify-center border-b-[1.02px] border-[#00000026]">
          <Link href="/">
            <Image
              alt={"logo"}
              src={data?.responsiveLogo?.node?.sourceUrl}
              height={31}
              width={200}
              className="py-5"
            />
          </Link>
         {/* <Link href="#">
            <svg
              width="28"
              height="9"
              viewBox="0 0 28 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M27.3489 6.54053V8.16986H11.0569V6.54053H27.3489Z"
                fill="black"
              />
              <path
                d="M27.3689 0.817383V2.44671H0.487152V0.817383H27.3689Z"
                fill="black"
              />
            </svg>
          </Link>*/}
        </div>
        <div>
          <ul className="flex justify-center text-sm gap-5 items-center py-3 text-[#4d4c4c]">

            {
              data?.mainMenu.items?.map((item)=>{
                return <Link key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );

}



export  default  Navber;



