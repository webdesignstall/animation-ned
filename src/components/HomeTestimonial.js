
const HomeTestimonial = ({testimonial}) => {

    return (
        <div className="scroll-section md:w-[1024px] md:flex justify-center">

            <div
                className="block md:flex flex-col items-center justify-around md:h-[100vh] md:w-[1263px] text-wrap px-5 py-[120px]">

                <div className='py-16 text-center'>
                    <p
                        className="text-[16px] mb-10 font-[500] leading-[15px] text-center"
                    >
                        {testimonial?.name}

                    </p>
                    <p
                        className='text-[22px] md:text-[33px] italic leading-[32px] md:leading-[46px] md:w-[689px] whitespace-pre-wrap text-center'
                        style={{overflowWrap: '-moz-initial', fontWeight: '200'}}
                    >
                        {
                            testimonial?.info
                        }

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
                    {testimonial?.designation}

                </p>
            </div>

        </div>
    );
};

export default HomeTestimonial;

