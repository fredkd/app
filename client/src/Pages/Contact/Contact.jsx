import { useEffect, useRef } from 'react'
import Header from '../Header/Header'
import './Contact.css'
import Footer from '../Footer/Footer'
import emailjs from '@emailjs/browser'

function Contact () {
    const toTopRef = useRef()
    useEffect(() => {
        window.scroll(0,0)
    }, [])

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_wi5octz', 
            'template_rr09e1r', 
            form.current, 
            'FMoZvOeSFu7nf3oII')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (

        <>
        <span ref={toTopRef}></span>
        <Header />
            <div className="contact-wrapper"></div>
            <div className="con">
                <div className="cont">
                <div className="content">
                    <div className="left-side">
                        <div className="address details">
                            <i></i>
                            <div className='topic'>Address</div>
                            <div className="text-one">Kago street</div>
                        </div>
                        <div className="phone details">
                            <i></i>
                            <div className="topic">Phone</div>
                            <div className="text-one"></div>
                        </div>
                        <div className="email details">
                            <i></i>
                            <div className="topic">Email</div>
                            <div className="text-one">info@thegoldenpalace.co.ke</div>
                        </div>
                    </div>
                    <div className="right-side">
                        <h1>Send us a Message</h1>
                        <form action="" ref={form} onSubmit={sendEmail}>
                            <div className="input-box">
                                <input type="text" 
                                placeholder='Enter Your Name'
                                name='user_name' 
                                required/>
                            </div>
                            <div className="input-box">
                                <input type="text" 
                                placeholder='Enter Your Email'
                                name='user_email'
                                required />
                            </div>
                            <div className="input-box message-box">
                                <textarea placeholder='Enter Your Message'
                                name='subject'></textarea>
                            </div>
                            <button className="buttonn" type="submit" >
                                 Send Now
                            </button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact