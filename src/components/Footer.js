import Link from "next/link";

export default function Footer({data}) {
  return (
    <div className="bg-[#EEEEEF] border-t-2 border-[#c4c4c4] py-5">
      <div className="container mx-auto text-center md:text-left md:flex justify-between items-center my-2 text-sm md:text-xl px-5 md:p-0">
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