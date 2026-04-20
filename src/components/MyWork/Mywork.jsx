import React from 'react';
import './Mywork.css';
import mywork_data from '../../Assets/mywork_data';

const Mywork = () => {
  return (
    <section id="myWork" className="mywork">
      <div className="mywork__header reveal">
        <h2 className="section-title">My Latest Work</h2>
        <p className="mywork__subtitle">
          A selection of recent projects I've worked on
        </p>
      </div>

      <div className="mywork__grid">
        {mywork_data.map((work, index) => (
          <div
            className="mywork__card reveal"
            key={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mywork__card-image">
              <img src={work.w_img} alt={work.w_name} />
              <div className="mywork__card-overlay">
                <span className="mywork__card-category">{work.w_category}</span>
                <h3 className="mywork__card-title">{work.w_name}</h3>
                <span className="mywork__card-link">View Project →</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mywork__cta reveal">
        <a href="#contact" className="mywork__show-more">
          <span>View All Projects</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Mywork;