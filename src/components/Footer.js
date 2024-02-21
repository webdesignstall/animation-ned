import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#EEEEEF] border-t-2 border-[#c4c4c4]">
      <div className="container mx-auto flex justify-between items-center my-2">
        <div>
         <h1>Galerij</h1>
        </div>
        <div>
            Website gemaakt door <Link className='underline font-black' href='#'>Grandsolution</Link>
        </div>
      </div>
    </div>
  );
}
