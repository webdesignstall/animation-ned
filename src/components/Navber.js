import Link from "next/link";

export default function Navber() {
  return (
    <div className="sticky top-0 left-0 bottom-0 bg-[#EEEEEF] border-b-2 border-[#c4c4c4] mb-5">
      <div className="container  mx-auto flex justify-between items-center my-5">
        <div>
          <ul className="flex gap-5 text-[#4d4c4c]">
            <Link href="/">Tous les projets</Link>
            <Link href="/">Architecture</Link>
            <Link href="/">Intérieur</Link>
            <Link href="/">Décoration</Link>
          </ul>
        </div>
        <div>
          <img
            src="https://i.ibb.co/GkZSypG/right-icon.png"
            alt=""
            className="w-10 h-6"
          />
        </div>
      </div>
    </div>
  );
}
