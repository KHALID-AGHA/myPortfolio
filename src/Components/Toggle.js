
import { useContext, useState } from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { themeContext } from '../Context/Context';

export default function Toggle() {

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    const switchTheme = () => {
        theme.dispatch({ type: 'toggle' })
        if (darkMode) {
            localStorage.setItem('dark', 'OFF')
            localStorage.removeItem('light',)
        }
        else if (!darkMode) {
            localStorage.setItem('light', "OFF")
            localStorage.removeItem('dark',)
        }
    }
    return (
        <div
            className='toggle cursor-pointer flex flex-row items-center h-full z-[1000]'>
            {
                !darkMode ? <BsFillMoonFill cursor={'pointer'} onClick={() => { switchTheme() }}
                    className="toogleIcons w-8 h-4"
                    color='#0E5E6F' width={5} height={4} />
                    :
                    <BsFillSunFill cursor={'pointer'} onClick={() => { switchTheme() }}
                        // className="toogleIcons w-8 h-4"
                        className={`${darkMode ? "" : ""} toogleIcons w-8 h-4`}
                    />
            }
        </div>
    )
}
