import React from 'react';
import './Hero.css';
import ahsam from '../../Assets/ahsam.jpg';

const Hero = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">👋 Hello, I'm</p>
        <h1 className="hero__title">
          Ahtasham
          <span className="hero__role gradient-text"> Frontend Developer</span>
        </h1>
        <p className="hero__subtitle">
          Based in Faisalabad, Pakistan
        </p>
        <p className="hero__description">
          I craft modern, responsive web experiences using React and Next.js. 
          Every day I sharpen my skills, build meaningful projects, and focus on 
          delivering quality that makes a difference.
        </p>
        <div className="hero__actions">
          <a
            href="#contact"
            className="hero__btn hero__btn--primary"
            onClick={(e) => handleScrollTo(e, 'contact')}
          >
            Connect With Me
          </a>
          <a
            href="#myWork"
            className="hero__btn hero__btn--secondary"
            onClick={(e) => handleScrollTo(e, 'myWork')}
          >
            View My Work
          </a>
        </div>
      </div>
      <div className="hero__image-wrapper">
        <div className="hero__image-glow"></div>
        <img src={ahsam} alt="Ahtasham — Frontend Developer" className="hero__image" />
      </div>
    </section>
  );
};

export default Hero;