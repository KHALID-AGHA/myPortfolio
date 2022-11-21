import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
export default function Contact() {


    //******************************EmailJS */
    const [sentsuccessfuly, setSentsuccessfuly] = useState(false)
    const form = useRef({
        user_name: '',
        user_email: '',
        user_message: '',
    });
    const [feedback, setFeedback] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1jr2zwi', 'template_9sdqhvc', form.current, '-nja6vIqvlpT9R8kT')
            .then((result) => {
                setSentsuccessfuly(true)
                e.target.reset()
                setInterval(() => {
                    setSentsuccessfuly(false)
                }, 3000);
            }, (error) => {
                console.log(error.text);
            });
    }
    const handleChange = (e) => {
        setFeedback(form => ({
            ...form,
            [e.target.name]: e.target.value
        }))
    }
    //******************************EmailJS */
    return (
        <div id="contact_section" name="contact_section" className='relative p-12 md:p-0 h-screen mb-20  flex flex-row justify-between items-center my-3 w-full md:flex-col'>

            {/**Blur div */}
            <div className='blurSection h-full 
                            bg-gradient-to-tr from-heavyTeal via-blueCard to-lightBeige 
                            blur-[30px] w-[10%]  absolute left-0 -z-[1000px] '>
            </div>
            {/********************************* Text Side **********************************/}
            <div className='textSide flex flex-col w-1/3 z-10 md:w-full md:items-center md:justify-center'>
                <span className='my-2 text-black text-4xl font-bold md:text-2xl'>Get in touch</span>
                <span className='my-2 text-heavyTeal text-4xl font-bold md:text-2xl'>Contact Me</span>
            </div>

            {/********************************* Form Side **********************************/}
            <div className='formSide py-4 w-2/3 h-full flex items-center justify-center z-10 md:w-full md:items-center '>
                <form
                    ref={form} onSubmit={sendEmail}
                    className='h-3/4 w-full flex flex-col items-center justify-around md:w-full md:h-full'>
                    <input id="contact_name" required onChange={handleChange} type={'text'} placeholder="Name" name='user_name' className='w-1/2 py-4 px-2 rounded-[8px] border-2 border-heavyTeal outline-heavyTeal text-heavyTeal placeholder:text-heavyTeal md:w-full md:my-1' />
                    <input id="contact_email" required onChange={handleChange} type={'email'} placeholder="Email" name='user_email' className='w-1/2 py-4 px-2 rounded-[8px] border-2 border-heavyTeal outline-heavyTeal text-heavyTeal placeholder:text-heavyTeal md:w-full md:my-1' />
                    <textarea id="contact_message" required onChange={handleChange} rows={4} placeholder='Message' name='user_message' className='w-1/2 py-4 px-2 rounded-[8px] border-2 border-heavyTeal outline-heavyTeal text-heavyTeal placeholder:text-heavyTeal md:w-full md:my-1' />
                    <input type={'submit'} value="Submit" className='golbalBtnStyle w-1/4 md:w-full' />
                    <span className='text-heavyTeal'>
                        {sentsuccessfuly && "Thanks- Your message was sent successfuly"}
                    </span>
                </form>
            </div>
            {/**Blur div */}
            <div className='blurSection h-full 
             bg-gradient-to-br from-heavyTeal via-blueCard to-lightBeige 
             blur-[30px] w-[40%]  absolute right-10 -z-[1000px] '>
            </div>

        </div>
    )
}
