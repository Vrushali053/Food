import React from 'react';
import styles from '../assets/Styles/Footer.module.css'; // Import the CSS Module

function Footer() {
  return (
    <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLogo}>
              <img src="/src/assets/Images/logo.svg" alt="shaif's cuisine" />
            </div>
            <p className={styles.footerDescription}>
              Fresh and delicious traditional Bangladeshi food to delight the whole family.
            </p>
            <div className={styles.footerSocials}>
              <h4 className={styles.footerSocialsTitle}>Follow us</h4>
              <div className={styles.footerSocialsIcons}>
                <a href="#" className={styles.footerSocialsIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-facebook">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a href="#" className={styles.footerSocialsIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-instagram">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a href="#" className={styles.footerSocialsIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-twitter">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerLinksTitle}>Links</h3>
            <div className={styles.footerLinks}>
              <a href="/Home">Home</a>
              <a href="./Menu">Menu</a>
              <a href="./Booktable">Book Table</a>
              <a href="./About">About Us</a>
              <a href="/Contact">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerSupportTitle}>Support</h3>
            <div className={styles.footerSupport}>
              <a href="#">Contact</a>
              <a href="#">Support Center</a>
              <a href="#">Feedback</a>
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h3 className={styles.footerContactTitle}>Contact</h3>
            <div className={styles.footerContact}>
              <a href="#">+880123</a>
              <a href="#">webcifar@gmail.com</a>
              <a href="#">GEC Circle, Chittagong, Bangladesh</a>
            </div>
          </div>
        </div>
      </div>

      <div id="copyright">
        <div className={styles.container}>
         
        </div>
      </div>
      
    </footer>
     <p className={styles.copyrightText}>
     © copyright 2024 Devcon's | All rights reserved
   </p>
   </>
  );
}

export default Footer;
