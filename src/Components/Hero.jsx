import React, { useEffect } from 'react';
import '../assets/Styles/Hero.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Make sure AOS is imported

function Hero() {
  // Initialize AOS animation when the component is mounted
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="hero">
      <div className="container">
        <div className="hero__wrapper">
          {/* Left side content */}
          <div className="hero__left" data-aos="fade-left">
            <div className="hero__left__wrapper">
              <h1 className="hero__heading">The flavor of tradition</h1>
              <p className="hero__info">
                We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine
                dining environments.
              </p>
              <div className="button__wrapper">
                <a href="./Menu" className="btn primary-btn">Explore Menu</a>
                
                <a href="./Booktable.jsx" className="btn">Book Table</a>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="hero__right" data-aos="fade-right">
            <div className="hero__imgWrapper">
              <img src="\src\assets\Images\heroImg.png" alt="Restaurant Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
