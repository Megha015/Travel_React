import { React, useState } from "react";
import { FiSend } from "react-icons/fi";
import "./Contacts.scss";

const Contacts = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSendClick = () => {
    setMessageSent(true);
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
            required
          />
          <input
            className="textarea"
            data-aos="fade-up"
            type="textarea"
            placeholder="Enter your message"
            required
          />
          <button
            className="btn flex"
            data-aos="fade-up"
            type="submit"
            onClick={handleSendClick}
          >
            Send <FiSend className="icon" />
          </button>
          {messageSent && (
            <div className="popup">
              <p>Message sent!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
