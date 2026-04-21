import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

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
        {/* Top Section */}
        <div className="footer__top">
          <div className="footer__brand">
            <h2 className='text-2xl font-bold text-white mt-8 mb-4'>Ahtasham Ashiq</h2>
            <p className="footer__brand-desc">
              Full Stack Web Engineer based in Lahore, Pakistan. 
              Building modern web experiences to the whole world.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul className="footer__nav-links">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__newsletter">
            <h4 className="footer__newsletter-title">Stay Updated</h4>
            <p className="footer__newsletter-desc">
              Subscribe to get notified about new projects and updates.
            </p>
            <form className="footer__newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="footer__newsletter-input"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="footer__newsletter-btn">
                {subscribed ? '✓' : '→'}
              </button>
            </form>
            {subscribed && (
              <p className="footer__newsletter-success">Thanks for subscribing!</p>
            )}
          </div>
        </div>

        <hr className="footer__divider" />

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Ahtasham. All rights reserved.
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