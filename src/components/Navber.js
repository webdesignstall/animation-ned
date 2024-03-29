
import Image from "next/image";
import Link from "next/link";




const Navber=({data, categories}) =>{

  return (
    <div className="sticky top-0 left-0 bottom-0 bg-[#EEEEEF] border-b-2 border-[#c4c4c4] mb-5 z-50">
      <div className="hidden mx-auto px-16 md:flex justify-between items-center my-5">
        <div className="flex gap-14">
          <Link href="/">
            <h2 className="text-[19px] italic font-[300] leading-[21px]">
              {data?.logoText}
            </h2>
          </Link>

          <ul className="flex text-sm gap-5 text-[#4d4c4c]">
            {

                data?.mainMenu.items?.map((item)=>{
                  return <Link key={item?.url} href={`${item?.url}`}>{item?.label}</Link>
                })

            }

          </ul>
        </div>
        <div>

          <Link href={data?.mainMenu?.lastItem?.last_url}>{data?.mainMenu?.lastItem?.last_label}</Link>
        </div>
      </div>
      <div className="md:hidden container mx-auto px-5 z-30">
        <div className="flex gap-14 items-center justify-between">
          <Link href="/">
            <Image
              alt={"logo"}
              src={data?.responsiveLogo?.node?.sourceUrl}
              height={10}
              width={150}
              className="h-24"
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
          <ul className="flex justify-center text-sm gap-5 pb-5 text-[#4d4c4c]">

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



