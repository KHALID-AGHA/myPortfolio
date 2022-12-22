import React, { useContext } from 'react'
import { themeContext } from '../../Context/Context'

const CenterTitle = ({ Header1, Header2 }) => {

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <section className='w-full h-1/3 flex flex-col items-center  md:mt-10'>
            <span
                className={`${darkMode ? "text-heavyTeal" : ""} HeaderOne py-2 text-black font-bold text-4xl md:text-3xl`}
            >
                {Header1}
            </span>
            <span
                className={`${darkMode ? "text-[#9ebac0]" : ""} HeaderTwo py-2 text-heavyTeal font-bold text-3xl  md:text-xl`}
            >
                {Header2}
            </span>
        </section>
    )
}
export default CenterTitle;