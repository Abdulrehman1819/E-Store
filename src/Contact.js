import React from 'react'
import './App.css'
import Navbar from './Navbar'
function Contact() {
  return (
    <div>
       
      <div className='ContactUs'>
        <h2 className='flex justify-center text-lg font-semibold'>Feel Free To Contact Us</h2>
       
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.551346401684!2d74.30082541478691!3d31.48152575620985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1668872776121!5m2!1sen!2s" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
        <form action='https://formspree.io/f/xpznnqjn' method='POST'>
        <input type="text" placeholder='UserName' className='formnameinput' name="username"></input>
        <input type="text" placeholder='Email' className='formemail'></input>
        <textarea className='contacttextarea' cols={30} rows="10" name='message'></textarea>
        <button className='contactsend'>Send</button>
        </form>
   
      </div>
 
    </div>
  )
}

export default Contact
