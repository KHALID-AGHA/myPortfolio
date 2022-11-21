
import { useContext, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { themeContext } from '../Context/Context';

export default function Toggle() {

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div
            className='toggle cursor-pointer flex flex-row items-center h-full z-[1000]'>
            {
                !darkMode ? <BsFillMoonFill cursor={'pointer'} onClick={() => { theme.dispatch({ type: 'toggle' }) }}
                    className="toogleIcons w-8 h-4"
                    color='#0E5E6F' width={5} height={4} />
                    :
                    <BsFillSunFill cursor={'pointer'} onClick={() => { theme.dispatch({ type: 'toggle' }) }}
                        // className="toogleIcons w-8 h-4"
                        className={`${darkMode ? "text-heavyBeige" : ""} toogleIcons w-8 h-4`}
                    />
            }
        </div>
    )
}
