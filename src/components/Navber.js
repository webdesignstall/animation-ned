import Link from "next/link";

export default function Navber() {
  return (
    <div className="sticky top-0 left-0 bottom-0 bg-[#EEEEEF] border-b-2 border-[#c4c4c4] mb-5">
      <div className="container  mx-auto flex justify-between items-center my-5">
        <div className='md:flex gap-14'>
          <Link href='/'>
            <h2
                className='text-[19px] italic font-[300] leading-[21px]'
            >A1-ontwerpgroep</h2>
          </Link>

          <ul className="flex gap-5 text-[#4d4c4c]">
            <Link href="/">Luxe villa’s</Link>
            <Link href="/">Utiliteitsbouw</Link>
            <Link href="/">Projecten</Link>
          </ul>
        </div>
        <div>
          <Link href='#'>
            Contact
          </Link>

        </div>
      </div>
    </div>
  );
}
