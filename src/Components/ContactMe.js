import React, { useContext, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CenterTitle from './Shared/CenterTitle';
import Buttons from './Shared/Buttons';
import { BsFillChatRightTextFill } from 'react-icons/bs'
import { AiFillMessage, AiOutlineLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdAlternateEmail } from 'react-icons/md'
import { FaExternalLinkAlt, } from 'react-icons/fa'
import { themeContext } from '../Context/Context';
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {

    useEffect(() => {
        //---------------Animation
        AOS.init();
        AOS.refresh();
    }, [])


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

    //******************************Contact Card  */
    const contactCard = [
        { id: 1, title: "WhatsApp", linkTo: "https://wa.me/76318263", info: "+961 76 318 263", icon: <AiOutlineWhatsApp color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
        { id: 2, title: "LinkedIn", linkTo: "https://www.linkedin.com/in/khalid-agha/", info: "khalid-agha", icon: <AiOutlineLinkedin color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
        { id: 3, title: "DM", linkTo: "mkhalid.k.agha@gmail.com", info: "mkhalid.k.agha@gmail.com", icon: <MdAlternateEmail color='#3A8891' className=' h-full w-[15%] pl-1' size={40} /> },
    ]

    //---------------Dark Mode
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    return (
        <div
            id="contact_section" name="contact_section"
            className='relative p-12 md:p-0 h-screen md:h-auto mb-20 flex flex-col  justify-between items-center my-3 w-full md:flex-col'>

            {/**Blur div */}
            <div className='blurSection h-1/2 m-auto 
             bg-gradient-to-tl from-heavyTeal via-blueCard to-lightBeige 
             blur-[30px] w-[10%] absolute left-0 top-0 -z-[1000] '>
            </div>

            {/********************************* Text Side **********************************/}
            <CenterTitle Header1={"Get in Touch"} Header2={"Contact ME"} />

            {/********************************* InfoSide **********************************/}
            <section className='InfoForm flex flex-row md:flex-col md:items-center justify-between w-full mt-4'>

                <div className='w-1/2 md:w-full md:my-1 h-full md:h-1/2 flex flex-row md:flex-col flex-wrap gap-2 justify-center items-center'>
                    {contactCard.map((card) => (

                        <div
                            className="group w-[45%] md:w-3/4 sm:w-full md:my-3 h-32 relative rounded-md shadow-xl border-b-2 border-l-2 border-lightTeal shadow-heavyTeal flex flex-row justify-between items-start"
                            data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000"
                        >

                            <a href={`${card.linkTo === "mkhalid.k.agha@gmail.com" ? " mailto:mkhalid.k.agha@gmail.com" : card.linkTo}`}
                                target={'_blank'}>
                                <FaExternalLinkAlt
                                    className='absolute top-0 right-0'
                                    color={`${darkMode ? "#F2DEBA" : "#0e5e6f"}`}
                                />
                            </a>

                            {card.icon}

                            <div className=' w-[84%] h-full flex flex-col items-start justify-center p-1'>
                                <h1 className='text-heavyTeal font-bold'>{card.title}</h1>
                                <span className='text-lightTeal font-medium'>{card.info}</span>
                            </div>

                        </div>
                    ))}
                </div>

                {/********************************* Form Side **********************************/}
                <h1 className='hidden md:flex text-heavyTeal justify-center w-full h-auto '>Or you Send your request below</h1>
                <div className='w-1/2 md:w-full h-full  md:h-1/2 p-3 flex flex-row justify-center  '>
                    <form
                        ref={form} onSubmit={sendEmail}
                        className='w-full h-3/4 md:h-auto md:text-center'>

                        {/********************************* Name **********************************/}
                        <div className="mb-6">
                            <label for="name"
                                className="block mb-2 text-sm font-bold italic text-heavyTeal">
                                Your Name
                            </label>
                            <input name='user_name' onChange={handleChange} id="contact_name" type={"text"}
                                className="shadow-sm  border border-heavyTeal text-heavyTeal text-sm rounded-lg focus:ring-heavyTeal focus:border-heavyTeal block 
                            w-full p-2.5 placeholder:text-lightTeal outline-heavyTeal"
                                placeholder="Khalid Agha" required />
                        </div>

                        {/********************************* Email **********************************/}
                        <div className="mb-6">
                            <label for="email"
                                className="block mb-2 text-sm font-bold italic text-heavyTeal">
                                Your Email
                            </label>
                            <input name='user_email' onChange={handleChange} id="contact_email" type={"email"}
                                className="shadow-sm  border border-heavyTeal text-heavyTeal text-sm rounded-lg focus:ring-heavyTeal focus:border-heavyTeal block 
                                            w-full p-2.5 placeholder:text-lightTeal outline-heavyTeal"
                                placeholder="khalid@gmail.com" required />
                        </div>

                        {/********************************* Message **********************************/}
                        <div className="mb-6">
                            <label for="message"
                                className="block mb-2 text-sm font-bold italic text-heavyTeal">
                                Your message
                            </label>
                            <textarea name='user_message' onChange={handleChange} id="contact_message" rows="4"
                                className="block p-2.5 w-full text-sm text-heavyTeal rounded-lg border 
                                         border-heavyTeal focus:ring-heavyTeal focus:border-heavyTeal placeholder:text-lightTeal outline-heavyTeal"
                                placeholder="Leave a comment..." required />
                        </div>

                        {/********************************* Submit **********************************/}
                        <Buttons Action={"Submit"} />

                        <span className='text-heavyTeal '>
                            {sentsuccessfuly && "Thanks- Your message was sent successfuly"}
                        </span>

                    </form>
                </div>
            </section>

            {/**Blur div */}
            <div className='blurSection h-1/2 m-auto 
    bg-gradient-to-tl from-heavyTeal via-blueCard to-lightBeige
    blur-[30px] w-[70%]  absolute right-10 bottom-0 -z-[1000]'>
            </div>

        </div>
    )
}
