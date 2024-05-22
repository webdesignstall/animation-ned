import Link from "next/link";

export default function Footer({homeDeskop= false, data}) {
  return (


      <div>

          <div className={`flex justify-center md:justify-between items-center 
            ${homeDeskop ? 'py-[1.6rem] px-[1.69rem]' : 'py-3 md:mx-auto md:px-16'}
          `}>
              <p></p>
              <p style={{fontWeight: 500}} className='text-[16px] md:text-[14px] min-[1400px]:text-[16px]'>
                  {data?.copyRight?.rightText} <a target={'_blank'} className='underline' style={{fontWeight: "bolder"}}
                                                  href={data?.copyRight?.link}>{data?.copyRight?.linkText} </a>
              </p>
          </div>


      </div>
  )
      ;
}