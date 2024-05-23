import Link from "next/link";

export default function Footer({homeDeskop= false, details=false, data}) {

    if(details){
        return (
            <div>

                <div className={`flex justify-center md:justify-between items-center py-3 md:mx-auto md:px-16 '}
          `}>
                    <p></p>
                    <p style={{fontWeight: 500}}
                       className='text-[16px] md:text-[14px] min-[1400px]:text-[16px]'>
                        {data?.copyRight?.rightText} <a target={'_blank'} className='underline'
                                                        style={{fontWeight: "bolder"}}
                                                        href={data?.copyRight?.link}>{data?.copyRight?.linkText} </a>
                    </p>
                </div>


            </div>
        )
    }

    return (


        <div>

            <div className={`flex justify-center md:justify-between items-center 
            ${homeDeskop ? 'py-[1.6rem] px-[1.69rem] hidden md:flex' : 'py-3 md:mx-auto md:px-16 md:hidden'}
          `}>
                <p></p>
                <p style={{fontWeight: 500, zIndex: 999}}
                   className='text-[16px] md:text-[14px] min-[1400px]:text-[16px]'>
                    {data?.copyRight?.rightText} <a target={'_blank'} className='underline'
                                                    style={{fontWeight: "bolder"}}
                                                    href={data?.copyRight?.link}>{data?.copyRight?.linkText} </a>
                </p>
            </div>


      </div>
  )
      ;
}