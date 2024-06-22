import React from 'react';
import "./Contact.css";
import theme_pattern from "../../Assets/theme_pattern.svg";
import mail_icon from "../../Assets/mail_icon.svg";
import call_icon from "../../Assets/call_icon.svg";
import location_icon from "../../Assets/location_icon.svg";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Contact = () => {

  const onSubmit = async (values) => {
    values.access_key = "d2502aec-4980-43c7-9392-808b01ae2093";

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(values)
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required')
  });

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="container">
        <div className="left">
          <h1>Let's talk</h1>
          <p>I'm currently available to take a new Project, so feel free to send message about anything that you want me to work on. You can control anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Mail Icon" />
              <p>ahtashammalik887@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="Call Icon" />
              <p>0310-4360887</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="Location Icon" />
              <p>D Ground People Colony Faisalabad Pakistan</p>
            </div>
          </div>
        </div>

        <div className='right'>
          <Formik
            initialValues={{ name: '', email: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              onSubmit(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className='input'>
                  <label htmlFor="name">Your Name</label>
                  <Field type="text" name='name' id='name' />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className='input'>
                  <label htmlFor="email">Your Email</label>
                  <Field type="text" name='email' id='email' />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>

                <div className='input'>
                  <label htmlFor="message">Type Your Message</label>
                  <Field as="textarea" name="message" id="message" rows="5" />
                  <ErrorMessage name="message" component="div" className="error" />
                </div>

                <div id="inputbutton">
                  <button type="submit">Submit</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Contact;
