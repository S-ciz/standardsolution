"use client";

import Image from "next/image";
import "../../includes/contact/contact.css"
import Navbar from "@/app/includes/navbar/navbar";
import Footer from "@/app/includes/footer/footer";
import Logo from "../../../../public/logo.webp"



import { useState } from "react";

const BookForm = ()=>{

  const [service, setService] = useState('');


  function submitForm(e)
  {
    e.preventDefault();

     if(service === 'tutoring') 
  {
    window.open("https://cal.com/stan-dard-solutions/tutoring")

  }else {
     window.open("https://cal.com/stan-dard-solutions/consultation")
  }

  }
    return <>
    <Navbar/>
    <div className="book_form">
  <form onSubmit={submitForm} id="booking_form">
    <Image className="logoImg" width={200} height={200} loading="lazy" src={Logo} alt="logo"/>
    <h1>Booking your session</h1>

    <section className="form-select">
      <label>Choose service</label>
      <select onChange={(e)=> setService(e.target.value)} id="service_select" required>
        <option value="">-- Select Service --</option>
        <option value="tutoring">Tutoring service</option>
        <option value="software">Software service</option>
      </select>
    </section>
    <button type="submit">Proceed to booking</button>
  </form>
</div>


    <Footer/>
    </>
}

export default BookForm;