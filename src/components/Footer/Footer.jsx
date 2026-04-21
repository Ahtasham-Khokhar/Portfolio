import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaDownload } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#myWork' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="footer" className="footer">
      <div className="footer__content">
        <div className="footer__top">
          
          {/* Brand & Narrative */}
          <div className="footer__brand">
            <h2 className='text-2xl font-bold text-white mb-4'>Ahtasham Ashiq</h2>
            <p className="footer__brand-desc">
              Beyond writing code, I architect digital success. 
              Delivering high-performance, full-stack solutions to a global clientele.
            </p>
            {/* Resume Button in Footer as requested */}
            <a href="/Ahtasham_Resume.pdf" download className="footer__resume-btn">
              <FaDownload size={14} /> Download CV
            </a>
          </div>

          {/* Quick Links */}
          <div className="footer__nav">
            <ul className="footer__nav-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* NEW: Professional Contact & Socials */}
          <div className="footer__contact">
            <div className="footer__contact-grid">
              <a href="tel:+923104360887" className="footer__contact-item">
                <FaPhoneAlt className="icon-green" /> <span>+92 310 4360887</span>
              </a>
              <a href="mailto:ahtashammalik887@gmail.com" className="footer__contact-item">
                <FaEnvelope className="icon-red" /> <span>ahtashammalik887@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/aahtasham-ashiq/" target="_blank" rel="noreferrer" className="footer__contact-item">
                <FaLinkedin className="icon-blue" /> <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com/Ahtasham-Khokhar" target="_blank" rel="noreferrer" className="footer__contact-item">
                <FaGithub className="icon-white" /> <span>GitHub Repository</span>
              </a>
            </div>
          </div>

        </div>

        <hr className="footer__divider" />

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Ahtasham Ashiq. Built with React & Scalable Architecture.
          </p>
          <div className="footer__bottom-links">
            <a href="#home">Privacy Policy</a>
            <a href="#home">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;