import Image from "next/image";
import Link from "next/link";
export default function ResponsiveProjectDetails({params, data}) {
  return (
    <>
      <section className='fixed top-0'>
        <Link
          href={`/${params?.category}`}
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

        <div className="">

            <div className="mt-4 h-[60vh] flex justify-center items-center">
                <div className='text-center' style={{maxWidth: '350px'}}>
                    <p className=''
                    >
                        {params?.category}
                    </p>

                    <p
                        className="mt-10 text-[#202020] title text-6xl"
                    >
                        {data?.projectDetail?.title}
                    </p>
                </div>

            </div>

            {
                data?.projectImages[0] && (
                    <div className='mb-14'>
                        <Image
                            src={data?.projectImages[0]}
                            width={710}
                            height={610}
                            className="w-full h-auto"
                        />
                    </div>
                )
            }

            {

                    data?.projectImages[1] && (
                    <div className="mt-5 w-10/12 mx-auto mb-14">

                        <Image
                            src={data?.projectImages[1]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>

                )
            }

            {

                data?.projectImages[2] && (
                    <div className="mt-5 w-10/12 mx-auto mb-14">

                        <Image
                            src={ data?.projectImages[2]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>
                )
            }

            {

                data?.projectImages[3] && (
                    <div className="mt-5 mb-14">

                        <Image
                            src={data?.projectImages[3]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>
                )
            }
            {

                    data?.projectImages[4] && (
                    <div className="mt-5 mb-14">

                        <Image
                            src={ data?.projectImages[4]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>

                )
            }
            {

                    data?.projectImages[5] && (
                    <div className="mt-5 w-10/12 mx-auto mb-14">

                        <Image
                            src={data?.projectImages[5]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>

                )
            }
            {

                data?.projectImages[6] && (
                    <div className="mt-5 mb-14">

                        <Image
                            src={data?.projectImages[6]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />

                    </div>
                )
            }
            {

                data?.projectImages[7] && (
                    <div className="mt-5 w-10/12 mx-auto mb-14">
                        <Image
                            src={ data?.projectImages[7]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />
                    </div>
                )
            }

            {

                data?.projectImages[8] && (
                    <div className="mt-5 w-10/12 mx-auto mb-14">
                        <Image
                            src={data?.projectImages[8]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />
                    </div>
                )
            }

            {

                    data?.projectImages[9] && (
                    <div className="mt-5">
                        <Image
                            src={data?.projectImages[9]}
                            width={710}
                            height={710}
                            className="w-full h-auto"
                        />
                    </div>
                )
            }


            <div className="flex gap-5 h-[60vh] justify-center items-center">
                <div className="mt-4">
                    <p
                        style={{
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: "15px",
                            letterSpacing: "0em",
                            textAlign: "center",
                        }}
                    >
                        {params?.category}
                    </p>
                    <div style={{maxWidth: '300px'}}>
                        <p
                            className="mt-10 text-[#202020]"
                            style={{
                                position: "relative",
                                fontSize: "40px",
                                fontWeight: 500,
                                lineHeight: '1.2em',
                                letterSpacing: "-0.3499999940395355px",
                                textAlign: "center",

                            }}
                        >
                            {data?.projectDetail?.title}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
