import React from 'react';
import Button from './button/Button';
import './Contact.css';
function Contact() {
  const submitHandler = (event) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
    <section>
      <form onSubmit={submitHandler} className="contact">
        <div className="contactGroup">
          <input type="text" id="firstName" placeholder="First Name" />

          <input type="text" id="lastName" placeholder="Last Name" />
        </div>

        <div className="contactGroup">
          <input type="text" id="email" placeholder="Email" />

          <input type="text" id="phone" placeholder="Phone" />

          <input type="text" id="github" placeholder="Github" />

          <input type="text" id="linkedin" placeholder="LinkedIn" />
        </div>

        <Button btn={"Submit"}/>
      </form>
    </section>
  );
}

export default Contact;