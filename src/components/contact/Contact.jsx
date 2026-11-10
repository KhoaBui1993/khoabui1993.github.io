import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_eka42yo', 'template_ge3wc3j', form.current, 'eKFDaeqBRIZrdckp8');
    e.target.reset();
  };

  return (
    <section className="contact section" id='contact'>
      <div className="container">
        <h2 className="section__title">Direct Contact</h2>
        <span className="section__subtitle">INITIATE CONVERSATION &amp; INQUIRIES</span>

        <div className="contact__container grid">
          <div className="contact__content">
            <h3 className="contact__title">Direct Channels</h3>
            
            <div className="contact__info">
              <div className="contact__card">
                <i className="bx bx-mail-send contact__card-icon"></i>
                <h4 className="contact__card-title">Email</h4>
                <span className="contact__card-data">khoathanhbui@gmail.com</span>
                <a href="mailto:khoathanhbui@gmail.com" className="contact__button" target="_blank" rel="noreferrer">
                  Send Email <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bxl-linkedin contact__card-icon"></i>
                <h4 className="contact__card-title">LinkedIn</h4>
                <span className="contact__card-data">linkedin.com/in/khoa-bui</span>
                <a href="https://www.linkedin.com/in/khoa-bui" className="contact__button" target="_blank" rel="noreferrer">
                  Connect on LinkedIn <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>

              <div className="contact__card">
                <i className="bx bx-phone-call contact__card-icon"></i>
                <h4 className="contact__card-title">Phone / WhatsApp</h4>
                <span className="contact__card-data">+1 (669) 233-1475</span>
                <a href="https://api.whatsapp.com/send?phone=16692331475" className="contact__button" target="_blank" rel="noreferrer">
                  Send Message <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <h3 className="contact__title">Send A Message</h3>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <div className="contact__form-div">
                <label className="contact__form-tag">Name</label>
                <input 
                  type="text" 
                  name='name'
                  className='contact__form-input' 
                  placeholder='Enter your name'
                  required
                />
              </div>

              <div className="contact__form-div">
                <label className="contact__form-tag">Mail</label>
                <input 
                  type="email" 
                  name='email'
                  className='contact__form-input' 
                  placeholder='Enter your email'
                  required
                />
              </div>

              <div className="contact__form-div contact__form-area">
                <label className="contact__form-tag">Message</label>
                <textarea 
                  name="project" 
                  cols="30" 
                  rows="10" 
                  className='contact__form-input' 
                  placeholder='Write your message or role details'
                  required
                ></textarea>
              </div>

              <button type="submit" className="button button--flex">
                Send Message <i className="bx bx-send button__icon"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
