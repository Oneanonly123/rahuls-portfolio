import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { TbBrandInstagram } from 'react-icons/tb'
import { BsTwitter } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

     emailjs.sendForm('service_7ov4x5u', 'template_6vudctg', form.current, 'SbgtUtqG4l3_mKqD2')
     e.target.reset()
     
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail  className='contacy__option-icon'/>
            <h4>Email</h4>
            <h5>rs1827075@gmail.com</h5>
            <a href='mailto:rs1827075@gmail.com' target="__blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTwitter className='contacy__option-icon'/>
            <h4>Twitter</h4>
            <h5>Rahul</h5>
            <a href='https://www.twitter.com' target="__blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <TbBrandInstagram  className='contacy__option-icon'/>
            <h4>Instagram</h4>
            <h5>Oneanonly_1_2_3</h5>
            <a href='https://www.instagram.com/oneanonly_1_2_3/' target="__blank">Send a message</a>
           </article>
          </div>
       {/* End of Contact Option */}
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder="Your full name" required />
        <input type="email" name='email' placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact