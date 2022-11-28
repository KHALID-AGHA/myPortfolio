import React from 'react'

const CenterTitle = ({ Header1, Header2 }) => {
    return (
        <section className='w-full h-1/3 flex flex-col items-center  md:mt-10'>
            <span className='py-2 text-black font-bold text-4xl md:text-3xl'>{Header1} </span>
            <span className='py-2 text-heavyTeal font-bold text-3xl  md:text-xl'>{Header2}</span>
        </section>
    )
}
export default CenterTitle;