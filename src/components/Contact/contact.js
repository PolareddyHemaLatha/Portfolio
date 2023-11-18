import React, { useRef } from 'react'
import './contact.css'
import FBIcon from '../../assets/facebook-icon.png';
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png';
import instagram from '../../assets/instagram.png'
//add required images here
import barclays from '../../assets/microsoft.png'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_709afys', 'template_3uwgtak', form.current, 'SLduRXAH3NtdfBqUjG0bQ')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('email sent');
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section id='contactPage'>
            <div id='clients'>
                <h1 className='contactpageTitle'>My Internships</h1>
                <p className='clientDesc'> barclays Internship</p>
                <div className='clientImgs'>
                    <img src={barclays} alt='barclays' className='clientImg'></img>
                </div>
            </div>
            <div id='contact'>
                <h1 className='contactpageTitle'>Contact Me </h1>
                <span className='contactDesc'> Fill fill the form</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name' />
                    <input type='email' className='email' placeholder='Your Email' name='your_email' />
                    <textarea className='msg' name='message' rows='5' placeholder='Your message'></textarea>
                    <button type="submit" value="submit" className='submitbtn' >Submit</button>
                    <div className='links'>
                        <img src={FBIcon} alt='FaceBook' className='link' />
                        <img src={twitter} alt='Twitter' className='link' />
                        <img src={youtube} alt='You Tube' className='link' />
                        <img src={instagram} alt='Instagram' className='link' />

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
