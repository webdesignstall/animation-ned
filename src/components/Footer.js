import Link from "next/link";

export default function Footer({data}) {
  return (
    <div className="bg-[#EEEEEF] lg:border-t-2 border-[#c4c4c4] px-16">
      <div className="px-16 text-center md:text-left md:flex justify-between items-center my-2 text-sm md:text-xl md:p-0">
        <div>
         <h1>{
             data?.copyRight?.leftText
         }</h1>
        </div>
        <div>
            {data?.copyRight?.rightText} <a target={'_blank'} className='underline font-black' href={data?.copyRight?.link}>{data?.copyRight?.linkText} </a>
        </div>
      </div>
    </div>
  );
}