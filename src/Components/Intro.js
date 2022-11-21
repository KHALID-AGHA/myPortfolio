import me from '../img/mee.png'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { useContext } from 'react'
import { themeContext } from '../Context/Context'

export default function Intro() {

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div name="intro" id='intro' className='intro flex md:flex-col items-center h-[70vh] md:h-auto mb-10 mt-10 '>

            {/********************************* Details & Links **********************************/}
            <div className='i-left w-1/2 md:w-full flex flex-col  justify-center pb-4 h-full z-10'>
                <span className='i-name-span-greet py-1 text-black font-bold text-5xl'>Hi, I am </span>
                <span className='i-name-span-name  py-1 text-heavyTeal font-bold text-4xl md:text-xl'>Mohammad Khalid Kassem Agha</span>
                <span className='i-name-span-text  py-1 text-lightTeal text-lg font-medium mt-3'>
                    Responsible, committed, cheerful programmer.
                    <br />
                    Hard worker who attempting to make a significant effort to accomplish goals.
                </span>
            </div>

            {/********************************* Images **********************************/}
            <div className='i-right flex flex-row md:flex-col-reverse md:justify-between justify-around items-center w-1/2 md:w-full h-full'>

                <div className='i-icons flex flex-col md:flex-row md:w-full justify-around h-full w-1/4 '>
                    <a target={'_blank'} href='https://www.linkedin.com/in/khalid-agha/'
                        className='m-auto hover:animate-shaking-input ' >
                        <AiFillLinkedin color='#0E5E6F' size={50} cursor={'pointer'} />
                    </a>
                    <a target={'_blank'} href='https://github.com/KhalidAgha-2000'
                        className='m-auto hover:animate-shaking-input ' >
                        <AiFillGithub color='#0E5E6F' size={50} cursor={'pointer'} />
                    </a>

                </div>

                {/********************************* Me **********************************/}
                <div className='pb-4 flex items-center justify-center w-3/4 md:hidden md:w-full h-full'>
                    <img className='w-7/12 md:w-full h-7/12 md:h-full z-30' src={me} />

                    {/********************************* Blur **********************************/}
                    <div
                        className={`${darkMode ? 'hidden' : ""} 
                    blurSection h-full 
                    bg-gradient-to-tr from-heavyTeal via-blueCard to-lightBeige 
                    blur-[10px] w-[20%]  absolute right-10 top-30 -z-[100px]
                    `}>
                    </div>

                </div>
            </div>

        </div>
    )
}
