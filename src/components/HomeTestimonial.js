

const HomeTestimonial = () => {
    return (
        <div className="scroll-section md:w-[1463px] md:flex justify-center">

            <div
                className="block md:flex flex-col items-center justify-around md:h-[100vh] md:w-[1263px] text-wrap px-5 py-[120px]">

                <div className='py-16 text-center'>
                    <p
                        className="text-[16px] mb-10 font-[500] leading-[15px] text-center"
                    >
                       Hi
                    </p>
                    <p
                        className='text-[22px] md:text-[33px] italic font-[200px] leading-[32px] md:leading-[46px] md:w-[689px] whitespace-pre-wrap text-center'
                        style={{overflowWrap: '-moz-initial'}}
                    >
                        Als Architect weten wij uw droom te realiseren. Met inzet
                        van onze professie en ervaring kunnen we tot in detail op uw
                        wensen inspelen. Van luxe villa’s tot project of
                        utiliteitsbouw. Van idee tot werkelijkheid. Dit doen wij al
                        meer dan 35 jaar met plezier.

                    </p>
                </div>
                <p
                    className='underline'
                    style={{
                        position: "relative",
                        fontSize: "13px",
                        fontStyle: "italic",
                        fontWeight: 300,
                        lineHeight: "15px",
                        letterSpacing: "-0.3499999940395355px",
                        textAlign: "center",
                    }}
                >
                    Bekijk Alle projecten
                    {/* <span
className={`
block h-[1px] bg-black absolute bottom-0 left-[25%] right-[45%] w-1/2
`}
style={{
content: "''",
}}
/>*/}
                </p>
            </div>

        </div>
    );
};

export default HomeTestimonial;