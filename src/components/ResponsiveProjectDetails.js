import Image from "next/image";
import Link from "next/link";
export default function ResponsiveProjectDetails() {
  return (
    <>
      <section>
        <Link
          href="/projects"
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
            letterSpacing: " 0em",
            textAlign: "left",
            color: "#202020",
          }}
          className="fixed flex items-center gap-5 bg-[#eeeeef] w-full px-10 py-5"
        >
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.01578 12.0001L6.69684 11.3523L1.89427 6.78472H19.9942V5.86871H1.81723L6.69684 1.22783L6.01578 0.580078L0.69312 5.64234L0.686929 5.63644L0.00585938 6.28418L0.0120506 6.29008L0.00585938 6.29596L0.686929 6.94372L0.69312 6.93782L6.01578 12.0001Z"
              fill="#202020"
            />
          </svg>
          Terug
        </Link>
      </section>

      <div className="w-10/12 mx-auto">
        <Link href="/">
          <Image
            src={"/img/project/22420_frame.png"}
            width={710}
            height={610}
            className="w-full h-full"
          />
        </Link>
        <div className="mt-5">
          <Link href="/" className="mt-5">
            <Image
              src={"/img/project/22420_frame.png"}
              width={710}
              height={710}
            />
          </Link>
        </div>
        <div className="mt-5">
          <Link href="/" className="mt-5">
            <Image
              src={"/img/project/22420_frame.png"}
              width={710}
              height={710}
            />
          </Link>
        </div>
      </div>
    </>
  );
}