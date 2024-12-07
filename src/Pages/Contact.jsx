import React from 'react';
import '../assets/Styles/Contact.css';

function Contact() {
  return (
    <div>

      {/* Store Info Section */}
      <section id="contact-info" data-aos="fade-up">
        <div className="container">
          <div className="contact-info__wrapper">
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <img src="\src\assets\Images\wall-clock-icon.svg" alt="Clock icon" />
              </div>
              <h3 className="contact-info__title">10 AM - 7 PM</h3>
              <p className="contact-info__text">Opening Hour</p>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <img src="\src\assets\Images\address-icon.svg" alt="Address icon" />
              </div>
              <h3 className="contact-info__title">GEC, Chittagong</h3>
              <p className="contact-info__text">Address</p>
            </div>
            <div className="contact-info__item">
              <div className="contact-info__icon">
                <img src="\src\assets\Images\phone-icon.svg" alt="Phone icon" />
              </div>
              <h3 className="contact-info__title">+880123443</h3>
              <p className="contact-info__text">Call Now</p>
            </div>
          </div>
        </div>
      </section>
      {/* End Store Info Section */}

      {/* Contact Form Section */}
      <section id="contact-form" data-aos="fade-down">
        <div className="containere">
          <h3 className="contact-form__title">Contact & Inquiry</h3>
          <div className="contact-form__wrapper">
            <form name="contact" method="POST" netlify>
              <div className="contact-form__group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="First Name" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="Last Name" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="Email" required />
              </div>
              <div className="contact-form__group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="Subject" required />
              </div>
              <div className="contact-form__group contact-form__group__full">
                <label htmlFor="message">Message</label>
                <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
              </div>
              <button type="submit" className="btn primary-btn">Send</button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Contact;
