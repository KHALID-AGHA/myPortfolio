import ciel from '../../src/img/ciel.jpg'
import codi from '../../src/img/Codi.png'
import das from '../../src/img/das.png'
import Buttons from './Shared/Buttons'
import RightTitle from './Shared/RightTitle'
import AOS from "aos";
import "aos/dist/aos.css";
import KhalidAghaCV from '../KhalidAghaCV.pdf'
import { useEffect } from 'react'

export default function Works() {

    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])

    return (
        <div id="services_section" name="services_section"
            className='Works flex md:flex-col items-center h-screen md:h-auto my-10 relative '>
            <div className='blurSection h-3/4 md:hidden
                            bg-gradient-to-tr   
                          from-heavyTeal via-blueCard to-darkNavbar
                            blur-[10px] w-[50%] m-auto absolute right-10 top-20 -z-[100px]'>
            </div>

            {/********************************* Left - Text Side **********************************/}
            <div className='works-text-side w-1/2 md:w-full flex flex-col justify-center h-[70vh] md:h-auto z-10 my-10'>

                <RightTitle Header1={"Work for these"} Header2={"Brands & Clients"}
                    Paragraph1={"I have designed  projects related to web development that gave me the experience needed to work in this field."}
                    
                />

                <div className='works-CV pt-4 md:w-full md:text-center'>
                    <a href={KhalidAghaCV} download>
                        <Buttons Action={"download CV"} />
                    </a>
                </div>
            </div>

            {/********************************* Right - Circles **********************************/}

            <div className='works-circsls md:h-full flex flex-col justify-center items-center w-1/2 md:w-full h-full z-[40]  '>
                <div className='w-[60%] h-[60%] sm:w-[100%] sm:h-[70%] flex flex-col items-center justify-between rounded-full 
                                 m-auto shadow-xl  shadow-heavyTeal bg-[white] 
                                 bg-gradient-to-br from-heavyTeal via-lightTeal to-lightBeige '
                >

                    {/********************************* Single Circle **********************************/}
                    <div className=' w-full flex flex-ro md:justify-center items-end justify-end'>
                        <div
                            data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='fourCircle  w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
                            <a target={'_blank'} href={'http://www.codi.tech/'}>
                                <img src={codi} alt="codi" className='cursor-pointer rounded-full w-full h-full' />
                            </a>
                        </div>
                    </div>

                    {/********************************* Single Circle **********************************/}
                    <div className='w-full flex flex-row md:justify-center justify-start'>
                        <div
                            data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='fourCircle w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
                            <a target={'_blank'} href={'https://das-360.com/'}>
                                <img src={das} alt="das" className='cursor-pointer rounded-full w-full h-full ' />
                            </a>

                        </div>
                    </div>


                    {/********************************* Single Circle **********************************/}
                    <div className='w-full flex flex-row md:justify-center justify-end'>
                        <div
                            data-aos="fade-left"
                            data-aos-easing="linear"
                            data-aos-duration="1500"
                            className='fourCircle  w-28  h-28  scale-[0.7] rounded-full border-[5px] border-heavyTeal flex flex-row items-center justify-center bg-[white] shadow-lg shadow-heavyTeal'>
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

