import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_223o79i', 'template_x9bq1hn', form.current, 'PqmwlG-ddOjFVhEpH');

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <AiOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>oktovizurya.k@gmail.com</h5>
                        <a href="mailto:oktovizurya.k@gmail.com"> Send an Email</a>

                    </article>
                    <article className="contact__option">
                        <AiOutlineWhatsApp className='contact__option-icon' />
                        <h4>WhatspApp</h4>
                        <h5></h5>
                        <a href="https://api.whatsapp.com/send?phone=6281380147587"> Send an Email</a>

                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="text" name="email" placeholder='Your Email' required />
                    <textarea name="message" cols="30" rows="7" placeholder='Ypur Message' required></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>

                </form>
            </div>
        </section>
    )
}

export default Contact