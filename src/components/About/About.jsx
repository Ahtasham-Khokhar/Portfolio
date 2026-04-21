import React from 'react';
import './About.css';
import ahsam from '../../Assets/ahsam.jpg';

const About = () => {
  // Full-Stack Core Competencies
  const coreSkills = [
    { name: 'Architecture & Next.js' },
    { name: 'TypeScript / React' },
    { name: 'Node.js & Backend Logic' },
    { name: 'PostgreSQL / Prisma' },
  ];

  const techStack = [
    "Node.js", "MongoDB", "Redux Toolkit", "REST APIs", "Git/GitHub"
  ];

  const stats = [
    { value: '2+', label: 'Years Experience' },
    { value: '15+', label: 'Projects Shipped' },
    { value: '99%', label: 'Uptime Delivery' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__header">
        <h2 className="section-title">About Me</h2>
        <span className="section-subtitle">Bridging the gap between design and scalable logic</span>
      </div>

      <div className="about__content">
        {/* Left Column: Image with interactive border */}
        <div className="about__image-col reveal">
          <div className="about__image-wrapper">
            <img src={ahsam} alt="Ahtasham — Full Stack Engineer" className="about__image" />
            <div className="about__image-overlay"></div>
            <div className="about__image-border"></div>
          </div>
        </div>

        {/* Right Column: Engineering Narrative */}
        <div className="about__info-col reveal">
          <h3 className="about__subheading">Engineering High-Performance Solutions</h3>
          <p className="about__text">
            I am a Full-Stack Software Engineer, specializing in building robust, 
            scalable web applications. With a focus on the T3 Stack (Next.js, TypeScript, Prisma) and modern Javascript run time environment, I transform complex business 
            requirements into seamless digital experiences.
          </p>
          <p className="about__text">
            Beyond writing code, I focus on Software Architecture, ensuring that 
            every system is maintainable, secure, and optimized for peak performance.
          </p>

          {/* Skill Progress Bars */}
          <div className="about__skills">
            {coreSkills.map((skill, index) => (
              <div className="about__skill" key={index}>
                <div className="about__skill-header">
                  <span className="about__skill-name">{skill.name}</span>
                </div>
                <div className="about__skill-track">
                  <div className="about__skill-fill" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Secondary Stack Badges */}
          <div className="about__tech-stack">
            {techStack.map((tech, i) => (
              <span key={i} className="tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="about__stats reveal">
        {stats.map((stat, index) => (
          <div className="about__stat-card" key={index}>
            <h3 className="about__stat-value gradient-text">{stat.value}</h3>
            <p className="about__stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;