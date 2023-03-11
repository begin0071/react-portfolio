import React, { useState } from 'react';

function Contactme(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputBlur = (event) => {
    if (!event.target.value) {
      setErrorMessage(`${event.target.name} is required.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleEmailBlur = (event) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(event.target.value)) {
      setErrorMessage("Invalid email");
    } else {
      setErrorMessage("");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setErrorMessage("Please fill out all fields");
    } else {
      alert(`Thank you for your message, ${name}!`);
      setName("");
      setEmail("");
      setMessage("");
      setErrorMessage("");
    }
  };

  return(
    <div className='contact-container'>
      <h1>Leave a message!</h1>
      <form>
        <div className="form-container">
          <div className="form-section">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={name}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>

          <div className="form-section">
            <label htmlFor="email">Your email adress:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              onBlur={handleEmailBlur}
            />
          </div>

          <div className="form-section">
            <label htmlFor="message">Text:</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <button className='form-button' type="button" onClick={handleFormSubmit}>
              Submit your message
          </button>
        </div>
      </form>
    </div>
  )

};

export default Contactme;




