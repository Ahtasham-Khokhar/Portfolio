import React from 'react';
import './Hero.css';
import ahsam from '../../Assets/ahsam.jpg';

/* ── Social icon SVGs ── */
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.909L12 10.09l9.455-6.269h.909A1.636 1.636 0 0 1 24 5.457z"/>
  </svg>
);

const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">👋 Hello, I&apos;m</p>
        <h1 className="hero__title">
          Ahtasham
          <span className="hero__role gradient-text"> Full-Stack Engineer</span>
        </h1>
        <p className="hero__subtitle">Based in Lahore, Pakistan</p>
        <p className="hero__description">
          I architect scalable web solutions using the Next.js and Node.js environment —
          bridging complex backend data structures in MongoDB and Supabase with high-fidelity,
          accessible frontend interfaces powered by Tailwind CSS and Shadcn/ui.
        </p>
        <div className="hero__actions">
          <a
            href="#myWork"
            className="hero__btn hero__btn--primary"
            onClick={(e) => handleScrollTo(e, 'myWork')}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="hero__btn hero__btn--secondary"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            Connect With Me
          </a>
        </div>
      </div>

      <div className="hero__image-wrapper">
        <div className="hero__image-glow" />
        <div className="hero__image-container">
          <img
            src={ahsam}
            alt="Ahtasham Ashiq"
            className="hero__image"
          />
          <div className="hero__socials">
            <a
              href="https://www.linkedin.com/in/aahtasham-ashiq/"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Ahtasham-Khokhar"
              target="_blank"
              rel="noreferrer"
              className="hero__social-link"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </a>
            <a
              href="mailto: ahtashammalik887@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;