import React from 'react';
import './About.css';
import ahsam from '../../Assets/ahsam.jpg';

const About = () => {
  const skills = [
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 75 },
    { name: 'React JS', level: 80 },
    { name: 'Next JS', level: 65 },
  ];

  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '10+', label: 'Successful Projects' },
    { value: '5+', label: 'Happy Clients' },
  ];

  return (
    <section id="about" className="about">
      <div className="about__header reveal">
        <h2 className="section-title">About Me</h2>
      </div>

      <div className="about__content">
        <div className="about__image-col reveal">
          <div className="about__image-wrapper">
            <img src={ahsam} alt="Ahtasham — Developer" className="about__image" />
            <div className="about__image-border"></div>
          </div>
        </div>

        <div className="about__info-col reveal">
          <p className="about__text">
            I am an experienced Frontend Developer with over 2 years in the programming field. 
            During this time, I have completed numerous projects that demonstrate my expertise 
            and commitment to quality.
          </p>
          <p className="about__text">
            I build websites that are user-friendly, responsive, fast-loading, accessible, 
            and SEO-optimized — all customized precisely to client requirements with clear 
            call-to-action elements.
          </p>

          <div className="about__skills">
            {skills.map((skill, index) => (
              <div className="about__skill" key={index}>
                <div className="about__skill-header">
                  <span className="about__skill-name">{skill.name}</span>
                  <span className="about__skill-percent">{skill.level}%</span>
                </div>
                <div className="about__skill-track">
                  <div
                    className="about__skill-fill"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

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
