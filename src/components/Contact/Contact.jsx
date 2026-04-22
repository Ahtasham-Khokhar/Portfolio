import React, { useState } from 'react';
import './Contact.css';
import mail_icon from '../../Assets/mail_icon.svg';
import call_icon from '../../Assets/call_icon.svg';
import location_icon from '../../Assets/location_icon.svg';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const handleFocus =()=>{
    if(!email){
      setEmail("ahtashammalik887@gmail.com")
    }
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be 50 characters or less')
      .required('Name is required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Email is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .required('Message is required'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const payload = {
        ...values,
        access_key: 'd2502aec-4980-43c7-9392-808b01ae2093',
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        resetForm();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: mail_icon, text: 'ahtashammalik887@gmail.com', alt: 'Email' },
    { icon: call_icon, text: '0310-4360887', alt: 'Phone' },
    { icon: location_icon, text: 'Aitchison Society, Lahore, Pakistan', alt: 'Location' },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-section__header reveal">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-section__subtitle">
          Have a project in mind? Let's work together
        </p>
      </div>

      <div className="contact-section__grid">
        {/* Left — Info */}
        <div className="contact-section__info reveal">
          <h3 className="contact-section__info-title gradient-text">Let's Talk</h3>
          <p className="contact-section__info-desc">
            I'm currently available for new projects. Feel free to reach out 
            about anything you'd like me to work on — I'd love to hear from you.
          </p>

          <div className="contact-section__details">
            {contactInfo.map((item, index) => (
              <div className="contact-section__detail" key={index}>
                <div className="contact-section__detail-icon">
                  <img src={item.icon} alt={item.alt} />
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div className="contact-section__form-wrapper reveal">
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="contact-section__form" noValidate>
                <div className="contact-section__field">
                  <label htmlFor="contact-name">Your Name</label>
                  <Field
                    type="text"
                    name="name"
                    id="contact-name"
                    placeholder="John Doe"
                    className={errors.name && touched.name ? 'field-error' : ''}
                  />
                  <ErrorMessage name="name" component="span" className="contact-section__error" />
                </div>

                <div className="contact-section__field">
                  <label htmlFor="contact-email">My Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="contact-email"
                    placeholder="ahtashammalik887@gmail.com"
                    onFocus={handleFocus}
                    className={errors.email && touched.email ? 'field-error' : ''}
                  />
                  <ErrorMessage name="email" component="span" className="contact-section__error" />
                </div>

                <div className="contact-section__field">
                  <label htmlFor="contact-message">Your Message</label>
                  <Field
                    as="textarea"
                    name="message"
                    id="contact-message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    className={errors.message && touched.message ? 'field-error' : ''}
                  />
                  <ErrorMessage name="message" component="span" className="contact-section__error" />
                </div>

                <button
                  type="submit"
                  className="contact-section__submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="contact-section__spinner"></span>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Toast messages */}
                {submitStatus === 'success' && (
                  <div className="contact-section__toast contact-section__toast--success">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="contact-section__toast contact-section__toast--error">
                    ❌ Something went wrong. Please try again or email me directly.
                  </div>
                )}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Contact;
