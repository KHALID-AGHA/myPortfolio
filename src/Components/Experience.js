import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'
import CenterTitle from './Shared/CenterTitle';
import AOS from "aos";
import "aos/dist/aos.css";
import { useContext, useEffect } from 'react';
import { myExperience } from './Shared/data';
import { Context } from '../Context/LinksContext';

export default function Experience() {

    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])

    const { theme } = useContext(Context)

    return (
        <div
            id='experiences_section' name="experiences_section"
            className='experiences pt-12 relative z-20 w-1/2 md:w-full m-auto md:h-auto h-screen '
        >

            {/**Header  */}
            <CenterTitle Header1={"My Experience"} Header2={"In Numbers"} />

            {/**Circels  */}
            <div className='w-full justify-around flex flex-row md:flex-col'>
                {
                    myExperience.map((singleExperience) => (
                        <div
                            data-aos-duration="1500" data-aos="zoom-out"
                            className='achievement flex flex-col items-center justify-between py-2' >
                            <div
                                className='circle w-24 h-24 
                        bg-lightBeige rounded-full relative flex items-center justify-center
                        text-2xl font-bold mb-8 text-heavyTeal 
                        before:rounded-full 
                        before:bg-gradient-to-b before:from-heavyTeal before:via-black before:to-lightTeal
                        before:absolute 
                        before:-top-2
                        before:-bottom-2
                        before:-left-2
                        before:-right-2
                        before:-z-10
                        before:shadow-lg before:shadow-black
                        '>
                                <CountUp
                                    key={singleExperience.id} start={0} end={singleExperience.endNumber} duration={2} >
                                    {({ countUpRef, start }) => (
                                        <VisibilitySensor onChange={start}>
                                            <span ref={countUpRef} />
                                        </VisibilitySensor>
                                    )}
                                </CountUp>
                                <span>+</span>
                            </div>
                            <span className={`${theme?"text-heavyBeige":"text-black"}`}>{singleExperience.title01}</span>
                            <span className='text-heavyTeal font-bold'>{singleExperience.title02}</span>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}
