import ciel from '../../src/img/ciel.jpg'
import codi from '../../src/img/Codi.png'
import das from '../../src/img/das.png'

export default function Works() {
    return (
        <div id="services_section" name="services_section" className='works flex md:flex-col items-center h-screen md:h-auto py-2 mb-4 relative z-[1000]'>
            <div className='blurSection h-3/4 md:hidden
                            bg-gradient-to-tl 
                          from-[#70B0B8] via-blueCard to-lightBeige 
                            blur-[10px] w-[50%] m-auto absolute left-52 right-32 top-20 -z-[100px]'>
            </div>
            {/********************************* Left - Text Side **********************************/}
            <div className='works-text-side w-1/2 md:w-full flex flex-col justify-center pb-4 h-full  z-[1000]'>
                <span className='py-1 text-black font-bold text-5xl'>Work for these</span>
                <span className='py-1 text-heavyTeal font-bold text-4xl md:text-xl'>Brands & Clients</span>
                <span className='py-1 text-lightTeal text-lg font-medium mt-3'>
                    As for my accomplishments, I have designed  projects related to web development that gave me the
                    experience needed to work in this field ,as well as developing code writing and fixing errors .
                </span>
                <div className='works-CV pt-4 md:w-full md:text-center'>
                    <a href={"#contact_section"} >
                        <button className='golbalBtnStyle w-32 md:w-1/2 md:m-auto h-8'>Get in touch</button>
                    </a>
                </div>
            </div>

            {/********************************* Right - Circles **********************************/}

            <div className='works-circsls md:h-full flex flex-col justify-center items-center w-1/2 md:w-full h-full z-[1000]  '>
                <div className='w-[60%] h-[60%] sm:w-[100%] sm:h-[70%] flex flex-col items-center justify-between rounded-full 
            m-auto shadow-xl  shadow-heavyTeal bg-[white] 
            bg-gradient-to-br from-heavyTeal via-blueCard to-lightBeige '>

                    {/********************************* Single Circle **********************************/}
                    <div className=' w-full flex flex-ro md:justify-center items-end justify-end'>
                        <div className='fourCircle  w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
                            <a target={'_blank'} href={'http://www.codi.tech/'}>
                                <img src={codi} alt="codi" className='cursor-pointer rounded-full w-full h-full' />
                            </a>
                        </div>
                    </div>

                    {/********************************* Single Circle **********************************/}
                    <div className='w-full flex flex-row md:justify-center justify-start'>
                        <div className='fourCircle w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
                            <a target={'_blank'} href={'https://das-360.com/'}>
                                <img src={das} alt="das" className='cursor-pointer rounded-full w-full h-full ' />
                            </a>

                        </div>
                    </div>


                    {/********************************* Single Circle **********************************/}
                    <div className='w-full flex flex-row md:justify-center justify-end'>
                        <div className='fourCircle  w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
                            <a target={'_blank'} href={'https://atelierenciel.com/'}>
                                <img src={ciel} alt="ciel" className='cursor-pointer rounded-full w-full h-full' />
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

