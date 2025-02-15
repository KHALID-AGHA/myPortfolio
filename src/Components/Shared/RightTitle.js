import React, { useContext } from 'react'
import { themeContext } from '../../Context/Context'
import { Context } from '../../Context/Context'

const RightTitle = ({ Header1, Header2, Paragraph1, Paragraph2 }) => {

    //---------------Dark Mode
    const {theme} = useContext(Context)

    return (
        <section className='w-full h-2/3 flex flex-col justify-evenly'
        >
            <span
                className={`${theme ? "text-heavyTeal" : ""} HeaderOne py-1 text-black font-bold text-5xl`}
            >
                {Header1}
            </span>
            <span
                className={`${theme ? "text-darkTitle" : ""} HeaderTwo py-1 text-heavyTeal font-bold text-4xl md:text-xl`}
            >
                {Header2}
            </span>
            <span className='Paragraph py-1 text-lightTeal italic text-lg font-medium'>
                {Paragraph1}
                <br />
                {Paragraph2}
            </span>
        </section>
    )
}
export default RightTitle;