import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [successIsVisible, setSuccessIsVisible] = useState(false);
  const [failureIsVisible, setFailureIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID); // Vérifier si la variable est définie
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE_ID); // Vérifier si la variable est définie
    console.log(process.env.REACT_APP_EMAILJS_USER_ID); // Vérifier si la variable est définie

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        setSuccessIsVisible(true);
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((error) => {
        setFailureIsVisible(true);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <>
      <main>
        <div id='contactForm'>
          <h2>Contacter moi !</h2>
          <p
            id='failure'
            style={{ display: failureIsVisible ? "flex" : "none" }}
          >
            Erreur : Message non envoyé !
          </p>
          <p
            id='success'
            style={{ display: successIsVisible ? "flex" : "none" }}
          >
            Message envoyé avec succès !
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>
                <span className='required'>Nom: *</span>
                <input
                  type='text'
                  id='name'
                  name='user_name'
                  placeholder='John Doe'
                  value={formData.user_name}
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
                  name='user_email'
                  placeholder='flat_earth42@gmail.com'
                  value={formData.user_email}
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
            <div className='contactBottom'>
              <div className='submit'>
                <button
                  name='submit'
                  type='submit'
                  className='submit'
                  id='submit'
                >
                  SEND
                </button>
              </div>
              <div className='socialContainer'>
                <ul className='socialLink'>
                  <li className='socialItem'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='24'
                      height='24'
                      viewBox='0 0 30 30'
                      fill='currentColor'
                    >
                      <path d='M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z'></path>
                    </svg>
                  </li>
                  
                  <li className='socialItem'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      x='0px'
                      y='0px'
                      width='36'
                      height='36'
                      viewBox='0 0 64 64'
                      fill="currentColor"
                    >
                      <path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z'></path>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Contact;
