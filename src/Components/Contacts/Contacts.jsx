import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Contacts.scss";

const Contacts = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    const enteredEmail = e.target.value;
    setEmail(enteredEmail);
    setIsEmailValid(validateEmail(enteredEmail));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSendClick = () => {
    if (email && message) {
      setMessageSent(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div className="first">
      <div className="contactDiv flex">
        <div data-aos="fade-out" className="text">
          <small>Keep in Touch</small>
          <h2>Travel with Us!!!</h2>
        </div>

        <div className="inputDiv flex">
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email id"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && (
            <p className="validationError">
              Please enter a valid email address
            </p>
          )}
          <input
            className="textarea"
            data-aos="fade-up"
            type="textarea"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            className="btn flex"
            data-aos="fade-up"
            type="submit"
            onClick={handleSendClick}
            disabled={!email || !message}
          >
            Send <FiSend className="icon" />
          </button>
          {messageSent ? (
            <div className="popup">
              <p>Message sent!</p>
            </div>
          ) : !email || !message ? (
            <div className="popup">
              <p>Please fill in all the input fields.</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
