import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <main>
        <div id='contactForm'>
          <h2>Contacter moi !</h2>
          <p id='failure'>Erreur : Message non envoyé !</p>
          <p id='success'>Message envoyé avec succès !</p>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>
                <span className='required'>Nom: *</span>
                <input
                  type='text'
                  id='name'
                  name='name'
                  placeholder='John Doe'
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor='email'>
                <span className='required'>Email: *</span>
                <input
                  type='email'
                  id='email'
                  name='email'
                  placeholder='flat_earth42@gmail.com'
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label htmlFor='message'>
                <span className='required'>Message: *</span>
                <textarea
                  id='message'
                  name='message'
                  placeholder='Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation...'
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
            </div>
            <div className='button submit'>
              <button name='submit' type='submit' className="submit" id='submit'>
                SEND
              </button>
              <span className='spanLight'></span>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
