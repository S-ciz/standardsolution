"use client";

import emailjs from '@emailjs/browser';

import "./contact.css"
import Image from "next/image";

import { useState } from "react";
import Logo from "../../../../public/logo.webp"

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    const templateParams = {
                name:  name,
                email: email,
                message: message
            };

            try {
                await emailjs.send(
                   'service_n57tw5i',
                    'template_1mmrcyl',
                    templateParams,
                    "VSimVfpNVvrdB0fgn"
                );
                alert('Email sent successfully!');
            } catch (error) {
                console.error('Failed to send email:', error);
                alert('Failed to send email.');
            } finally 
            {
              setName('');
              setEmail('');
              setMessage('')
            }
  }

  return (
    <div id="contact" className="book_form">
      <form onSubmit={submitForm} id="booking_form">
        <Image  className='logoImg' width={200} height={200} src={Logo} alt="logo" />
        <h1><span>Contact us</span> <br /> <small style={{ fontSize: "1.2rem", color: "var(--primary)" }}> Please complete the below form to contact us and we’ll make sure the right team member gets back to you.</small> </h1>


        <section className="genesis">
          <div className="form_control">
            <input onInput={(e) => setName(e.target.value)} name="name" type="text" className="form_input" id="name" required />
            <label>Name</label>
          </div>
          <div className="form_control">
            <input onInput={(e) => setEmail(e.target.value)} name="email" type="email" className="form_input" id="email" required />
            <label>Email</label>
          </div>
        </section>

        <section>
          <textarea onInput={(e) => setMessage(e.target.value)} placeholder="Message..." className="text" name="message" id=""></textarea>
        </section>




        <button type="submit">Send message</button>
      </form>
    </div>
  )
}

export default Contact;