import React from 'react'
import './AboutMe.css'

function AboutMe() {
  return (
    <div> 
      <section className="contact-me" id="contact-loc">
        <h1>Contact Me</h1>
        <div className="contact">
            <div className="contact-card">
                <i className="ri-message-3-line"></i>
                <p>ankitthakur682000@gmail.com
               </p>
            </div>
            <div className="contact-card">
                <i className="ri-phone-line"></i>
                <p> +91 9870731721</p>
            </div>
            <div className="contact-card">
                <i className="ri-map-pin-3-line"></i>
                <p>Noida, India</p>
            </div>
        </div>
    </section>
    <p className="rights">@ 2024 all rights reversed</p>
    </div>
  )
}

export default AboutMe
