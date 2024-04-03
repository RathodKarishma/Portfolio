

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

 const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
      })

      
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='mailfrom'>
        
      <label className='label1'>Name</label><br/>
      <input  className="input1" type="text" name="user_name" /><br/>

      <label className='label2'>Email</label><br/>
      <input   className="input2"  type="email" name="user_email" /><br/>

      <label className='label3'>Message</label><br/>
      <textarea   className="input3" name="message" /><br/>

      <input className='submit' type="submit" value="Send" />
      </div>
    </form>
  );
};
export default Contact;