import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor'

export default function Experience() {
    const myExperience = [
        { id: 1, endNumber: 2, title01: 'Years', title02: 'Experience' },
        { id: 2, endNumber: 9, title01: 'Completed', title02: 'Projects' },
        { id: 3, endNumber: 3, title01: 'Companies', title02: 'Work' },
    ]
    return (
        <div id='experiences_section' name="experiences_section" className='experiences relative w-1/2 md:w-full m-auto md:h-auto flex flex-row items-center justify-between h-screen md:flex-col md:mt-10 z-[1000]'>
            {
                myExperience.map((singleExperience) => (
                    <div className='achievement flex flex-col items-center justify-between py-2'>
                        <div className='circle w-24 h-24 
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
                        ' >
                            <CountUp key={singleExperience.id} start={0} end={singleExperience.endNumber} duration={2} >
                                {({ countUpRef, start }) => (
                                    <VisibilitySensor onChange={start}>
                                        <span ref={countUpRef} />
                                    </VisibilitySensor>
                                )}
                            </CountUp>
                            <span>+</span>
                        </div>

                        <span className='text-black'>{singleExperience.title01}</span>
                        <span className='text-heavyTeal font-bold'>{singleExperience.title02}</span>
                    </div>
                ))
            }
            {/**<div className='blurSection h-[40%] md:hidden
            bg-gradient-to-tl from-heavyTeal via-blueCard to-lightBeige 
            blur-[40px] w-[100%] m-auto absolute left-0 top-0 z-[-1000px]'>
            </div> */}
        </div>
    )
}
