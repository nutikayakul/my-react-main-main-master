import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import './Contact.css';

function Contact() {
  return (
    <>
      <Nav />


      <main className="contact">
            <section className="contact-hero">
                <h2>Contact Us</h2>
                <p>We'd love to hear from you. Please fill out the form below to get in touch.</p>
            </section>

            <section className="contact-form-section">
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>

            <section className="contact-info">
                <h3>Our Contact Information</h3>
                <p>Email: contact@company.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Main Street, City, Country</p>
            </section>
        </main>


        <Footer />
    </>
  )
}

export default Contact
