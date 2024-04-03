import Link from "next/link";

export default function Footer({data}) {
  return (
    <div className="bg-[#EEEEEF] lg:border-t-2 border-[#c4c4c4] md:px-16 pt-6">
      <div className="md:px-16 text-center md:text-left md:flex justify-between items-center text-sm md:text-xl md:p-0">
        <div>
         <h1 style={{fontWeight: 500, fontSize: 14.1}}>{
             data?.copyRight?.leftText
         }</h1>
        </div>
        <div style={{fontWeight: 500, fontSize: 16}}>
            {data?.copyRight?.rightText} <a target={'_blank'} className='underline' style={{fontWeight: "bolder"}} href={data?.copyRight?.link}>{data?.copyRight?.linkText} </a>
        </div>
      </div>
    </div>
  );
}