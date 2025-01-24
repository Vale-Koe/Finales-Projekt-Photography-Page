import React from 'react';
import "../css/Contact.css";
import { useRef, useState } from 'react';
import axios from "axios";
import CustomAlert from '../components/CustomAlert';

function Contact() {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!name || !email || !message) {
      setAlertMessage("Bitte fülle alle Felder aus, bevor du deine Nachricht versendest!");
      setShowAlert(true);
      return;
    } 


    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";


    const templateParams = {
      name,
      email,
      message,
    };
    console.log("EmailJS Service ID:", import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID);
    console.log("EmailJS Template ID:", import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID);
    console.log("EmailJS Public Key:", import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY);
    console.log("Template Params:", templateParams);

    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: import.meta.env.VITE_REACT_APP_EMAILJS_SERVICE_ID,
          template_id: import.meta.env.VITE_REACT_APP_EMAILJS_TEMPLATE_ID,
          user_id: import.meta.env.VITE_REACT_APP_EMAILJS_PUBLIC_KEY,
          template_params: templateParams,


        }
      );

      if (response.status === 200) {
        setAlertMessage("Deine Email wurde erfolgreich gesendet!");
      } else {
        setAlertMessage("Etwas ist schiefgelaufen. Bitte versuche es später erneut.");
      }
    } catch (error) {
      console.error("Fehler beim Senden der E-Mail:", error.response || error);
      setAlertMessage("Fehler: Die Nachricht konnte nicht gesendet werden.");
    }finally {
      setShowAlert(true);
    }
    
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className='contact'>
      <h2>Contact</h2>
      <div className='contactContainer'>
        <div className='contactText'>
          <p>Please feel comfortable to contact me. </p>
          <p><span>vkmailbox@icloud.com <br/>
            +49 17664923801</span></p>
          <p>Or you can use the contact form for your inquiry</p>
        </div>
        <form className='contactForm' onSubmit={submit}>
          <div className='name'>
            <input
              placeholder='Name'
              type="text"
              id="name"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className='email'>
            <input
              placeholder='Email'
              type="email"
              id="email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className='message'>
            <textarea
              placeholder='Message'
              id="message"
              name="message"
              ref={messageRef}
            />
          </div>
          <button type='submit'>
            Send
          </button>
        </form>
      </div>
     {showAlert && <CustomAlert message={alertMessage} onClose={closeAlert} />}

    </div>
  );
}

export default Contact;
