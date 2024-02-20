import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#EEEEEF] border-t-2 border-[#c4c4c4]">
      <div className="container mx-auto flex justify-between items-center my-2">
        <div>
         <h1>Footer section</h1>
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
