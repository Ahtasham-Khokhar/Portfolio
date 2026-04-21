import React from 'react';
import './Services.css';
import Servicesdata from '../../Assets/services_data';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services__header reveal">
        <h2 className="section-title">My Network</h2>
        <p className="services__subtitle">
          Beyond writing code, I architect digital success. As a Full-Stack Engineer and Strategist, I leverage a hand-picked network of specialists to deliver end-to-end solutions that bridge technical excellence with business growth. From initial concept to global deployment, I provide a unified roadmap that integrates robust engineering, high-impact design, and data-driven marketing to ensure your project scales seamlessly and outperforms the competition.
        </p>
      </div>

      <div className="services__grid">
        {Servicesdata.map((service, index) => (
          <div
            className="services__card reveal"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span className="services__card-icon">{service.s_icon}</span>
            <span className="services__card-number">{service.s_no}</span>
            <h3 className="services__card-title">{service.s_name}</h3>
            <p className="services__card-desc">{service.s_desc}</p>
            <span className="services__card-arrow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;